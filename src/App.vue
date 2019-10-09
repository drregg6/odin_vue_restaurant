<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/layout/Header';
  import Footer from '@/components/layout/Footer';

  export default {
    components: {
      Header,
      Footer
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
