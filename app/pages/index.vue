<template>
  <div>
    <Headline>
      PROFILE
    </Headline>

    <v-row
      align="center"
      justify="center">
      <v-avatar
        size="300"
        class="mt-6"
      >
        <v-img :src="icon_src" />
      </v-avatar>
    </v-row>

    <v-row
      align="center"
      justify="center"
    >
      <div class="ma-6">
        <h2>まさ</h2>

        <v-card-subtitle>LINKS</v-card-subtitle>
        <div>
          <v-icon>fab fa-twitter</v-icon><a :href="twitter_link">@jojomasanori3</a>
        </div>
        <div>
          <v-icon>fab fa-github</v-icon><a :href="twitter_link">@jojomasanori3</a>
        </div>


        <h3>長所</h3>
        <p>長所は〜</p>
        <h3>短所</h3>
        <p>短所は〜</p>
        <h3>趣味</h3>
        <p>なんやらかんやら</p>
        <h3>自己PR</h3>
        <p />
      </div>
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
      twitter_link: "http://twitter.com"
    };
  },
};
</script>
