<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        lg="9"
        md="9"
        sm="12"
        cols="12"
      >
        <h1
          class=""
          style="white-space: pre-line;"
        >
          {{ post.title }}
        </h1>
        <v-card-text>{{ post.summary }}</v-card-text>
        <v-card-text class="blog_timestamp text-right">
          投稿日時: {{ post.insert_timestamp | displayDate }}
        </v-card-text>
        <v-card-text
          v-if="post.update_timestamp"
          class="blog_timestamp text-right"
        >
          更新日時: {{ post.update_timestamp | displayDate }}
        </v-card-text>
        <v-divider />

        <Viewer
          ref="toastuiViewer"
          class="mt-12"
        />
        <v-btn
          class="mt-12"
          text
          @click="backPage"
        >
          <v-icon small>
            fas fa-arrow-left
          </v-icon>
          ブログ一覧へ戻る
        </v-btn>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { parse, format } from "date-fns";
import ja from "date-fns/locale/ja";
import { Viewer } from '@/components/tui-editor';

export default {
  components: {
    Viewer
  },
  filters: {
    displayDate(dateString) {
      return format(
        parse(dateString, "yyyy/MM/dd HH:mm:ss", new Date()),
        "yyyy年MM月dd日 HH時mm分",
        { locale: ja }
      )
    }
  },
  async asyncData({ store, route }) {
    await store.dispatch('blog/fetchPost', route.params.id )
    return {
      blog_id: route.params.id
    }
  },
  computed: {
    ...mapGetters({
      isLogin: "auth/isLogin",
      post: 'blog/post'
    })
  },
  mounted() {
    this.$refs.toastuiViewer.invoke('setMarkdown', this.post.contents);
  },
  methods: {
    // 前のページに戻る
    backPage() {
      this.$router.back()
    }
  }
}
</script>

<style>
@import 'codemirror/lib/codemirror.css';
@import '@toast-ui/editor/dist/toastui-editor-viewer.css';
@import '@toast-ui/editor/dist/toastui-editor.css';
@import 'highlight.js/styles/github.css';

.blog_timestamp {
  padding-top: 3px;
  padding-bottom: 1px;
}
</style>
