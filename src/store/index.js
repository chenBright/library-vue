import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageTitle: null
  },
  actions: {
    CHANGE_PAGE({commit}, {msg}) {
      document.title = msg
      commit('SET_TITLE', {title: msg})
    }
  },
  mutations: {
    SET_TITLE(state, {title}) {
      state.pageTitle = title
    }
  }
})

export default store
