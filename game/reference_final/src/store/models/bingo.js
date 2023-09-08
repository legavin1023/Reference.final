import api from "../apiUtil";

export default {
  state: {
    words: [],
    validation: "",
    uuid: "",
  },
  getters: {
    getWords: (state) => state.words,
    getValidation: (state) => state.validation,
  },
  mutations: {
    setValidation(state) {
      // 무작위로 "fruit" 또는 "num" 중 하나를 할당합니다.
      state.validation = Math.random() < 0.5 ? "fruit" : "num";
    },
    setWords(state, data) {
      state.words = data;
    },
  },
  actions: {
    async fetchWords(context, payload) {
      // RestApi 호출
      const { validation } = payload;
      await api
        .get(`${process.env.VUE_APP_BASE_URL}/v1/api/game/bingo`, {
          validation, // 'validation' 값을 기반으로 쿼리 파라미터 설정
        })
        .then((response) => {
          context.commit("setWords", response.data); // API 응답으로 'words' 상태 업데이트
          console.log(response.data, payload, context.state.validation);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async secondId(context, payload) {
      // RestApi 호출
      const { uuid } = payload;
      await api
        .get(`${process.env.VUE_APP_BASE_URL}/v1/api/game/`, {
          uuid, // 'validation' 값을 기반으로 쿼리 파라미터 설정
        })
        .then((response) => {
          context.commit("setWords", response.data); // API 응답으로 'words' 상태 업데이트
          console.log(response.data, payload, context.state.validation);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
