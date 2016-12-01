<template>
  <footer class="tabbar">
    <a class="tabbar-item iconfont flex-one" :class="{ active: isSearchTab }" @click="toggleTab('search')">&#xe605;</a>
    <a class="tabbar-item iconfont flex-one" :class="{ active: !isSearchTab }" @click="toggleTab('login')">&#xe604;</a>
  </footer>
</template>

<script>
import Vue from 'vue'

export default {
  computed: {
    isSearchTab: {
      get() {
        return this.$store.state.globalStore.isSearchTab
      }
    }
  },
  methods: {
    toggleTab(tabType) {
      let isSearchTab = this.isSearchTab
      if (tabType === 'search' && isSearchTab === false) {
        this.$store.dispatch('TOGGLE_TAB', {
          isSearchTab: true
        })
      } else if (tabType === 'login' && isSearchTab === true) {
        if (this.$store.state.globalStore.isLogin === true) {
          this.$router.push('/user')
        } else {
          this.$store.dispatch('TOGGLE_TAB', {
            isSearchTab: false
          })
        }
      }
    }
  }
}
</script>
<style lang="scss">
  .tabbar {
    display: flex;
    height: 50px;
    border-top: 1px solid #cccccc;
    .tabbar-item {
      line-height: 49px;
      font-size: 32px;
      color: #767779;
      &.active {
        color: #42b983;
      }
      &:active {
        background: #cccccc;
      }
    }
  }
</style>
