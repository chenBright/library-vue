<template>
  <div class="book-list">
    <div class="list-nav">
      <a @click="prePage" v-if="page > 1">&lt; 上一页</a>
      <a v-else class="disable">&lt; 上一页</a>
      <select v-model.number="page" name="pageCount" id="pageCount">
        <option v-for="n in pageCount" :value="n">{{ n }}</option>
      </select>
      <a @click="nextPage" v-if="page < pageCount">下一页 &gt;</a>
      <a v-else class="disable">下一页 &gt;</a>
    </div>
    <transition :name="transitionName">
      <ul>
        <router-link :to="'/books/' + book.bookID" v-for="book in books" :key="book.bookID">
          <item :book="book"></item>
        </router-link>
      </ul>
    </transition>
  </div>
</template>

<script>
import item from './BookItem'

export default {
  beforeMount () {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '搜索结果'
    })
    this.loadList(this.page)
  },
  beforeDestroy() {
    this.clearItems()
  },
  data() {
    return {
      campus: this.$route.params.campus,
      keywords: this.$route.params.keywords,
      transitionName: 'slide-left'
    }
  },
  computed: {
    books: {
      get() {
        return this.$store.state.searchStore.activedItems
      }
    },
    page: {
      get() {
        return +this.$route.params.pageNumber
      },
      set(n) {
        this.loadList(n)
        this.$router.replace(
          '/books/' + this.campus + '/' + this.keywords + '/' + n
        )
      }
    },
    pageCount: {
      get() {
        return this.$store.state.searchStore.pageCount
      }
    }
  },
  watch: {
    '$route'(to, from) {
      const toPage = to.path.split('/')[4]
      const fromPage = from.path.split('/')[4]
      console.log(toPage, fromPage)
      this.transitionName = toPage < fromPage ? 'slide-right' : 'slide-left'
    }
  },
  methods: {
    loadList(page) {
      this.clearItems()
      this.$store.dispatch('FETCH_SEARCHLIST', {
        campus: this.campus,
        keywords: this.keywords,
        page: page
      })
    },
    clearItems() {
      this.$store.dispatch('CLEAR_AVTIVE_ITEMS')
    },
    prePage() {
      this.$router.replace(
        '/books/' + this.campus + '/' + this.keywords + '/' + (this.page - 1)
      )
      this.loadList(this.page)
    },
    nextPage() {
      this.$router.replace(
        '/books/' + this.campus + '/' + this.keywords + '/' + (this.page + 1)
      )
      this.loadList(this.page)
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

  .book-list > ul {
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    transform: translate(30px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    transform: translate(-30px, 0);
  }
</style>
