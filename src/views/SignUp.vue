<template>
  <div class="sign-up">
    <h3>Let's create a new account</h3>
    <input type="email" name="email" id="email" placeholder="Email"><br>
    <input type="password" name="password" id="password" placeholder="Password"><br>
    <button @click="login">Sign Up</button>
    <span>or <router-link to="/login">go back to login</router-link>.</span>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data(){
    return{};
  },
  methods: {
    login(){
      this.$router.replace('home');
    },
  }
}
</script>

<style scoped>
  .sign-up {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }

  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }

</style>