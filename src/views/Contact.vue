<template>
  <div class="contact">
    <h1>Contact</h1>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      phone: '2159990065',
      email: 'odinrestaurant@email.com',
      address: {
        number: '14',
        street: 'Pickett Drive',
        city: 'Philadelphia',
        state: 'PA',
        zip: '19102'
      }
    }
  }
}
</script>

<style scoped>
  .contact {
    margin: 3rem auto;
  }
</style>