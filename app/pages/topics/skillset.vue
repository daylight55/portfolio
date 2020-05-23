<template>
  <div>
    <Headline>
      SKILL SET
    </Headline>

    <v-tabs v-if="$vuetify.breakpoint.xs">
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
            cols="12"
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

    <div
      v-for="(contents, genre) in tab_contents"
      v-else
      :key="genre"
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
          <v-card height="100%">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-rating
              :value="item.rating"
              readonly="true" />
            <v-card-text>{{ item.detail }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
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
            { title: 'HTML', rating: '3', detail: '簡単なページであればある程度書けると思います。SEO対策などは勉強中です。' },
            { title: 'CSS', rating: '2', detail: 'レスポンシブデザインなどは正直詰まることが多いです...。まずは本ポートフォリオを改良していく中で実践的なスキルを身に付けていきたいと思います。' },
            { title: 'Vue', rating: '3', detail: '本ポートフォリオ作成にあたって，Vue, Nuxt, Vuetifyについて学習しました。小規模なアプリでの開発の流れはある程度見えてきた気がします。' },
            { title: 'jQuery', rating: '3', detail: '実務でAjaxでDOMを更新する処理などは書きました。' },
          ]
        },
        backend: {
          headline: "バックエンド系",
          content: [
            { title: 'Java', rating: '3', detail: '一年目はStrutsをベースにしたFWでのアプリ開発を経験しました。モダンな文法などは恥ずかしながら経験がないのですが，必要に応じて学習していきます。' },
            { title: 'Python', rating: '3', detail: 'FlaskをラップしたFWで開発されたアプリのエラー原因解析，マルチテナント利用のためのAPI調査などでコードを読む機会は多かったです。また，Flaskでの簡易的なサーバー作成，静的解析ツールのAPIを叩いて解析結果のスプレッドシートを得るスクリプト作成などを行いました。最近はDjango REST frameworkを勉強中です。' },
            { title: 'Go', rating: '2', detail: '開発での利用は未経験です。『A Tour of Go』，『Goプログラミング実践入門』などを通して現在勉強中です。' },
          ]
        },
        infrastructure: {
          headline: "インフラ・仮想化",
          content: [
            { title: 'AWS', rating: '3', detail: '基本的な操作はある程度出来ます。実務ではCloudformationによるRDS,AES,ECR等を含めたEKS環境を構築するスクリプトの作成を行いました。他にもIoT絡みの案件でAWS Greengrassの調査なども行いました。' },
            { title: 'Docker', rating: '4', detail: '簡単なDockerfileの作成，dockerコマンドの操作などが出来ます。実務ではarm64アーキテクチャ環境でのPyTorchを利用した画像認識アプリのDockerfile作成などを行いました。' },
            { title: 'Kubernetes', rating: '3', detail: '簡単なマニフェストの作成，kubectlの基本的な操作などが出来ます。実務ではエッジ端末を含めたkubeadmによるKubernetes環境構築，AWS上でのEKS環境の構築などを行いました。書籍やMeetupを通じて基本的な概念については理解しているつもりですが，運用経験はまだありません。' },
            { title: 'Ansible', rating: '3', detail: '実務ではDocker環境の定期的なイメージ更新，データのバックアップ&レストアの運用のためのプレイブックの作成・運用などを行いました。' },
            { title: 'VirualBox', rating: '3', detail: 'ネットワーク設定，SSH接続設定，開発環境の構築などはある程度問題ありません。' },
            { title: 'Vagrant', rating: '3', detail: '簡単なプロビジョニング処理等を含めた開発環境の構築が出来ます。実務では開発環境のKubernetes環境構築のためのVagrantfile作成などをしました。' },
            { title: 'KVM', rating: '3', detail: '実務では，共通設定を行ったベースイメージを作成後，Openstack上のVMで20サーバーをクローンで構築，運用の中でLVMで作成したストレージをfdiskで容量変更などを経験しました。' },
          ]
        },
        middleware: {
          headline: "ミドルウェア系・その他",
          content: [
            { title: 'nginx', rating: '2', detail: '簡単なリバプロとしてのnginx構築などは出来ます。複雑なコンフィグ作成などは経験不足な所があります。' },
            { title: 'PostgreSQL', rating: '2', detail: 'ログ出力の設定，簡単なダンプ&リストアは出来ます。チューニング等は未経験です。' },
            { title: 'Elasticsearch', rating: '3', detail: '実務では開発環境のバージョンを2系から6系へ変更するため，インデックステンプレートやプラグインの変更箇所調査・実施などを行いました。シャードなどの基本的な概念についてはある程度理解しています。' },
            { title: 'Redis', rating: '2', detail: '簡易的な検証用アプリでの利用経験があります。クラスタでの利用などは未経験です。' },
            { title: 'Shibboleth', rating: '2', detail: 'DockerでのShibboleth SPの構築などを経験しました。' },
            { title: 'Firebase', rating: '2', detail: '本ポートフォリオのブログ投稿機能の作成にあたって，Firebase Auth, Firebase Storeについて学習しました。' },
            { title: 'Redmine', rating: '3', detail: 'textileでのWiki作成など，一通りの操作は出来ます。かんばん運用のベストプラクティスは' },
            { title: 'SonarQube', rating: '2', detail: '静的コード解析導入のため，Lintルールの設定やプロジェクト適用に向けての運用方針を検討したことがあります。ただ残念ながら実運用には至りませんでした。' },
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
