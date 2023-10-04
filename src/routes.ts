import CreateAccount from "./views/CreateAccount.vue";
import Login from "./views/Login.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/create-account", name: "Signin", component: CreateAccount },
  { path: "/login", name: "Login", component: Login },
  { path: "/", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
