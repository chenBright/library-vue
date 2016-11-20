<template>
<section class="search flex-one">
  <div class="container">
    <i class="iconfont logo">&#xe603;</i>
    <form class="form-search">
      <input class="form-control" type="text" name="keyword" placeholder="关键词">
      <select class="form-control" id="campus" name="campus">
          <option value="ALL">全部校区</option>
          <option value="578">东风路校区</option>
          <option value="579">龙洞校区</option>
          <option value="580">大学城校区</option>
          <option value="586">番禺校区</option>
      </select>
      <router-link to="/books" tag="button" class="btn btn-success" type="button" name="search-button">搜 索</router-link>
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
  },
  beforeDestroy() {
    this.$store.dispatch('LOADING', {
      isLoading: true
    })
    this.$store.dispatch('FETCH_BOOKLIST')
  },
  actived() {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '图书馆'
    })
  }
}
</script>
