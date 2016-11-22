import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageTitle: null,
    isSearchTab: true,
    isLogin: false,
    searchList: {
      all: {},
      dx: {},
      ld: {},
      py: {}
    },
    book: null,
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
    FETCH_SEARCHLIST({ commit, dispatch }) {
      Vue.axios.get('/search').then((res) => {
        console.log(res.data)
        commit('SET_SEARCHLIST', {
          list: res.data
        })
        dispatch('LOADING', {
          isLoading: false
        })
      })
    },
    FETCH_BOOK({ commit, dispatch }) {
      Vue.axios.get('/book/:id').then((res) => {
        console.log(res.data)
        commit('SET_BOOK', {
          info: res.data
        })
        dispatch('LOADING', {
          isLoading: false
        })
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
    SET_SEARCHLIST(state, { list }) {
      state.searchList = list
    },
    SET_BOOK(state, { info }) {
      state.book = info
    },
    SET_LOGIN_STATUS(state, { isLogin }) {
      state.isLogin = isLogin
    }
  },
  getters: {

  }
})

export default store
