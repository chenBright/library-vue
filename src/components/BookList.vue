<template>
<div class="book-list">
  <ul>
    <router-link :to="'/books/' + book.bookID" v-for="book in books" target="_blank">
      <item :key="book.bookID" :book="book"></item>
    </router-link>
  </ul>
</div>
</template>

<script>
import item from './BookItem'

export default {
  data() {
    return {
      books: [{
        "title": "Ext JS实战 [专著]＝Ext JS in action",
        "bookID": "690679",
        "author": "(美) Jesus Garcia, Grgur grisogono, Jacob K. Andresen著；卢雄飞, 田雷鹏, 郜忠富译",
        "publisher": "人民邮电出版社",
        "date": "2015"
      }, {
        "title": "微信公众平台开发实战与应用案例 [专著]",
        "bookID": "683949",
        "author": "陈小龙编著",
        "publisher": "清华大学出版社",
        "date": "2015"
      }, {
        "title": "量子物理 [专著]：学习现代物理的基本方法",
        "bookID": "683287",
        "author": "(美)汤森德(Townsend,J.S.)著；陈植芸译",
        "publisher": "高等教育出版社",
        "date": "2015.2"
      }, {
        "title": "Cocos2d-JS开发之旅 [专著]：从HTML 5到原生手机游戏",
        "bookID": "678714",
        "author": "郑高强著",
        "publisher": "电子工业出版社",
        "date": "2015"
      }, {
        "title": "Cocos2d-x实战 [专著]·JS卷 : Cocos2d-JS开发＝Cocos2d-x in action·for Cocos2d-JS",
        "bookID": "678668",
        "author": "关东升著",
        "publisher": "清华大学出版社",
        "date": "2015"
      }, {
        "title": "Three. js开发指南 [专著]＝Learning three.js: the JavaScript 3D library for WebGL",
        "bookID": "676427",
        "author": "(美) Jos Dirksen著；李鹏程译",
        "publisher": "机械工业出版社",
        "date": "2015"
      }, {
        "title": "JSP应用与开发技术 [专著]",
        "bookID": "666889",
        "author": "主编马建红,李占波",
        "publisher": "清华大学出版社",
        "date": "2014"
      }, {
        "title": "精通Angular JS [专著]＝Mastering web application development with Angular JS",
        "bookID": "665267",
        "author": "(美) Pawel Kozlowski, Peter Bacon Darwin著；李璐, 王永强, 马海波译",
        "publisher": "华中科技大学出版社",
        "date": "2014"
      }, {
        "title": "微信公众平台开发基础与实战 [专著]",
        "bookID": "663206",
        "author": "闫小坤,周涛编著",
        "publisher": "机械工业出版社",
        "date": "2014"
      }, {
        "title": "JavaScript实战 [专著]：JavaScript、jQuery、HTML5、Node.js实例大全",
        "bookID": "661451",
        "author": "张泽娜编著",
        "publisher": "清华大学出版社",
        "date": "2014"
      }, {
        "title": "Ext JS 4.2实战 [专著]",
        "bookID": "650974",
        "author": "黄灯桥编著",
        "publisher": "清华大学出版社",
        "date": "2014"
      }, {
        "title": "精通Ext JS [中译文]＝Mastering Ext JS",
        "bookID": "646976",
        "author": "(巴西)Loiane Groner著；卢俊祥译",
        "publisher": "人民邮电出版社",
        "date": "2014"
      }, {
        "title": "Ext JS实战 [专著]＝Ext JS in action",
        "bookID": "639111",
        "author": "(美) Jesus Garcia著；石头狗译",
        "publisher": "人民邮电出版社",
        "date": "2012"
      }, {
        "title": "Modern systems analysis and design [monograph]",
        "bookID": "612009",
        "author": "Jeffrey A. Hoffer, Joey F. George, Joseph S. Valacich＝现代系统分析与设计",
        "publisher": "People' University of China Press",
        "date": "c 2012"
      }, {
        "title": "Ext JS权威指南 [专著]＝Ext JS: the definitive guide",
        "bookID": "595481",
        "author": "黄灯桥著",
        "publisher": "机械工业出版社",
        "date": "2012"
      }, {
        "title": "Nanotechnology [monograph]：looking ahead ",
        "bookID": "642397",
        "author": "editor, Julian S. Moser.",
        "publisher": "Nova Science Publishers",
        "date": "c2011"
      }, {
        "title": "J.S.巴赫创意曲 [专著]＝J. S. Bach inventions & sinfonias",
        "bookID": "580650",
        "author": "赵晓生编注",
        "publisher": "安徽文艺出版社",
        "date": "2011"
      }, {
        "title": "精通JS脚本之Extjs框架 [专著]",
        "bookID": "553185",
        "author": "赵俊昌, 祝红涛, 吴越人编著",
        "publisher": "化学工业出版社",
        "date": "2011"
      }, {
        "title": "精通JS脚本之jQuery框架 [专著]",
        "bookID": "538578",
        "author": "王伟平, 郝军启, 唐有明编著",
        "publisher": "化学工业出版社",
        "date": "2011.03"
      }, {
        "title": "JavaScript框架高级编程 [专著]：应用Prototype、YUI、Ext JS、Dojo、MooTools",
        "bookID": "537482",
        "author": "(美)Leslie M. Orchard,(美)Ara Pehlivanian等著；杨明军译",
        "publisher": "清华大学出版社",
        "date": "2011"
      }]
    }
  },
  beforeMount () {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '搜索结果'
    })
    this.$store.dispatch('LOGIN_LOGOUT', {
      isLogin: true
    })
  },
  components: {
    item
  }
}
</script>
