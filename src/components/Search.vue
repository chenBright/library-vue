<template>
<section class="search flex-one">
  <div class="container">
    <i class="iconfont logo">&#xe603;</i>
    <form class="form-search">
      <input v-model="keywords" class="form-control" type="text" name="keyword" placeholder="关键词">
      <select v-model="campus" class="form-control" id="campus" name="campus">
          <option value="all">全部校区</option>
          <option value="df">东风路校区</option>
          <option value="ld">龙洞校区</option>
          <option value="dx">大学城校区</option>
          <option value="py">番禺校区</option>
      </select>
      <button @click.prevent="search" class="btn btn-success" name="search-button">搜 索</button>
    </form>
  </div>
</section>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '图书馆'
    })
    this.$store.dispatch('CHANGE_PAGE_NUMBER', {
      page: 1
    })
  },
  data() {
    return {
      keywords: '',
      campus: 'all'
    }
  },
  methods: {
    search() {
      console.log(campus)
      this.$router.push('/books/' + this.campus + '/' + this.keywords + '/' + 1)
    }
  }
}
</script>
