<template>
  <div class="menu">
    <h1>Menu</h1>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menu: [
        {
          name: 'Cheeseburger',
          price: '7',
          desc: 'Cheesy goodness'
        },
        {
          name: 'Chicken Parm Sub',
          price: '10',
          desc: 'Classic!'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>