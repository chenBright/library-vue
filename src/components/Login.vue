<template>
<div class="login flex-one">
  <div class="container">
    <i class="iconfont logo">&#xe604;</i>
    <form class="form-login">
      <input class="form-control" type="text" name="account" placeholder="账号">
      <input class="form-control" type="password" name="password" placeholder="密码">
      <router-link to="/user" tag="button" class="btn btn-success" type="button" name="search-button">登 录</router-link>
    </form>
  </div>
</div>
</template>

<script>
export default {
  beforeMount () {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '图书馆'
    })
  },
  beforeDestroy() {
    this.$store.dispatch('RECORD_LASTPAGE', {
      page: 'login'
    })
  }
}
</script>