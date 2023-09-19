import api from "../apiUtil";

export default {
  state: {
    words: [],
    validation: "",
    secundUserName: "",
  },
  getters: {
    getWords: (state) => state.words,
    getValidation: (state) => state.validation,
    getsecundUserName: (state) => state.secundUserName,
  },
  mutations: {
    setValidation(state) {
      // 무작위로 "fruit" 또는 "num" 중 하나를 할당합니다.
      state.validation = Math.random() < 0.5 ? "fruit" : "num";
    },
    setWords(state, data) {
      state.words = data;
    },
    setsecundUserName(state, data) {
      state.secundUserName = data;
    },
  },
  actions: {
    async secondId(context, payload) {
      // RestApi 호출
      const { uuid, userName } = payload;
      await api
        .post(`${process.env.VUE_APP_BASE_URL}/v1/api/game/${uuid}`, {
          userName,
        })
        .then(() => {
          context.commit("setsecundUserName", userName);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async startBingoGame(context, payload) {
      // RestApi 호출
      const { uuid } = payload;
      await api
        .get(`${process.env.VUE_APP_BASE_URL}/v1/api/game/`, {
          params: { uuid }, // 여기를 수정합니다.
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchWords(context, payload) {
      // RestApi 호출
      const { validation } = payload;
      await api
        .get(`${process.env.VUE_APP_BASE_URL}/v1/api/game/bingo/${validation}`)
        .then((response) => {
          context.commit("setWords", response.data); // API 응답으로 'words' 상태 업데이트
          console.log(response.data, validation);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
