<template>
  <div  v-if="book" class="book-info">
    <section>
      <h2>{{ book.title }}</h2>
      <div>
        <span>作者：</span><span class="flex-one">{{book.author}}</span>
      </div>
      <div>
        <span>出版社：</span><span class="flex-one">{{book.publisher}}</span>
      </div>
      <div>
        <span>出版时间：</span><span class="flex-one">{{book.date}}</span>
      </div>
      <div>
        <span>索引号：</span><span class="flex-one">{{book.index}}</span>
      </div>
      <div>
        <span>楼层：</span>
        <div class="flex-one">
          <p v-for="place in book.place">{{ place }}</p>
        </div>
      </div>
    </section>
    <table>
      <thead>
        <tr>
          <th>
            馆藏地
          </th>
          <th>
            状态
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="status in book.collectionStatus">
          <td>
            {{ status.area }}
          </td>
          <td>
            {{ status.status }}
          </td>
        </tr>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '图书详情'
    })
    this.$store.dispatch('FETCH_BOOK')
  },
  beforeDestroy() {
    this.$store.dispatch('CLEAR_AVTIVE_BOOK', {
      id: this.$route.params.id
    })
    },
  computed: {
    book: {
      get() {
        return this.$store.state.bookStore.activeBook
      }
    }
  }
}
</script>

<style lang="scss">
  .book-info {
    padding-left: 1rem;
    padding-right: 1rem;
    section {
      margin-top: 20px;
      border: 1px solid #cccccc;
      border-radius: 10px;
      h2 {
        margin: 0;
        padding: 1rem 16px;
        font-size: 18px;
        text-align: left;
        color: #ffffff;
        background-color: #42b983;
        border: 0;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
      > div {
        display: flex;
        margin: 0;
        padding: 16px;
        font-size: 16px;
        text-align: left;
        border-bottom: 1px solid #cccccc;
        color: #69696B;
        &:last-child {
          border-bottom: none;
          p {
            margin-top: 0;
            margin-bottom: 10px;
            color: #42b983;
            font-weight: bolder;
          }
        }
        span {
          display: block;
        }
      }
    }
    table {
      margin-top: 2rem;
      width: 100%;
      font-size: 16px;
      border: 1px solid #cccccc;
      border-radius: 10px;
      border-collapse: collapse;
      th,
      td {
        padding: 1rem;
        border: 1px solid #cccccc;
      }
    }
  }
</style>
