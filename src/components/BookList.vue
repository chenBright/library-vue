<template>
  <div class="book-list">
    <div class="list-nav">
      <a v-if="page > 1">&lt; 上一页</a>
      <a v-else class="disable">&lt; 上一页</a>
      <select name="pageCount" id="pageCount">
      <option v-for="n in books[0].pagecount" :value="n">{{ n }}</option>
    </select>
      <a @click="nextPage" v-if="page < books[0].pagecount">下一页 &gt;</a>
      <a v-else class="disable">下一页 &gt;</a>
    </div>
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
    this.$store.dispatch('LOADING', {
      isLoading: true
    })
    this.loadList(this.page)
  },
  data() {
    return {
      campus: this.$route.params.campus,
      keywords: this.$route.params.keywords
    }
  },
  computed: {
    books: {
      get() {
        return this.$store.state.activedItems
      }
    },
    page: {
      get() {
        return this.$store.state.page
      }
    }
  },
  methods: {
    loadList(page) {
      this.$store.dispatch('FETCH_SEARCHLIST', {
        campus: this.campus,
        keywords: this.keywords,
        page: page
      })
    },
    nextPage() {
      this.loadList(this.page + 1)
    }
  },
  components: {
    item
  }
}
</script>

<style lang="scss">
  .list-nav {
    position: fixed;
    top: 50px;
    z-index: 10;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    color: #000000;
    text-align: center;
    font-size: 13px;
    background-color: #ffffff;
    border: 1px solid #cccccc;

    .disable {
      color: #C9C9CE;
    }
  }

  #pageCount {
    margin-left: 15px;
    margin-right: 15px;
    font-size: 15px;
  }
</style>
