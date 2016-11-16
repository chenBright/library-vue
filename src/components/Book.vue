<template>
  <div class="book-info">
    <section>
      <h2>javaScript权威指南</h2>
      <div>
        <span>作者：</span><span class="flex-one">David Flanagan</span>
      </div>
      <div>
        <span>出版社：</span><span class="flex-one">机械工业出版社华章公司</span>
      </div>
      <div>
        <span>出版时间：</span><span class="flex-one">2012</span>
      </div>
      <div>
        <span>索引号：</span><span class="flex-one">9787111376613</span>
      </div>
      <div>
        <span>楼层：</span>
        <div class="flex-one">
          <p>大学城样本书库7楼119排4架</p>
          <p>大学城自然科学书库5楼172排1架</p>
        </div>
      </div>
    </section>
    <table>
      <thead>
        <tr>
          <th>
            馆藏地
          </th>
          <th>
            状态
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            大学城样本书库
          </td>
          <td>
            仅供阅览
          </td>
        </tr>
        <tr>
          <td>
            大学城自然科学书库
          </td>
          <td>
            2016.11.04应还
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  beforeMount () {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '图书详情'
    })
  }
}
</script>

<style lang="scss">
  .book-info {
    padding-left: 1rem;
    padding-right: 1rem;
    section {
      margin-top: 20px;
      border: 1px solid #cccccc;
      border-radius: 10px;
      h2 {
        margin: 0;
        padding: 1rem 0;
        font-size: 18px;
        color: #ffffff;
        background-color: #42b983;
        border: 0;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
      > div {
        display: flex;
        margin: 0;
        padding: 1em;
        font-size: 16px;
        text-align: left;
        border-bottom: 1px solid #cccccc;
        color: #69696B;
        &:last-child {
          border-bottom: none;
          p {
            margin-top: 0;
            margin-bottom: 10px;
            color: #42b983;
            font-weight: bolder;
          }
        }
        span {
          display: block;
        }
      }
    }
    table {
      margin-top: 2rem;
      width: 100%;
      font-size: 16px;
      border: 1px solid #cccccc;
      border-radius: 10px;
      border-collapse: collapse;
      th,
      td {
        padding: 1rem;
        border: 1px solid #cccccc;
      }
    }
  }
</style>