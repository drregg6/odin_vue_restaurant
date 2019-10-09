<template>
  <footer>
    <p>
      &copy;{{ getDate() }} Dave Regg
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    getDate() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
  footer {
    padding: 2rem;
    background: #333;
    color: #fff;
  }
</style>