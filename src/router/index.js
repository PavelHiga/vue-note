import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  {
    name: "Create",
    path: "/create",
    component: () => import("../views/CreateView.vue"),
  },
  {
    name: "id",
    path: "/:id",
    component: () => import("../views/NoteView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
