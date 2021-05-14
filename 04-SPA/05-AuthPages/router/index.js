import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexPage from '../views/IndexPage';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  base: '/04-SPA/05-AuthPages',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: ()=> import('../views/RegisterPage.vue'),
    },
  ],
});
