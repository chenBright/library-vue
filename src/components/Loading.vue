<template>
  <div class="load">
    <div class="loader">loading</div>
  </div>
</template>

<style lang="scss" scoped>
  .load {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 12;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
  }

  .load .loader,
  .load .loader:before,
  .load .loader:after {
    width: 1em;
    height: 4em;
    background: #ffffff;
    animation: load 1s infinite ease-in-out;
  }

  .load .loader:before,
  .load .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }

  .load .loader:before {
    left: -1.5em;
    animation-delay: -0.5s;
  }

  .load .loader {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    font-size: 11px;
    text-indent: -9999em;
    animation-delay: -0.25s;
  }

  .load .loader:after {
    left: 1.5em;
  }

  @keyframes load {
    0%,
    80%,
    100% {
      box-shadow: 0 0 #FFF;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em #ffffff;
      height: 5em;
    }
  }
</style>
