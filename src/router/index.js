import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../view/Home'
import search from '../components/Search'
import login from '../components/Login'
import book_list from '../components/BookList'
import book from '../components/Book'

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
      }
    ]
  },
  {
    path: '/books',
    component: book_list
  },
  {
    path: '/books/:id',
    component: book
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
