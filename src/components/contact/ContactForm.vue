<template>
  <div class="contact-form">
    <h3>Email us!</h3>
    <p>
      Please send us an email at {{ email }} or use this form!
    </p>
    <form v-on:submit="sendMessage">
      <input v-model="yourEmail" type="text" placeholder="Email address" />
      <input v-model="subject" type="text" placeholder="Subject" />
      <textarea v-model="message" placeholder="Message"></textarea>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: ["email"],
  data() {
    return {
      yourEmail: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    sendMessage(event) {
      event.preventDefault();
      const newMessage = {
        yourEmail: this.yourEmail,
        subject: this.subject,
        message: this.message
      };

      console.log(newMessage);

      this.yourEmail = '';
      this.subject = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
  h3 {
    margin-top: 0;
    margin-bottom: 0; 
  }
  p {
    margin: .5rem 0;
  }

  form {
    margin: 1rem 0;
    display: flex;

    flex-direction: column;
  }
  input[type="text"],
  input[type="submit"],
  textarea {
    padding: 5px 7px;
    font-size: 1rem;
    outline: none;
    margin: .15rem 0;
  }

  textarea {
    font-family: inherit;
    font-size: inherit;
    height: 150px;
    resize: none;
  }

  input[type="submit"] {
    background: #fff;
    border: 1px solid black;
  }
  input[type="submit"]:hover {
    background: #eee;
  }
</style>