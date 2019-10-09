<template>
  <div class="menu">
    <h1>Menu</h1>
    <div class="container">
      <div v-bind:key="menuItem.id" v-for="menuItem in menu">
        <MenuItem v-bind:menuItem="menuItem" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from '../components/menu/MenuItem';

export default {
  name: "Menu",
  components: {
    MenuItem
  },
  data() {
    return {
      menu: [
        {
          image: 'http://placehold.it/250x250',
          name: 'Cheeseburger',
          price: '7',
          desc: 'Cheesy goodness'
        },
        {
          image: 'http://placehold.it/250x250',
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
  .container {
    display: flex;

    justify-content: center;
    align-items: center;
  }
</style>