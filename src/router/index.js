import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../view/Home'
import bookList from '../components/BookList'
import book from '../components/Book'
import borrowList from '../components/BorrowList'

const routes = [{
  path: '/',
  component: home
},
{
  path: ':campus/books',
  component: bookList
},
{
  path: '/books',
  component: book
},
{
  path: '/user',
  component: borrowList
}]

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { y: 0 }
  },
  routes
})
