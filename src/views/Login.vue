<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" name="email" id="email" placeholder="Email"><br>
    <input type="password" name="password" id="password" placeholder="Password"><br>
    <button>Connect</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{};
  },
  methods: {}
}
</script>

<style scoped>
  .login{
    margin-top: 40px;
  }
</style>