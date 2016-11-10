<template>
<div class="login">
  <div class="container">
    <i class="iconfont logo">&#xe604;</i>
    <form class="form-login">
      <input class="form-control" type="text" name="account" placeholder="账号">
      <input class="form-control" type="password" name="password" placeholder="密码">
      <button class="btn btn-success" type="button" name="login-button">登 录</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  beforeMount () {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: 'Login'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login {
  flex: 1;
}

h1 {
  color: #42b983;
}
</style>
