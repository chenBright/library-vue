import Vue from 'vue'

let cache = {
    searchIds: [],
    bookIds: []
  },
  campusMap = {
    all: 'ALL',
    df: 578,
    ld: 579,
    dx: 580,
    py: 586
  }

export function fetchSearchList(campus, keywords, page) {
  let id = '/search/' + campus + '/' + keywords + '/' + page,
    cacheIds = cache.searchIds
  if (cacheIds.indexOf(id) === -1) {
    cacheIds.push(id)
    return Vue.axios.get(id)
  }
  return Promise.resolve()
}

export function fetchBook(id) {
  let cacheIds = cache.bookIds
  if (cacheIds.indexOf(id) === -1) {
    cacheIds.push(id)
    return Vue.axios.get('/book/' + id)
  }
  return Promise.resolve()
}

export function fetchBorrowedBooks() {
  return Vue.axios.get('getBorrowedBooks')
}
