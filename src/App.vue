<template>
  <div id="app" v-bind:style="{ height: page === '图书馆' ? pageHeight + 'px' : 'auto' }">
    <Banner></Banner>
    <router-view></router-view>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
import Banner from './components/Banner'
import loading from './components/loading'

export default {
  data() {
    return {
      pageHeight: document.documentElement.clientHeight
    }
  },
  computed: {
    page: {
      get() {
        return this.$store.state.pageTitle
      }
    },
    isLoading: {
      get() {
        return this.$store.state.isLoading
      }
    }
  },
  components: {
    Banner,
    loading
  }
}
</script>

<style lang="scss">
  @import "./normalize";
  html {
    font: 10px 'Lucida Grande', Verdana, Arial, Sans-Serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    font-weight: bloder;
    line-height: 1.35;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  #app,
  body,
  html {
    width: 100%;
  }

  #app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app,
  .home-page {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .book-list,
  .book-info,
  .borrow-list {
    /*overflow: scroll;
    -webkit-overflow-scrolling: touch;*/
    padding-top: 50px;
    padding-bottom: 5px;
  }
  /* 表单 */

  .form-control {
    // display: block;
    width: 100%;
    height: 42px;
    padding: 7px 12px;
    font-size: 16px;
    line-height: 1.428571429;
    color: #545454;
    vertical-align: middle;
    background-color: #ffffff;
    background-image: none;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    border-radius: 4px;
    outline: medium;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    &:focus {
      border-color: #66afe9;
      outline: 0;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }
  }
  /* 按钮 */

  .btn {
    display: inline-block;
    padding: 10px 12px;
    margin-bottom: 0;
    width: 100%;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.428571429;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    user-select: none;
  }

  .btn-success {
    background-color: #42b983;
    &:active,
    &:focus {
      background: #51c993;
    }
  }

  .flex-one {
    flex: 1;
  }
</style>
