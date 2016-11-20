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
  beforeDestroy() {
    this.$store.dispatch('LOADING', {
      isLoading: true
    })
    this.$store.dispatch('FETCH_BOOK')
  },
  computed: {
    books: {
      get() {
        return this.$store.state.bookList
      }
    }
  },
  components: {
    item
  }
}
</script>
