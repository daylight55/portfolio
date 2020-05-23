<template>
  <div>
    <Headline>
      PROFILE
    </Headline>

    <v-row
      align="center"
      justify="center"
    >
      <v-avatar
        size="350"
        class="mt-6"
      >
        <v-img :src="icon_src" />
      </v-avatar>

    </v-row>

    <v-row
      justify="center"
    >
      <v-col
        xl="6"
        lg="6"
        md="6"
        sm="6"
        cols="12"
        class="pa-6"
      >
        <h2>まさ</h2>
        <p class="ml-2">
          インフラ志望のエンジニア3年目。特に関心があるのはDocker/Kubernetes。最近はフロントエンドを触れないコンプレックスを解消するため，Vue, Nuxt等を勉強中。
        </p>

        <div class="mt-3 mb-3">
          <h3>LINKS</h3>
          <div class="ml-2">
            <div>
              <a
                :href="twitter_link"
                target="”_blank”">
                <v-icon>fab fa-twitter</v-icon>
                <span>@jojomasanori3</span>
              </a>
              (日常)
            </div>
            <div>
              <a
                :href="twitter_link_engineer"
                target="”_blank”"
              >
                <v-icon>fab fa-twitter</v-icon>
                <span>@daylight552</span>
              </a>
              (技術情報共有用予定)
            </div>
            <div>
              <a
                :href="github_link"
                target="”_blank”">
                <v-icon>fab fa-github</v-icon>
                <span>@daylight55</span>
              </a>
            </div>
          </div>
        </div>

        <h3>経験</h3>
        <p class="ml-2">
          Web系ではインフラ寄りの方が経験あります。
        </p>
        <h3>趣味</h3>
        <p class="ml-2">
          サブカル全般好きです。最近は大学時代に打ち込んでいた登山に復帰しようかと考え中。
        </p>
      </v-col>


    </v-row>

  </div>


</template>

<script>
import Headline from '@/components/Headline'

export default {
  components: {
    Headline
  },
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icon_src: require('@/assets/myIcon.jpg'),
      twitter_link: "https://twitter.com/jojomasanori3",
      twitter_link_engineer: "https://twitter.com/daylight552",
      github_link: "https://github.com/daylight55"
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
