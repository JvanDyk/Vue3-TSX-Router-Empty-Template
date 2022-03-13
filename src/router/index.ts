import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/Home'),
    props: {title: 'Welcome'}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;