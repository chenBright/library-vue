<template>
<div class="load">
  <div class="loader">loading</div>
</div>
</template>

<style lang="scss">
  .load .loader,
  .load .loader:before,
  .load .loader:after {
    border-radius: 50%;
  }
  
  .load .loader:before,
  .load .loader:after {
    position: absolute;
    content: '';
  }
  
  .load .loader {
    font-size: 11px;
    text-indent: -99999em;
    margin: 5em auto;
    position: relative;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 1em #FFF;
  }
  
  .load .loader:before {
    width: 5.2em;
    height: 10.2em;
    background: #0dcecb;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.2em 5.1em;
    animation: load 2s infinite ease 1.5s;
  }
  
  .load .loader:after {
    width: 5.2em;
    height: 10.2em;
    background: #0dcecb;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0px 5.1em;
    animation: load 2s infinite ease;
  }
  
  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>