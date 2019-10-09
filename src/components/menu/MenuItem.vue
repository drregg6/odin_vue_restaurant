<template>
  <div class="menu-item">
    <img :src="menuItem.image">
    <h3>{{ menuItem.name }}</h3>
    <p>
      {{ menuItem.desc }}
    </p>
    <p>
      {{ menuItem.price }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["menuItem"]
}
</script>

<style scoped>
  .menu-item {
    margin: 0 2rem;
  }
</style>