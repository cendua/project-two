import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () => import("../views/home/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "请求失败",
    },
    component: () => import("../views/404/index.vue"),
  },
  {
    path: "/layout",
    name: "暂定侧边栏",
    meta: {
      title: "侧边栏",
    },
    component: () => import("../views/layout/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
