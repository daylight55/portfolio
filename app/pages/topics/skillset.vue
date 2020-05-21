<template>
  <div>
    <Headline>
      SKILL SET
    </Headline>

    <v-tabs>
      <v-tab
        v-for="item in tab_items"
        :key="item.link"
        :href="`#tab-${item.link}`"
        :grow="grow"
      > {{ item.link_name }}
      </v-tab>
      <v-tab-item
        v-for="(contents, genre) in tab_contents"
        :key="genre"
        :value="'tab-' + genre"
      >
        <h2 class="mt-6">
          {{ contents.headline }}
        </h2>
        <v-divider />

        <v-row>
          <v-col
            v-for="item in contents.content"
            :key="item.title"
            lg="3"
            md="4"
            sm="6"
            xs="12"
          >
            <v-card>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-rating
                :value="item.rating"
                readonly="true" />
              <v-card-text>{{ item.detail }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Headline from '@/components/Headline'

export default {
  components: {
    Headline
  },
  data() {
    return {
      tab: null,
      readonly: true,
      grow: true,
      tab_items: [
        { link: 'frontend', link_name: 'FRONT' },
        { link: 'backend', link_name: 'BACK' },
        { link: 'infrastructure', link_name: 'INFRA' },
        { link: 'middleware', link_name: 'MIDDLE' },
      ],
      tab_contents: {
        frontend: {
          headline: "フロントエンド",
          content: [
            { title: 'HTML', rating: '3', detail: 'DOM構造などの基礎知識については修得済みです。' },
            { title: 'CSS', rating: '2', detail: 'グリッドレイアウト, クラスセレクターなどの基礎的なことについてはある程度理解しているつもりです。CSS設計などは現在勉強中です。' },
            { title: 'Javascript', rating: '3', detail: '初級程度' },
            { title: 'Vue', rating: '3', detail: '本ポートフォリオ作成にあたって，Vue, Nuxt, Vuetifyについて学習しました。' },
            { title: 'jQuery', rating: '3', detail: '初級程度' },
          ]
        },
        backend: {
          headline: "バックエンド系",
          content: [
            { title: 'Java', rating: '3', detail: '一年目では。モダンな文法などは恥ずかしながら経験がないのですが，必要に応じて学習していきます。' },
            { title: 'Python', rating: '4', detail: '簡単なスクリプトの作成などは。実務では，SonarQubeの' },
            { title: 'Go', rating: '2', detail: '『Tour of Go』，簡単な入門書などは終え，基本文法については勉強済みです。' },
          ]
        },
        infrastructure: {
          headline: "インフラ",
          content: [
            { title: 'Docker', rating: '4', detail: '初級程度' },
            { title: 'Kubernetes', rating: '3', detail: '初級程度' },
            { title: 'Vagrant', rating: '3', detail: '初級程度' },
            { title: 'KVM', rating: '3', detail: '初級程度' },
          ]
        },
        middleware: {
          headline: "ミドルウェア",
          content: [
            { title: 'PostgreSQL', rating: '4', detail: '初級程度' },
            { title: 'Elasticsearch', rating: '3', detail: '初級程度' },
            { title: 'Redis', rating: '3', detail: '初級程度' },
            { title: 'RabbitMQ', rating: '3', detail: '初級程度' },
            { title: 'Shibboleth', rating: '3', detail: '初級程度' },
            { title: 'LDAP', rating: '3', detail: '初級程度' },
          ]
        }
      }

    };
  },
};
</script>

<style scoped>
.v-tabs {
  width: 100%;
  height: 100%;
}

.v-window {
  height: calc(100% - 48px); /* タブ領域の高さを引く */
}

.v-tab__items,
.v-window-item,
.v-window >>> div.v-window__container {
  /* ここが重要 */
  height: 100%;
}
</style>
