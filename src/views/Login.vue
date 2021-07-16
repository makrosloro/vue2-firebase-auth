<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" name="email" id="email" placeholder="Email" v-model="email"><br>
    <input type="password" name="password" id="password" placeholder="Password" v-model="password"><br>
    <button @click="login">Connect</button>
    <p>You don't have an account? You can <router-link to="/sign-up">create one</router-link></p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data(){
    return{
      email: '',
      password: '',
    };
  },
  methods: {
    login(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user){
          console.log(user);
          alert('Well done! You are now connected');
        },
        function (error){
          alert('Ooppps. ' + error.message);
        }
      )
    },
  }
}
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }

  p {
    margin-top: 40px;
    font-size: 13px;
  }

  p a {
    text-decoration: underline;
    cursor: pointer;
  }

</style>