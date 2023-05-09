import service from "../services/profile.service.js";

export const profile = {
    namespaced: true,
    state: {
        me: null,
    },
    getters: {
        me: state => state.me,
    },
    actions: {
        async me({ commit }) {
            const data = await service.getMe();
            commit('GET_ME_PROFILE', data);
        },
        async update({ commit }, updateUser) {
            const data = await service.updateProfile(updateUser);
            commit('GET_ME_PROFILE', data);
        },
    },
    mutations: {
        GET_ME_PROFILE(state, me) {
            state.me = me
        }
    }
}