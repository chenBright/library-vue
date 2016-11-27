<template>
  <div class="borrow-list">
    <ul>
      <item v-for="book in books" :key="book.orderNumber" :book="book"></item>
    </ul>
  </div>
</template>

<script>
import item from './BorrowItem'

export default {
  beforeMount () {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '在借图书（' + this.books.length + '本）'
    })
    this.$store.dispatch('FETCH_BORROWED_BOOKS')
  },
  computed: {
    books: {
      get() {
        let books = this.$store.state.borrowedBooks
        this.$store.dispatch('CHANGE_PAGE', {
          msg: '在借图书（' + books.length + '本）'
        })
        return books
      }
    }
  },
  components: {
    item
  }
}
</script>
