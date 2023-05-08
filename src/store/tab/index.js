const state = {
  coinTab: {},
  popupActive2FA: false,
};

const mutations = {
  SET_COIN_TAB(state, payload) {
    state.coinTab = payload;
  },
  SET_POPUP_ACTIVE_2FA(state, payload) {
    state.popupActive2FA = payload;
  },
};

const actions = {
  setCoinTab({ commit, payload }) {
    commit("SET_COIN_TAB", payload);
  },
  setPopupActive2FA({ comit, payload }) {
    commit("SET_POPUP_ACTIVE_2FA", payload);
  },
};

const getters = {
  getCoinTab: (state) => state.coinTab,
  getPopupActive2FA: (state) => state.popupActive2FA,

};

const tabModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
export const name = "tab";

export default tabModule;
