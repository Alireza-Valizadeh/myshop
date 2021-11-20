export default {
  namespaced: true,
  state: () => ({
    isLoading: false,
    showOverlay: false,
    showResponsiveMenu: false,
    modal: false,
    isBlured: false,
  }),
  mutations: {
    SET_IS_LOADING_STATE(state, bool) {
      state.isLoading = bool;
    },
    SET_OVERLAY_STATE(state, bool) {
      state.showOverlay = bool;
    },
    SET_RESPONSIVE_MENU_STATE(state, bool) {
      state.showResponsiveMenu = bool;
    },
    SET_MODAL_STATE(state, bool) {
      state.modal = bool;
    },
  },
  actions: {
    setLoadingState({ commit }, bool) {
      commit('SET_IS_LOADING_STATE', bool);
    },
    setOverlayState({ commit }, bool) {
      commit('SET_OVERLAY_STATE', bool);
    },
    setResponsiveMenuState({ commit }, bool) {
      commit('SET_RESPONSIVE_MENU_STATE', bool);
    },
    setModalState({ commit }, bool) {
      commit('SET_MODAL_STATE', bool);
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
    showOverlay: (state) => state.showOverlay,
    showResponsiveMenu: (state) => state.showResponsiveMenu,
  },
};
