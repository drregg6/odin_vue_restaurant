<template>
  <div class="menu">
    <h2>Menu</h2>
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
          image: 'http://placekitten.com/250/250',
          name: 'Cheeseburger',
          price: '7',
          desc: 'Cheesy goodness'
        },
        {
          image: 'http://placekitten.com/250/250',
          name: 'Chicken Parm Sub',
          price: '10',
          desc: 'Classic!'
        },
        {
          image: 'http://placekitten.com/250/250',
          name: 'Eggplamt Parm Sub',
          price: '10',
          desc: 'For the vegetarians!'
        },
        {
          image: 'http://placekitten.com/250/250',
          name: 'Reuben',
          price: '10',
          desc: 'Deli-licious!'
        },
        {
          image: 'http://placekitten.com/250/250',
          name: 'Cheesesteak',
          price: '10',
          desc: 'Philly knows hoagies!'
        },
        {
          image: 'http://placekitten.com/250/250',
          name: 'Grilled Cheese',
          price: '10',
          desc: 'With or without tomato!'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .menu {
    margin: 3rem auto;
  }
  .container {
    display: flex;

    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
</style>