import { createRouter, createWebHistory } from 'vue-router';

import Contents from '@/view/Contents.vue';
import ProfileMe from '@/view/ProfileMe.vue';
const routes = [
  {
    path: '/',
    name: 'contents',
    component: Contents,
  },
  {
    path: '/ProfileMe',
    name: 'ProfileMe',
    component: ProfileMe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
