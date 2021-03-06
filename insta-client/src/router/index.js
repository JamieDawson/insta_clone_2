//OLD NAME
//router.js in root file!
//This is how vue USE TO Be. This file is the new way!

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import Profile from '../views/Profile.vue';
import store from '../store/index.js';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import axios from 'axios';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/newpost',
    name: 'post',
    component: Post,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.onReady(() => {
  store.commit('isAuthenticated');

  axios
    .get(store.state.api_url + 'post/getpost')
    .then(response => {
      store.commit('getFeed', response.data);
    })
    .catch(err => {
      if (err) throw err;
    });
});

router.beforeEach((to, from, next) => {
  store.commit('isAuthenticated');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    if (localStorage.getItem('jwt') != null) {
      next({
        path: '/',
        params: { nextUrl: '/' }
      });
    } else {
      next();
    }
  }
});

export default router;
