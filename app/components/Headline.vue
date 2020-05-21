<template>
  <div>
    <h2 class="mt-6 mb-6">
      <slot />
    </h2>
    <v-divider />
  </div>

</template>

<style scoped>
h2 {
  padding: 0.25em 0.5em;/*上下 左右の余白*/
  border-left: solid 5px #7db4e6;/*左線*/
}
</style>
