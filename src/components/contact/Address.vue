<template>
  <div class="container">
    <div class="content">
      <div class="address">
        <h3>Come visit!</h3>
        <p>
          {{ address.number }} {{ address.street }}<br>
          {{ address.city }}, {{ address.state }}<br>
          {{ address.zip }}
        </p>
      </div>
      <div class="phone">
        <h3>Or make a reservation</h3>
        <p>
          {{ phone }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Address",
  props: ["address", "phone"]
}
</script>

<style scoped>
  .content {
    display: flex;

    margin: 2rem 0;
  }

  .address, .phone {
    width: 40%;
    margin: 0 5%;
  }
</style>