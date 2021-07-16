import firebase from "firebase";
import Vue from 'vue'

import App from "../App.vue";
import VueRouter from 'vue-router'

//Routes
import Home from '@/views/Home.vue'
import Login from "@/views/Login";
import SignUp from "@/views/SignUp";

Vue.config.productionTip = false;

let app = '';

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
firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
})

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
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
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if(!requiresAuth && currentUser) next('home');
  else next();
})

export default router
