<template>
  <div>
    <Headline>
      BLOG
    </Headline>

    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="(toc, i) in sortedIndex"
        :key="i"
        xl="3"
        lg="4"
        md="6"
        sm="12"
        cols="12"
      >
        <v-card
          class="ma-2"
          outlined
          elevation="4"
          height="550px"
          min-width="340px"
          :to="{path:'/blog/' + toc.content_id + '/show'}"
          nuxt
        >
          <v-card-title class="blog-title mb-0">
            {{ toc.title | truncate(29) }}
          </v-card-title>
          <v-divider />
          <v-card-text class="blog_timestamp text-right">
            投稿日時: {{ toc.insert_timestamp | displayDate }}
          </v-card-text>
          <v-card-text
            v-if="toc.update_timestamp"
            class="blog_timestamp text-right"
          >
            更新日時: {{ toc.update_timestamp | displayDate }}
          </v-card-text>
          <v-layout justify-center>
            <v-img
              :src="toc.image_url"
              height="300"
              max-width="15em"
              contain
            />
          </v-layout>
          <v-card-subtitle
            class="blog-summary pb-8"
          >{{ toc.summary | truncate(65) }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { parse, format } from "date-fns";
import ja from "date-fns/locale/ja";
import Headline from '@/components/Headline'

export default {
  components: {
    Headline
  },
  filters: {
    displayDate(dateString) {
      return format(
        parse(dateString, "yyyy/MM/dd HH:mm:ss", new Date()),
        "yyyy年MM月dd日 HH時mm分",
        { locale: ja }
      )
    },
    truncate(text, length) {
      const ommision = "...";
      let fulltext_length = 0
      // 文字列を1文字ずつ、半角か全角か判定する
      for (let i = 0; i < text.length; i++) {
        const character = text.charCodeAt(i)
        // 半角・全角判定
        if (character >= 0x0 && character <= 0x7F) {
          // 半角文字は0.5文字としてカウント
          fulltext_length += 0.5
        } else {
          // 全角文字は1文字としてカウント
          fulltext_length += 1
        }
      }
      if (fulltext_length <= length) {
        return text;
      }
      // 引数の文字数以降は省略
      return text.substring(0, length) + ommision;
    }
  },
  async asyncData({ store }) {
    if (store.getters['blog/index'].length !== 0) {
      return
    }
    await store.dispatch('blog/fetchIndex')
  },
  computed: {
    ...mapGetters({
      index: 'blog/index',
      isLogin: "auth/isLogin",
    }),
    sortedIndex() {
      return this.index.slice(0).sort((a, b) => {
        return (a.insert_timestamp < b.insert_timestamp ? 1 : -1)
      })
    }
  },
};
</script>

<style>
.blog-title {
  min-height: 5em;
  vertical-align: text-top;
  display: inline-block;
}

.blog-summary {
  vertical-align: text-top;
  display: inline-block;
}

.blog_timestamp {
  padding-top: 3px;
  padding-bottom: 1px;
}
</style>
