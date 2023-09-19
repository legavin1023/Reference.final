import api from "../apiUtil";

export default {
  state: {
    userName: "",
    gameType: "",
    gameCode: null,
  },
  getters: {
    getUserName: (state) => state.userName,
    getGameType: (state) => state.gameType,
    getGameCode: (state) => state.gameCode,
  },
  mutations: {
    setUserName(state, data) {
      state.userName = data;
    },
    setGameType(state, data) {
      state.gameType = data;
    },
    setGameCode(state, data) {
      state.gameCode = data;
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
          context.commit("setUserName", userName);
          context.commit("setGameType", gameType);
          context.commit("setGameCode", response.data.data);
        })
        .catch((error) => {
          console.log(error);
          console.log(payload);
        });
    },
  },
};
