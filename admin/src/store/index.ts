import { createStore } from "vuex";

export default createStore({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async setUser(state, payload) {
      state.commit("setUser", payload);
    },
  },
  modules: {},
  getters: {
    getUser: (state) => state.user,
  },
});
