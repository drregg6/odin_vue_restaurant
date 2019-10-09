<template>
  <div class="menu-list">
    <div v-bind:key="menuItem.id" v-for="menuItem in menu">
      <h3>{{ menuItem.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuList",
  props: ["menu"]
}
</script>

<style scoped>

</style>