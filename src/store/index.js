import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageTitle: null,
    backPage: '/'
  },
  actions: {
    CHANGE_PAGE({ commit }, { msg }) {
      document.title = msg
      commit('SET_TITLE', {
        title: msg
      })
    },
    RECORD_LASTPAGE({ commit }, { page }) {
      commit('BACK_TO', {
        backPage: page
      })
    }
  },
  mutations: {
    SET_TITLE(state, { title }) {
      state.pageTitle = title
    },
    BACK_TO(state, { backPage }) {
      state.backPage = backPage
    }
  }
})

export default store
