import { db } from "@/plugins/firestore";

export const state = () => ({
  index: [],
  post: {}
});

export const getters = {
  index: state => state.index,
  post: state => state.post
};

export const mutations = {
  setIndex: (state, toc) => state.index.push(toc),
  partialUpdateIndex: (state, { id, newToc }) => {
    const key = state.index.findIndex(toc => toc.content_id === id)
    if (key !== -1) {
      state.index.splice(key, 1, newToc);
    }
  },
  partialDeleteIndex: (state, { id }) => {
    const key = state.index.findIndex(toc => toc.content_id === id)
    if (key !== -1) {
      state.index.splice(key, 1);
    }
  },
  clearIndex: state => (state.index = []),
  setPost: (state, post) => (state.post = post)
};

export const actions = {
  /*
  ***************************************
  **       Index(記事一覧)操作用         **
  ***************************************
  */
  // 記事一覧を取得する
  async fetchIndex({ commit }) {
    await db
      .collection("post_index")
      .get()
      .then(querySnapshot => {
        commit("clearIndex");
        querySnapshot.forEach(doc => {
          commit("setIndex", doc.data());
        });
      });
  },
  // 引数のインデックスを追加する
  async addIndex ({ commit }, { payload }) {
    await db
      .collection("post_index")
      .add(payload)
      .then(doc => {
        commit("setIndex", payload);
      })
      .catch(e => { });
  },
  // 引数のidに一致するインデックスを更新する
  async updateIndex ({ commit }, { payload, id }) {
    // インデックスのコレクションから該当記事のドキュメントを取得
    await db
      .collection("post_index")
      .where("content_id", "==", id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(matchDoc => {
          // 更新後のインデックスを作成する
          const newToc = {
            title: payload["title"],
            summary: payload["summary"],
            insert_timestamp: payload["insert_timestamp"],
            update_timestamp: payload["update_timestamp"],
            image_url: payload["image_url"],
            content_id: id
          };
          // 上記検索で一致したドキュメントに対して，インデックスの内容を更新する
          db.collection("post_index")
            .doc(matchDoc.id)
            .update(newToc)
            .then(
              // store内のIndexを更新する
              commit("partialUpdateIndex", { id, newToc })
            )
            .catch(e => {
            });
        });
      })
      .catch(e => {
      });
  },
  // 引数のidに一致するインデックスを削除する
  async deleteIndex ({ commit }, { id }) {
    await db
      .collection("post_index")
      .where("content_id", "==", id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(matchDoc => {
          // マッチしたドキュメントを削除する
          db.collection("post_index")
            .doc(matchDoc.id)
            .delete()
            .then(
              // store内のIndexを更新する
              commit("partialDeleteIndex", { id })
            )
            .catch(e => {
            });
        });
      })
      .catch(e => { });
  },
  /*
  ***************************************
  **        Post(記事内容)操作用         **
  ***************************************
  */
  // 選択した記事を取得する
  async fetchPost({ commit }, id) {
    await db
      .collection("post_contents")
      .doc(id)
      .get()
      .then(doc => {
        commit("setPost", doc.data());
      });
  },
  // 記事を追加する
  async addPost({ commit, dispatch }, { payload }) {
    await db
      .collection("post_contents")
      .add(payload)
      .then(doc => {
        // 記事をstoreに追加
        commit("setPost", payload);
        // 記事用のpayloadを生成する
        payload = {
          title: payload["title"],
          summary: payload["summary"],
          insert_timestamp: payload["insert_timestamp"],
          update_timestamp: payload["update_timestamp"],
          image_url: payload["image_url"],
          content_id: doc.id
        };
        // 目次をstoreに追加
        dispatch("addIndex", { payload });
      })
      .catch(e => {});
  },

  // 記事を更新する
  async updatePost({ commit, dispatch }, { id, payload }) {
    await db
      .collection("post_contents")
      .doc(id)
      .update(payload)
      .then(doc => {
        // 記事をstoreに追加
        commit("setPost", payload);
        // 目次をstoreに追加
        payload = {
          title: payload["title"],
          summary: payload["summary"],
          insert_timestamp: payload["insert_timestamp"],
          update_timestamp: payload["update_timestamp"],
          image_url: payload["image_url"],
          content_id: id
        };
        dispatch("updateIndex", { id, payload });
      })
      .catch(e => {
      });
  },
  // 記事を削除する
  async deletePost({ commit, dispatch }, { id }) {
    await db
      .collection("post_contents")
      .doc(id)
      .delete()
      .then(() => {
        // 記事をstoreから削除
        commit("setPost", {});
        // 目次をstoreから削除
        dispatch("deleteIndex", { id });
      })
      .catch(e => {
      });
  }
};
