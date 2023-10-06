import CreateAccount from './views/CreateAccount.vue';
import Login from './views/Login.vue';
import Home from './views/Home.vue';

import { useAppStore } from './stores/useAppStore';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/create-account', name: 'Signin', component: CreateAccount },
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const store = useAppStore();

  const token = store.token;

  if (!token && to.name == 'Home') {
    router.push({ name: 'Login' });
    return false;
  }

  return true;
});

export default router;
