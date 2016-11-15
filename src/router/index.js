import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../view/Home'
import search from '../components/Search'
import login from '../components/Login'
import bookList from '../components/BookList'
import book from '../components/Book'
import borrowList from '../components/BorrowList'

const routes = [{
  path: '/',
  component: home,
  redirect: '/search',
  children: [{
    path: 'search',
    component: search
  },
  {
    path: 'login',
    component: login
  }]
},
{
  path: '/books',
  component: bookList
},
{
  path: '/books/:id',
  component: book
},
{
  path: '/user',
  component: borrowList
}]

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return { y: 100 }
  },
  routes
})
