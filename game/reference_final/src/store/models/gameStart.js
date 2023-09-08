import api from "../apiUtil";

export default {
  state: {
    userName: "",
    gameType: "",
  },
  getters: {
    getUserName: (state) => state.userName,
    getGameType: (state) => state.gameType,
  },
  mutations: {
    setUserName(state, data) {
      state.userName = data;
    },
    setGameType(state, data) {
      state.gameType = data;
    },
  },
  actions: {
    async newGame(context, payload) {
      const { userName, gameType } = payload;

      await api
        .post(`${process.env.VUE_APP_BASE_URL}/v1/api/game/new`, {
          userName,
          gameType,
        })
        .then((response) => {
          console.log(response);
          context.commit("setUserName", response.data.userName);
          context.commit("setGameType", response.data.gameType);
        })
        .catch((error) => {
          console.log(error);
          console.log(payload);
        });
    },
  },
};
