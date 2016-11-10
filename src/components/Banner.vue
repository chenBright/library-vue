<template>
  <div class="header">
    <h1 class="app-name">{{title}} {{page}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue'
    }
  },
  computed: {
    page: {
      get() {
        return this.$store.state.pageTitle
      }
    }
  }
}
</script>

<style lang="scss">
.header {
    overflow: auto;
    height: 50px;
    background-color: #42b983;
}

.app-name {
    padding-left: 25px;
    font-size: 2rem;
    color: #ffffff;
    text-align: left;
}
</style>
