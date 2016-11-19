import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageTitle: null,
    isSearchTab: true,
    isLogin: false,
    isLoading: false
  },
  actions: {
    CHANGE_PAGE({ commit }, { msg }) {
      document.title = msg
      commit('SET_TITLE', {
        title: msg
      })
    },
    TOGGLE_TAB({ commit }, { isSearchTab }) {
      commit('CHANGE_TAB_STATUS', {
        isSearchTab: isSearchTab
      })
    },
    LOADING({ commit }, { isLoading }) {
      commit('CHANGE_LOADING_STATUS', {
        isLoading: isLoading
      })
    },
    LOGIN_LOGOUT({ commit }, { isLogin }) {
      commit('SET_LOGIN_STATUS', {
        isLogin: isLogin
      })
    }
  },
  mutations: {
    SET_TITLE(state, { title }) {
      state.pageTitle = title
    },
    CHANGE_TAB_STATUS(state, { isSearchTab }) {
      state.isSearchTab = isSearchTab
    },
    CHANGE_LOADING_STATUS(state, { isLoading }) {
      state.isLoading = isLoading
    },
    SET_LOGIN_STATUS(state, { isLogin }) {
      state.isLogin = isLogin
    }
  }
})

export default store
