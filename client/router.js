import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/components/Main'),
    children: [
      { path: 'popular', name: 'popular' },
      { path: 'new', name: 'new' },
      { path: 'slots', name: 'slots' },
      { path: 'table', name: 'table-games' },
      { path: 'jackpot', name: 'jackpot' },
      {
        path: '/tournament',
        component: () => import('@/components/Main/Tournament'),
        children: [
          {
            path: '',
            name: 'tournaments',
            redirect: { name: 'active' }
          },
          {
            path: 'active',
            name: 'active',
            component: () => import('@/components/Main/Tournament/Active')
          },
          {
            path: 'upcoming',
            name: 'upcoming',
            component: () => import('@/components/Main/Tournament/Upcoming')
          },
          {
            path: 'finished',
            name: 'finished',
            component: () => import('@/components/Main/Tournament/Finished')
          }
        ]
      },
      { path: 'promotion', name: 'promotions' },
      { path: 'games', name: 'my-games' }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
