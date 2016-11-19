<template>
<div class="login flex-one">
  <div class="container">
    <i class="iconfont logo">&#xe604;</i>
    <form class="form-login">
      <input class="form-control" type="text" name="account" placeholder="账号">
      <input class="form-control" type="password" name="password" placeholder="密码">
      <button class="btn btn-success" type="button" name="login-button" @click="login">登 录</button>
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
  actived() {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '图书馆'
    })
  },
  methods: {
    login() {
      this.$router.push('/user')
      this.$store.dispatch('LOGIN_LOGOUT', {
        isLogin: true
      })
    }
  }
}
</script>
