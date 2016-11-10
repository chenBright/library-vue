<template>
<div class="home-page flex-one">
  <router-view></router-view>
  <tab_bar></tab_bar>
</div>
</template>

<script>
import TabBar from '../components/TabBar'
export default {
  components: {
    'tab_bar': TabBar
  }
}
</script>

<style lang="scss"></style>
