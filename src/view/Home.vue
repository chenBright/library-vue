<template>
  <div class="home-page flex-one">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <search v-if="isSearchTab"></search>
        <login v-else></login>
      </keep-alive>
    </transition>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import search from '../components/Search'
import login from '../components/Login'
import TabBar from '../components/TabBar'

export default {
  computed: {
    isSearchTab: {
      get() {
        return this.$store.state.globalStore.isSearchTab
      }
    }
  },
  components: {
    'tab-bar': TabBar,
    search,
    login
  }
}
</script>

<style lang="scss">
  .container {
    margin-top: 10rem;
    padding: 0 4rem;
    .logo {
      font-size: 70px;
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
