<template>
<div class="book-info flex-one">
  <section>
    <h2>javaScript权威指南</h2>
    <p>
      <span>作者：</span><span>David Flanagan</span>
    </p>
    <p>
      <span>出版社：</span><span>机械工业出版社华章公司</span>
    </p>
    <p>
      <span>出版时间：</span><span>2012</span>
    </p>
    <p>
      <span>索引号：</span><span>9787111376613</span>
    </p>
  </section>
  <table>
    <thead>
      <tr>
        <td>
          书名
        </td>
        <td>
          楼层
        </td>
        <td>
          还书日期
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          javaScript权威指南
        </td>
        <td>
          6楼1排22架
        </td>
        <td>
          2016.02.02
        </td>
      </tr>
      <tr>
        <td>
          javaScript权威指南
        </td>
        <td>
          6楼1排22架
        </td>
        <td>
          2016.02.02
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.book-info {
    padding: 1rem;

    section {
        border: 1px solid #cccccc;
        border-radius: 10px;

        h2 {
            margin: 0;
            padding: 1rem;
            font-size: 18px;
            color: #ffffff;
            background-color: #42b983;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
        }
        p {
            font-size: 16px;
            color: #69696B;
        }
    }
    table {
        margin-top: 2rem;
        font-size: 16px;
        border: 1px solid #cccccc;
        border-radius: 10px;
        border-collapse: collapse;

        td {
            padding: 1rem;
            border: 1px solid #cccccc;
        }
    }
}
</style>
