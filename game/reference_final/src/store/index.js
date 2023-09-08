import Vue from "vue";
import Vuex from "vuex";
import gameStast from "@/store/models/gameStart";
import omok from "@/store/models/omok";
import bingo from "@/store/models/bingo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    gameStast,
    omok,
    bingo,
  },
});
