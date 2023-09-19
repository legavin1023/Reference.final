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
    path: "/omokRoom",
    name: "5mok",
    component: () => import("@/views/5mokRoom.vue"),
    meta: {
      showSkinButtons: false,
      showNav: true,
    },
  },
  {
    path: "/bingoRoom",
    name: "bingo",
    component: () => import("@/views/bingoRoom.vue"),
    meta: {
      showSkinButtons: false,
      showNav: true,
    },
  },
  {
    path: "/bingoJoin",
    name: "bingoJoin",
    component: () => import("@/components/bingo/bingoJoin.vue"), // 게임을 위한 컴포넌트로 수정
    meta: {
      showSkinButtons: false,
      showNav: false,
    },
  },
  {
    path: "/bingoGame",
    name: "bingoGame",
    component: () => import("@/components/bingo/bimgoGame.vue"),
    meta: {
      showSkinButtons: false,
      showNav: false,
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
