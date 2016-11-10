<template>
    <footer class="tabbar">
        <router-link to="/search" class="tabbar-item iconfont flex-one" active-class="active">&#xe605;</router-link>
        <router-link to="/login" class="tabbar-item iconfont flex-one" active-class="active">&#xe604;</router-link>
    </footer>
</template>

<script>
export default {
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
  }
}

</style>
