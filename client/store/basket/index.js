export default {
  namespaced: true,
  state: () => ({
    basket: '',
  }),
  mutations: {
    SET_BASKET_DATA(state, v) {
      state.basket = v;
    },
  },
  actions: {
    setBasketData({ commit }, v) {
      commit('SET_BASKET_DATA', v);
    },
  },
  getters: {
    basket: (state) => state.basket,
    basketLength: (state) => state.basket,
  },
};
