import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import PostList from '@/view/PostList.vue';
import ProfileMe from '@/view/ProfileMe.vue';

const app = createApp(App);

const routes = [
  { path: '/posts', component: PostList },
  { path: '/profileMe', name: 'profileMe', component: ProfileMe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.mount('#app');
