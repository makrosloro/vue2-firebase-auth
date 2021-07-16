import Vue from 'vue'
import firebase from "firebase";
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import SignUp from "@/views/SignUp";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3If00QVTTMTvG3DjjXndc70RrSrmnHjQ",
  authDomain: "vue2-firebase-auth-ec115.firebaseapp.com",
  projectId: "vue2-firebase-auth-ec115",
  storageBucket: "vue2-firebase-auth-ec115.appspot.com",
  messagingSenderId: "591170449804",
  appId: "1:591170449804:web:f92f25552171e71265e6a9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
