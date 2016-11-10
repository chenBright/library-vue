<template>
<section class="search">
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
      <!-- <button class="btn btn-success" type="button" name="search-button">搜 索</button> -->
      <router-link to="/books" tag="button" class="btn btn-success" type="button" name="search-button">搜 索</router-link>
    </form>
  </div>
</section>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: 'Search'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.search {
    flex: 1;
}

.container {
    margin-top: 7rem;
    padding: 0 4rem;

    .logo {
        font-size: 7rem;
        color: #42b983;
    }
}

form {
     > button,
     > select,
    > input {
        margin-top: 1rem;
    }
    #campus {
        height: auto;
    }
}
</style>
