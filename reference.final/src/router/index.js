import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "reference.final",
    component: () => import("@/views/mainPage.vue"),
    meta: {
      showSkinButtons: true,
    },
  },
  {
    path: "/5mok",
    name: "5mok",
    component: () => import("@/views/5mokGame.vue"),
    meta: {
      showSkinButtons: false,
    },
  },
  {
    path: "/bingo",
    name: "bingo",
    component: () => import("@/views/bingoGame.vue"),
    meta: {
      showSkinButtons: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
