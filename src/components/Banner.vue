<template>
  <header class="header">
    <a class="back-btn" v-if="isShowBackBtn" @click="backTo('search')">
      <span><span class="iconfont">&#xe602;</span></span>
    </a>
    <h1 class="app-name">{{ page }}</h1>
    <a v-if="isUserPage" @click="logout" class="logout">注销</a>
  </header>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    page: {
      get() {
        return this.$store.state.pageTitle
      }
    },
    isShowBackBtn() {
      return !(/图书馆/.test(this.page))
    },
    isUserPage() {
      return /在借图书/.test(this.page)
    }
  },
  methods: {
    backTo(tab) {
      let isSearchTab = this.$store.state.isSearchTab
      if ((tab === 'search' && isSearchTab === false
       || tab === 'login' && isSearchTab === true)) {
        this.$store.dispatch('TOGGLE_TAB', {
          isSearchTab: !isSearchTab
        })
      }
      this.$router.back()
    },
    logout() {
      this.backTo('login')
      this.$store.dispatch('LOGIN_LOGOUT', {
        isLogin: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  %active {
    background-color: #35A772;
  }

  .header {
    overflow: auto;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 50px;
    text-align: left;
    color: #ffffff;
    background-color: #42b983;
  }

  .back-btn {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 50px;
    color: inherit;
    &:active {
      @extend %active;
    }
    > span {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 31px;
      height: 31px;
      border-right: 1px solid #35A772;
    }
    .iconfont {
      font-size: 25px;
    }
  }

  .app-name {
    display: inline-block;
    margin: 0;
    line-height: 50px;
    padding-left: 45px;
    font-size: 20px;
  }

  .logout {
    position: absolute;
    right: 0;
    width: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    &:active {
      @extend %active;
    }
  }
</style>
