<!--
  Headerコンポーネント
  dataa:
    drawer - 子コンポーネントのNavigationを開閉する値
    title  - ヘッダー左に表記する名前
-->

<template>
  <v-card>
    <v-app-bar
      fixed
      app
      dark
      :src="banar_image"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to right, rgba(43,37,39,1), rgba(43,37,39,0.1)"
        />
      </template>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        class="font-weight-medium"
        style="cursor: pointer"
        color="black"
        @click="$router.push('/')"
        v-text="title" />
      <v-spacer />
    </v-app-bar>
    <NavigationDrawer
      v-model="drawer"
    />
  </v-card>
</template>

<script>
import NavigationDrawer from '~/components/NavigationDrawer.vue';

export default {
  components: {
    NavigationDrawer,
  },
  data() {
    return {
      drawer: false,
      title: "Masa's Portfolio",
      banar_image: require('@/assets/mountain.jpg')
    };
  },
};
</script>
