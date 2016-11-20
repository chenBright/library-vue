<template>
  <div class="book-list">
    <ul>
      <router-link :to="'/books/' + book.bookID" v-for="book in books" target="_blank">
        <item :key="book.bookID" :book="book"></item>
      </router-link>
    </ul>
  </div>
</template>

<script>
import item from './BookItem'

export default {
  beforeMount () {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '搜索结果'
    })
  },
  computed: {
    books: {
      get() {
        this.$store.dispatch('LOADING', {
          isLoading: false
        })
        return this.$store.state.bookList
      }
    }
  },
  components: {
    item
  }
}
</script>
