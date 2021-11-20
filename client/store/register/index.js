import { signUpUserApi } from '~/services/register';
import { signUpData, signInData } from '../../models/register';
import { deleteKeyFromObj } from '../../utils/general';
export default {
  namespaced: true,

  state: () => ({
    createUserData: new signUpData(),
    loginUser: new signInData(),
  }),

  mutations: {
    UPDATE_CREATE_USER(state, { k, v }) {
      state.createUserData[k] = v;
    },
    UPDATE_LOGIN_USER(state, { k, v }) {
      state.loginUser[k] = v;
    },
  },

  actions: {
    updateCreateUserArr({ commit }, { k, v }) {
      commit('UPDATE_CREATE_USER', { k, v });
    },

    updateLoginUser({ commit }, { k, v }) {
      commit('UPDATE_LOGIN_USER', { k, v });
    },

    async createNewUser({ state }) {
      const user = state.createUserData;
      deleteKeyFromObj(user, 'confirmPassword');
      async function apiCall(api) {
        const { isSuccess, resultData } = await signUpUserApi(api, user);
        if (isSuccess) console.log(resultData);
      }
      return await this.$apiCaller(apiCall)();
    },
    
    signIn() {
      console.log('sign in');
    },
  },
  getters: {
    newUser: (state) => state.createUserData,
    loginUser: (state) => state.loginUser,
  },
};
