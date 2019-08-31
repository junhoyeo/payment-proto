import Vue from 'vue';
import Router from 'vue-router';

// eslint-disable-next-line
import Index from './pages/Index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:product/:price',
      name: 'home',
      component: Index,
    },
  ],
});
