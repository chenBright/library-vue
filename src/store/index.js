import Vue from 'vue'
import Vuex from 'vuex'
import { fetchSearchList } from './fetchData'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageTitle: null,
    isSearchTab: true,
    isLogin: false,
    campus: 'all',
    page: 1,
    searchList: {
      all: {},
      dx: {},
      ld: {},
      py: {}
    },
    activedItems: [],
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
    FETCH_SEARCHLIST({ commit, dispatch }, { campus, keywords, page }) {
      commit('SET_CAMPUS', {
        campus: campus
      })
      commit('SET_KEYWORDS', {
        keywords: keywords
      })
      commit('SET_PAGE', {
        page: page
      })
      let fetch = fetchSearchList(campus, keywords, page)
      fetch.then((res) => {
        console.log(res)
        if (res) {
          commit('SET_SEARCHLIST', {
            list: res.data,
            campus: campus,
            keywords: keywords
          })
        }
      })
        .then(() => {
          dispatch('ENSURE_AVTIVE_ITEMS')
          dispatch('LOADING', {
            isLoading: false
          })
        })
    },
    ENSURE_AVTIVE_ITEMS({ commit, dispatch, getters }) {
      commit('SET_ITEMS', {
        items: getters.activedItems
      })
      // dispatch('FETCH_ITEMS', {
      //   items: getters.activedItems
      // })
    },
    FETCH_BOOK({ commit, dispatch }) {
      Vue.axios.get('/book').then((res) => {
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
    SET_CAMPUS(state, { campus }) {
      state.campus = campus
    },
    SET_KEYWORDS(state, { keywords }) {
      state.keywords = keywords
    },
    SET_PAGE(state, { page }) {
      state.page = page
    },
    SET_SEARCHLIST(state, { list, campus, keywords }) {
      Vue.set(state.searchList[campus], keywords, list)
    },
    SET_ITEMS(state, { items }) {
      state.activedItems = items
    },
    SET_BOOK(state, { info }) {
      state.book = info
    },
    SET_LOGIN_STATUS(state, { isLogin }) {
      state.isLogin = isLogin
    }
  },
  getters: {
    activedItems(state) {
      const { campus, keywords, page, searchList } = state,
        start = (page - 1) * 20,
        end = page * 20
      return searchList[campus][keywords].slice(start, end)
    }
  }
})

export default store
