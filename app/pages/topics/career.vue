<template>
  <div>
    <Headline>
      CAREER
    </Headline>
    <v-timeline
      :dense="dense"
      class="mr-5"
    >
      <v-timeline-item
        v-for="career in careers"
        :key="career.title"
        :fill-dot="fillDot"
        :icon="career.icon"
      >
        <v-card
          class="elevation-2"
          data-aos="zoom-in"
          data-aos-once="true"
        >

          <v-card-title class="headline">
            {{ career.title }}
          </v-card-title>
          <v-card-subtitle>{{ career.term }}</v-card-subtitle>
          <v-card-text class="multiline-text mt-0 mb-0 pb-0 pt-0">
            {{ career.contents }}
          </v-card-text>
          <v-card-text
            v-if="career.experiences"
            class="font-weight-bold pb-0"
          >経験
          </v-card-text>
          <div class="pb-3 pt-3">
            <v-chip
              v-for="(experience, i) in career.experiences"
              :key="`exp-${i}`"
              class="ml-2 mb-1"
            >{{ experience }}</v-chip>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-divider />
  </div>
</template>

<script>
import Headline from '@/components/Headline.vue'

export default {
  components: {
    Headline
  },
  data() {
    return {
      dense: true,
      fillDot: true,
      careers: [
        {
          title: '大学で4年間学ぶ',
          term: '2014/04〜2018/3',
          icon: 'fas fa-user-graduate',
          contents: `静岡大学工学部数理システム工学科で4年間，数値シミュレーション技法などを学ぶ。
          B4では車車間通信技術による交通流円滑化戦略をPythonのシミュレーションベースで研究。車車間通信以外にも無線通信広範を扱う研究室であったため，ネットワーク(TCP/IP)の基礎知識についても少し身に着ける事が出来た。`,
          experiences: ['C', 'Python3', 'Linux'],
        },
        {
          title: '株式会社アイヴィス新卒入社',
          term: '2018/04',
          icon: 'fas fa-running',
          contents: `大学卒業後，中小SIerの株式会社アイヴィスに新卒入社。
          エンジニアとしてのスタートを切る。`,
        },
        {
          title: '新人研修',
          term: '2018/04〜2018/6 (3ヶ月)',
          icon: 'fas fa-chalkboard-teacher',
          contents: ` SQL, HTML, Java等を含んだ一般的な新人研修。
          共同演習では試験問題の回答&採点アプリ(社内での新人研修利用を想定)をJava(JSP & Servelet)で作成。
          制作メンバーは6人。この研修でチーム開発の楽しさと難しさを知る。`,
          experiences: ['Java', 'HTML', 'SQL'],
        },
        {
          title: '運送業者の業務アプリ保守・追加機能開発',
          term: '2018/07〜2018/12 (6ヶ月)',
          icon: 'fas fa-truck',
          contents: `運送業者の業務アプリの保守現場に配属。
          業務要件，ブラウザバージョン変更に伴うシステムテスト(設計書修正, テスト証跡作成)を担当。
          テスト終了後，追加機能開発としてExcelファイルを管理するためのを基本設計から製造, リリースまで従事。
          テスト時のメンバーは4〜6人。追加機能開発は主に一人で担当。初配属の現場で機能開発を一貫して担当し，リリースできた事で`,
          process: ['設計', '製造', 'テスト'],
          experiences: ['Java', 'HTML', 'CSS', 'Javascript', 'SQL'],
        },
        {
          title: '運送業者の業務アプリ新規開発',
          term: '2019/01〜2019/02 (2ヶ月)',
          icon: 'fas fa-file-invoice',
          contents: `保守案件で携わっていたアプリに連携予定の新規開発に異動。
          帳票出力機能を基本設計から単体テストまで担当。プロジェクトメンバーは10〜15人。`,
          experiences: ['Java', 'HTML', 'CSS', 'Javascript', 'SQL'],
        },
        {
          title: 'SaaS型データリポジトリ管理システムの開発補佐',
          term: '2018/04〜2018/6 (9ヶ月)',
          icon: 'fas fa-cloud-upload-alt',
          contents: `研究機関に向けたSaaS型リポジトリ管理システムの新規開発案件に顧客現場で単身常駐。
          キックスタート3年目で，アプリ開発は他ベンダーが請負。
          当初はスプリント毎の開発機能のテストを担当する予定だったが，インフラ設計が追いついていないことを顧客と話し合い，インフラの設計・構築・検証を担当。
          裁量も多く，ベテランのシニアエンジニアの方とも仕事をこなせたため，この現場での経験が自分の中で特に色濃く根付いている。主に以下を経験。`,
          experiences: ['Python', 'Flask', 'bash', 'Docker', 'Kubernetes'],
          topics: [
            'AWS上でのマネージドサービス(RDS, AES)を含むKubernetes環境のテスト構築(Cloudformation, eksctlでコードベースで作成)',
            'クローズドβ環境(KVM on OpenStackで約20サーバーが稼働し，その上でWebサーバー・関連ミドルウェアがdocker-composeで起動，Prometheus+Grafanaで監視)の構築・運用',
            '開発中アプリのElasticsearchバージョン上げ(v2→v6)のための互換性調査',
            'SonarQubeによる静的解析のためのPyLintルール・コーディング規約の策定(※運用方針も検討したが実運用には至らず)',
            'SSO用のShibboleth SPの構築・検証',
            'Kubernetesの調査，調査報告用のWiki作成',
            'クローズドβ環境のバージョン更新のためのAnsible Playbookの作成',
            'βテスト後の顧客ヒアリング，開発コスト等の検討',
          ],
        },
        {
          title: '異常検知システムのPOC案件',
          term: '2019/01〜2019/02 (3ヶ月)',
          icon: 'fas fa-video',
          contents:
            'PoCの画像認識による異常検知を目的としたIoTシステムの基盤(Jetson Nano,Jetson XavierをワーカーノードとしたkubeadmによるKubernetes環境)構築案件に携わる。その他Jetson上でのGPU利用のためのDockerfile作成，環境構築ドキュメント作成も担当。',
        },
      ],
    };
  },
};
</script>

<style scoped>
.multiline-text {
  white-space: pre-line;
  word-wrap: break-word;
}
</style>
