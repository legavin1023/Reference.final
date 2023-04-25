import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "splash",
    component: () => import("@/views/splashPage.vue"),
    meta: {
      showSkinButtons: true,
      showNav: false,
    },
  },
  {
    path: "/reference.final",
    name: "reference.final",
    component: () => import("@/views/mainPage.vue"),
    meta: {
      showSkinButtons: true,
      showNav: true,
    },
  },
  {
    path: "/5mokLoding",
    name: "5mokLoding",
    component: () => import("@/views/5mok/5mokGameLoding.vue"),
    meta: {
      showSkinButtons: false,
      showNav: true,
    },
  },
  {
    path: "/5mokJoin",
    name: "5mokJoin",
    component: () => import("@/views/5mok/5mokGameJoin.vue"),
    meta: {
      showSkinButtons: false,
      showNav: true,
    },
  },
  {
    path: "/5mokEnd",
    name: "5mokEnd",
    component: () => import("@/views/5mok/5mokGameEnd.vue"),
    meta: {
      showSkinButtons: false,
      showNav: true,
    },
  },
  {
    path: "/bingoLoding",
    name: "bingoLoding",
    component: () => import("@/views/bingo/bingoGameLoding.vue"),
    meta: {
      showSkinButtons: false,
      showNav: true,
    },
  },
  {
    path: "/bingoJoin",
    name: "bingoJoin",
    component: () => import("@/views/bingo/bingoGameJoin.vue"),
    meta: {
      showSkinButtons: false,
      showNav: true,
    },
  },
  {
    path: "/bingoEnd",
    name: "bingoEnd",
    component: () => import("@/views/bingo/bingoGameEnd.vue"),
    meta: {
      showSkinButtons: false,
      showNav: true,
    },
  },
  {
    path: "/*",
    name: "404",
    component: () => import("@/views/404Page.vue"),
    meta: {
      showSkinButtons: false,
      showNav: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
