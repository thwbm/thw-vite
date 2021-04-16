import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/components/layout/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/components/test/HelloWorld.vue"),
  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: () => import("@/components/test/home.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
