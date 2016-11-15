<template>

  <div class="home-page flex-one">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '../components/TabBar'
export default {
  components: {
    'tab-bar': TabBar
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