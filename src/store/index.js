import Vue from 'vue'
import Vuex from 'vuex'
import { fetchSearchList, fetchBook, fetchBorrowedBooks } from './fetchData'

Vue.use(Vuex)

const globalStore = {
  state: {
    pageTitle: null,
    isSearchTab: true,
    isLoading: false,
    isLogin: false
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
}

const searchStore = {
  state: {
    campus: 'all',
    keywords: '',
    pageCount: 0,
    page: 1,
    searchList: {
      all: {},
      dx: {},
      ld: {},
      py: {}
    },
    activedItems: []
  },
  actions: {
    CHANGE_PAGE_NUMBER({ commit }, { page }) {
      commit('SET_PAGE_NUMBER', {
        page: page
      })
    },
    FETCH_SEARCHLIST({ commit, dispatch }, { campus, keywords, page }) {
      dispatch('LOADING', {
        isLoading: true
      })
      commit('SET_CAMPUS', {
        campus: campus
      })
      commit('SET_KEYWORDS', {
        keywords: keywords
      })
      dispatch('CHANGE_PAGE_NUMBER', {
        page: page
      })
      fetchSearchList(campus, keywords, page)
        .then(res => {
          if (res) {
            commit('SET_SEARCHLIST', {
              list: res.data,
              campus: campus,
              keywords: keywords,
              page: page
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
    ENSURE_AVTIVE_ITEMS({ commit, getters }) {
      commit('SET_ITEMS', {
        items: getters.activeItems
      })
    },
    CLEAR_AVTIVE_ITEMS({ commit }) {
      commit('SET_ITEMS', {
        items: []
      })
    }
  },
  mutations: {
    SET_CAMPUS(state, { campus }) {
      state.campus = campus
    },
    SET_KEYWORDS(state, { keywords }) {
      state.keywords = keywords
    },
    SET_PAGE_NUMBER(state, { page }) {
      state.page = page
    },
    SET_SEARCHLIST(state, { list, campus, keywords, page }) {
      let { searchList } = state,
        oldList = searchList[campus][keywords]
      if (oldList) {
        oldList[page] = list
      } else {
        let listObj = {
          1: list
        }
        state.pageCount = list[0]['pagecount']
        Vue.set(searchList[campus], keywords, listObj)
      }
    },
    SET_ITEMS(state, { items }) {
      state.activedItems = items
    }
  },
  getters: {
    activeItems(state) {
      const { campus, keywords, page, searchList } = state
      return searchList[campus][keywords][page]
    }
  }
}

const bookStore = {
  state: {
    books: {},
    activeBookId: '',
    activeBook: null
  },
  actions: {
    FETCH_BOOK({ commit, dispatch }, { id }) {
      dispatch('LOADING', {
        isLoading: true
      })
      commit('SET_ACTIVE_BOOKID', {
        id: id
      })
      fetchBook(id)
        .then(res => {
          if (res) {
            commit('SET_BOOK', {
              book: res.data,
              id: id
            })
          }
        })
        .then(() => {
          dispatch('ENSURE_ACTIVE_BOOK')
          dispatch('LOADING', {
            isLoading: false
          })
        })
    },
    ENSURE_ACTIVE_BOOK({ commit, getters }) {
      commit('SET_ACTIVE_BOOK', {
        activeBook: getters.activeBook
      })
    },
    CLEAR_AVTIVE_BOOK({ commit }) {
      commit('SET_ACTIVE_BOOK', {
        activeBook: null
      })
      commit('SET_ACTIVE_BOOKID', {
        id: ''
      })
    }
  },
  mutations: {
    SET_BOOK(state, { book, id }) {
      state.books[id] = book
    },
    SET_ACTIVE_BOOKID(state, { id }) {
      state.activeBookId = id
    },
    SET_ACTIVE_BOOK(state, { activeBook }) {
      Vue.set(state, 'activeBook', activeBook)
    }
  },
  getters: {
    activeBook(state) {
      const { books, activeBookId } = state
      return books[activeBookId]
    }
  }
}

const borrowStore = {
  state: {
    borrowedBooks: []
  },
  actions: {
    FETCH_BORROWED_BOOKS({ commit, dispatch }) {
      dispatch('LOADING', {
        isLoading: true
      })
      fetchBorrowedBooks()
        .then(res => {
          commit('SET_BORROWED_BOOKS', {
            books: res.data
          })
          dispatch('LOADING', {
            isLoading: false
          })
        })
    }
  },
  mutations: {
    SET_BORROWED_BOOKS(state, { books }) {
      Vue.set(state, 'borrowedBooks', books)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    globalStore,
    searchStore,
    bookStore,
    borrowStore
  }
})

export default store
