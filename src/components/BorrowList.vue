<template>
  <div class="borrow-list">
    <ul>
      <item v-for="book in books" :key="book.orderNumber" :book="book"></item>
    </ul>
    </div>
</template>

<script>
import item from './BorrowItem'

export default {
  data(){
    return{
      books: [
        {
          "orderNumber": 1,
          "borrowStatus": "续满",
          "returnDate": "2017-01-31",
          "title": "JavaScript DOM高级程序设计 [专著]＝AdvancED DOM scripting: dynamic Web design techniques／(加)Jeffrey Sambells,(美)Aaron Gustafson著；李松峰...等译",
          "borrowDate": "2016-11-01"
        },
        {
          "orderNumber": 2,
          "borrowStatus": "续满",
          "returnDate": "2016-12-10",
          "title": "欧姆龙PLC入门与典型应用 [专著]／王建,杜艳丽,孙怀荣主编",
          "borrowDate": "2016-09-11"
        },
        {
          "orderNumber": 3,
          "borrowStatus": "续满",
          "returnDate": "2016-12-10",
          "title": "PLC与触摸屏控制技术 [专著]／薛迎成编著",
          "borrowDate": "2016-09-11"
        },
        {
          "orderNumber": 4,
          "borrowStatus": "续满",
          "returnDate": "2016-12-10",
          "title": "零起点学会欧姆龙PLC编程 [专著]／霍罡, 李志娟编著",
          "borrowDate": "2016-09-11"
        },
        {
          "orderNumber": 5,
          "borrowStatus": "续满",
          "returnDate": "2016-12-10",
          "title": "AutoCAD 2011中文版机械设计案例实践 [专著]／李志国, 王磊等编著",
          "borrowDate": "2016-09-11"
        },
        {
          "orderNumber": 6,
          "borrowStatus": "续满",
          "returnDate": "2016-12-11",
          "title": "jQuery技术内幕 [专著]：深入解析jQuery架构设计与实现原理＝jQuery internals：architecture and implementation in depth／高云著",
          "borrowDate": "2016-09-12"
        },
        {
          "orderNumber": 7,
          "borrowStatus": "续满",
          "returnDate": "2016-12-28",
          "title": "测试驱动的JavaScript开发 [专著]＝Test-driven JavaScript development／(美)Christian Johansen著；赵勇...[等]译",
          "borrowDate": "2016-09-27"
        },
        {
          "orderNumber": 8,
          "borrowStatus": "续满",
          "returnDate": "2016-12-28",
          "title": "JavaScript设计模式 [专著]／(美) Addy Osmani著；徐涛译",
          "borrowDate": "2016-09-27"
        },
        {
          "orderNumber": 9,
          "borrowStatus": "续满",
          "returnDate": "2016-12-28",
          "title": "编写可维护的JavaScript [专著]／(美)Nicholas C. Zakas著；李晶,郭凯,张散集译",
          "borrowDate": "2016-09-27"
        },
        {
          "orderNumber": 10,
          "borrowStatus": "续满",
          "returnDate": "2016-12-28",
          "title": "响应式Web [专著]＝The responsive Web／(美) Matthew Carver著；王鹤, 罗创杰译",
          "borrowDate": "2016-09-27"
        },
        {
          "orderNumber": 11,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "JavaScript函数式编程 [专著]／(美)Michael Fogus著；欧阳继超,王妮译",
          "borrowDate": "2016-10-05"
        },
        {
          "orderNumber": 12,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "JavaScript设计模式 [专著]／张容铭著",
          "borrowDate": "2016-10-05"
        },
        {
          "orderNumber": 13,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "学习JavaScript数据结构与算法 [专著]＝Learning JavaScript data structures and algorithms／(巴西) Loiane Groner著；孙晓博 ... [等]译",
          "borrowDate": "2016-10-05"
        },
        {
          "orderNumber": 14,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "软件框架设计的艺术 [专著]／(捷克)Jaroslav Tulach著；王磊,朱兴译",
          "borrowDate": "2016-10-05"
        },
        {
          "orderNumber": 15,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "HTTP权威指南＝HTTP: the definitive guide／(美) David Gourley ... [等]著；陈涓, 赵振平译",
          "borrowDate": "2016-10-05"
        },
        {
          "orderNumber": 16,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "Node.js高级编程 [专著]／(美)Pedro Teixeira著；胡训强,张欣景译",
          "borrowDate": "2016-10-05"
        },
        {
          "orderNumber": 17,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "CSS权威指南 [专著]／Eric A. Meyer著；尹志忠, 侯妍译",
          "borrowDate": "2016-10-05"
        },
        {
          "orderNumber": 18,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "HTML5数据推送应用开发 [专著]＝Data push apps with HTMLS5 SSE／(美) Darren Cook著；刘帅译",
          "borrowDate": "2016-10-05"
        },
        {
          "orderNumber": 19,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "高性能MySQL [专著]＝High performance MySQL／Baron Schwartz ... [等] 著；王小东, 李军, 康建勋译",
          "borrowDate": "2016-10-06"
        },
        {
          "orderNumber": 20,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "面向对象分析与设计 [专著]／(美)Grady Booch...[等]著；王海鹏,潘加宇译",
          "borrowDate": "2016-10-06"
        },
        {
          "orderNumber": 21,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "计算机网络 [专著]／谢希仁编著",
          "borrowDate": "2016-10-06"
        },
        {
          "orderNumber": 22,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "代码阅读 [中译文]＝Code reading the open source perspective／(希)Diomidis Spinellis著；左飞,吴跃,杨宁译",
          "borrowDate": "2016-10-06"
        },
        {
          "orderNumber": 23,
          "borrowStatus": "续满",
          "returnDate": "2017-01-04",
          "title": "Web前端黑客技术揭秘 [专著]／钟晨鸣, 徐少培编著",
          "borrowDate": "2016-10-06"
        },
        {
          "orderNumber": 24,
          "borrowStatus": "续满",
          "returnDate": "2017-01-07",
          "title": "单页Web应用 [专著]：JavaScript从前端到后端／(美) Michael S.Mikowski, (美) Josh C. Powell著；包勇明译",
          "borrowDate": "2016-10-09"
        }
      ]
    }
  },
  beforeMount () {
    this.$store.dispatch('CHANGE_PAGE', {
      msg: '在借图书（' + this.books.length + '本）'
    })
  },
  components: {
    item
  }
}</script>