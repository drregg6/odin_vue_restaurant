<template>
  <div class="contact">
    <h2>Contact</h2>
    <div class="container">
      <Address v-bind:address="address" v-bind:phone="phone" />
      <ContactForm v-bind:email="email" />
    </div>
  </div>
</template>

<script>
import Address from '@/components/contact/Address';
import ContactForm from '@/components/contact/ContactForm';

export default {
  name: "contact",
  components: {
    Address,
    ContactForm
  },
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

  .container {
    width: 60vw;
    margin: 0 auto;
  }
</style>