<template>
<section class="search flex-one">
  <div class="container">
    <i class="iconfont logo">&#xe603;</i>
    <form class="form-search">
      <input class="form-control" type="text" name="keyword" placeholder="关键词">
      <select v-model="campus" class="form-control" id="campus" name="campus">
          <option value="ALL">全部校区</option>
          <option value="578">东风路校区</option>
          <option value="579">龙洞校区</option>
          <option value="580">大学城校区</option>
          <option value="586">番禺校区</option>
      </select>
      <button @click.prevent="search" class="btn btn-success" name="search-button">搜 索</button>
    </form>
  </div>
</section>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '图书馆'
    })
  },
  data() {
    return {
      campus: 'all'
    }
  },
  methods: {
    selectChanged() {
      // console.log(this.campus)
    },
    search() {
      let campusCode = this.campus,
        campus
      switch(campusCode) {
        case 'ALL':
          campus = 'all'
          break
        case '578':
          campus = 'ld'
          break
        case '578':
          campus = 'dx'
        default:
          campus = 'py'
          break
      }
        console.log(campus)
      this.$router.push(campus + '/books')
    }
  }
}
</script>
