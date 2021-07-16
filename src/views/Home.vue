<template>
  <div class="home">
    <HelloWorld msg="Welcome to your Vue.js App"></HelloWorld>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>

import firebase from "firebase";
import HelloWorld from "@/components/HelloWorld";

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
}
</script>
