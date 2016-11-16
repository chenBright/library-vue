<template>

  <div class="home-page flex-one">
    <keep-alive>
      <search v-if="isSearchTab"></search>
      <login v-else></login>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import search from '../components/Search'
import login from '../components/Login'
import TabBar from '../components/TabBar'
export default {
  data() {
    return {
    }
  },
  computed: {
    isSearchTab: {
      get() {
        return this.$store.state.isSearchTab
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
</style>