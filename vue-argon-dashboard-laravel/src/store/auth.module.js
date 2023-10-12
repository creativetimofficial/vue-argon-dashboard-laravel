/* eslint-disable no-unused-vars */
import AuthService from "../services/auth.service.js";
const user = localStorage.getItem('access_token');
const isAuthenticated = user ? true : false;
export const auth = {
  namespaced: true,
  state: { isAuthenticated : isAuthenticated},
  getters: {
    isAuthenticated: state => state.isAuthenticated,
  },
  actions: {
    async login({ commit }, user) {
      await AuthService.login(user);
      commit('isAuthenticated', true);
    },
    async logout({ commit }) {
      try {
        await AuthService.logout();
      } finally {
        commit('isAuthenticated', false);
      }
    },
    async register({ commit }, user) {
      await AuthService.register(user);
      commit('isAuthenticated', true);
    },
    async forgotPassword({ commit }, data) {
      await AuthService.forgotPassword(data);
    },
    async resetPassword({ commit }, data) {
      await AuthService.resetPassword(data);
    }
  },
  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  }
};