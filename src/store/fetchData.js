import Vue from 'vue'

let cache = {
    searchIds: [],
    bookIds: []
  }

export function fetchSearchList(campus, keywords, page) {
  let id = '/' + campus + '/' + keywords + '/' + page,
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
    return Vue.axios.get('/' + id)
  }
  return Promise.resolve()
}
