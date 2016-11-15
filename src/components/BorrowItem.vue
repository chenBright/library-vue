<template>
  <li class="book-item">
    <h2 class="book-title">{{ book.title }}</h2>
    <p>
      <span>还书日期：</span><span class="flex-one" :class="{ success: !isOverdue, warn: isOverdue }">{{ book.returnDate }}</span>
    </p>
    <p>
      <span>借书日期：</span><span class="flex-one">{{ book.borrowDate }}</span>
    </p>
    <p>
      <span>状态：</span><span class="flex-one" :class="{ warn: isOverdue }">{{ book.borrowStatus }}</span>
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
  },
  data() {
    return {
      isOverdue: this.book.borrowStatus === '超期' ? true : false
    }
  }
}
</script>