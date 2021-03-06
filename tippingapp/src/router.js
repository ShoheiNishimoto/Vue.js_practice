import Vue from 'vue';
import Router from 'vue-router';
import Register from './views/register.vue';
import Login from './views/login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Register,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
});
