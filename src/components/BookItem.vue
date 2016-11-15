<template>
  <li class="book-item">
    <h2 class="book-title">{{ book.title }}</h2>
    <p>
      <span>作者：</span><span class="flex-one">{{ book.author }}</span>
    </p>
    <p>
      <span>出版社：</span><span class="flex-one">{{ book.publisher }}</span>
    </p>
    <p>
      <span>出版时间：</span><span class="flex-one">{{ book.date }}</span>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .book-item {
    padding: 1rem 1rem 0 1.2rem;
    border-bottom: 1px solid #cccccc;
    text-align: left;
    h2 {
      margin-top: 0;
      color: #000000;
    }
    p {
      display: flex;
      font-size: 14px;
      color: #69696B;
      .warn {
        color: #d9534f;
      }
      .success {
        color: #42b983;
      }
      span {
        display: block;
      }
    }
  }
  
  .book-title {
    margin-top: 1.2rem;
    font-size: 16px;
  }
</style>