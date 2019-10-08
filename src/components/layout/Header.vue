<template>
  <header class="header">
    <h1>The Odin Restaurant</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    padding: 5rem;
    color: #fff;
    background: #333;
  }

  header a {
    color: #fff;
    text-decoration: none;
  }
  header a:hover {
    text-decoration: underline;
  }
</style>