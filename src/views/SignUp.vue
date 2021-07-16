<template>
  <div class="sign-up">
    <h3>Let's create a new account</h3>
    <input type="email" name="email" id="email" placeholder="Email" v-model="email"><br>
    <input type="password" name="password" id="password" placeholder="Password" v-model="password"><br>
    <button @click="signUp">Sign Up</button>
    <span>or <router-link to="/login">go back to login</router-link>.</span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUp",
  data(){
    return{
      email: '',
      password: '',
    };
  },
  methods: {
    signUp(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            console.log(user);
            alert('Your account has been created!!!');
          },
          (error) => {
            alert('Oooops. ' + error.message)
          }
      )
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