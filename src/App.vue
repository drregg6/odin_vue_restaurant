<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from '@/components/layout/Header';

  export default {
    components: {
      Header
    }
  }
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    text-align: center;
    font-size: 16px;
    font-family: Verdana;
    margin: 0;
    padding: 0;
  }
</style>
