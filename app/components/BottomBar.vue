<!--
  BottomBarコンポーネント
  画面下に固定でリンクナビゲーションを表示する

  dataa:
    menus - ナビゲーションに表示する項目を設定
-->

<template>
  <v-bottom-navigation
    fixed
    grow
    mandatory
    dark
    color="white"
  >
    <v-btn
      v-for="menu in menus"
      :key="menu.title"
      :to="menu.to"
      nuxt
    >
      <span>{{ menu.title }}</span>
      <v-icon>{{ menu.icon }}</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { title: 'Profile', icon: 'fas fa-address-card', to: '/' },
        { title: 'Skill Set', icon: 'fas fa-cogs', to: '/topics/skillset' },
        { title: 'Career', icon: 'fas fa-road', to: '/topics/career' },
        { title: 'Blog', icon: 'fas fa-archive', to: '/blog/list' },
      ],
    };
  },
};
</script>

<style scoped></style>
