<template>
  <div class="login flex-one">
    <div class="container">
      <i class="iconfont logo">&#xe604;</i>
      <form class="form-login">
        <input v-model="account" class="form-control" type="text" name="account" placeholder="账号">
        <input v-model="password" class="form-control" type="password" name="password" placeholder="密码">
        <button class="btn btn-success" type="button" name="login-button" @click.prevent="login">登 录</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  beforeMount () {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '图书馆'
    })
  },
  methods: {
    login() {
      Vue.axios.post('/login', {
        username: this.account,
        password: this.password
      })
      .then(res => {
        let result = res.data
        if (result.loginSuccessfully) {
          this.$router.push('/user')
          this.$store.dispatch('LOGIN_LOGOUT', {
            isLogin: true
          })
        } else {
          alert(result.loginMsg)
        }
      })
    }
  }
}
</script>
