<!--cart-vue-->
<template>
  <div class="cart-container">
    <a class="cart-book-checkbox checkbox-all" :class="{active: checkedNum == options.length}" @click="toggleAllCheck()"></a>
    <span class="checkbox-all-title">全选</span>
    <span v-show="checkedNum">已选{{checkedNum}}项</span>
    <div class="cart-book-operate" v-show="checkedNum">
      <i class="iconfont icon-jiesuan"></i>
      结算
      <i class="iconfont icon-shanchu"></i>
      删除
    </div>
    <div v-for="item in options">
      <a class="cart-book-checkbox" :class="{active: item.check}" @click="toggleCheck(item)"></a>
      <img class="cart-book-img" :src="item.url">
      <div class="cart-book-detail">
        <p class="title">{{item.title}}</p>
        <p>{{item.authors}}</p>
        <p>¥{{item.price}}</p>
      </div>
      <div class="cart-book-num">
        <a href="javascript:;" class="num-sub" @click="subNum(item)">-</a>
        <input type="text" v-model="item.count">
        <a href="javascript:;" class="num-plus" @click="plusNum(item)">+</a>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import CartList from './components/CartList.vue'
  import url from './assets/images/book-cover.png'
  export default {
    data() {
      return {
        options:[
          {url: url, title: '圣诞模板1-原创不得以任何形式转载', authors: ['周明','李曼琳'], price: '239.8', count: '25',check: 0},
          {url: url, title: '圣诞模板2-原创不得以任何形式转载', authors: ['Danny Snow'], price: '239.8', count: '14',check: 0},
          {url: url, title: '圣诞模板3-原创不得以任何形式转载', authors: ['赵启明'], price: '239.8', count: '5',check: 0},
          {url: url, title: '圣诞模板4-原创不得以任何形式转载', authors: ['蒋旭东','Micheal Max'], price: '239.8', count: '1',check: 0},
        ],
        checkedNum: 0
      }
    },
    methods: {
      subNum: function (book) {
        if(book.count > 1){
          book.count--
        }
      },
      plusNum: function (book) {
        book.count++
      },
      toggleCheck: function (book) {
        book.check = !book.check
        this.getCheckedNum()
      },
      toggleAllCheck:function () {
        let tag = 0
        if(this.checkedNum == this.options.length){
          tag = 0
        }else{
          tag = 1
        }
        this.options.forEach(item => {
          item.check = tag
        })
        this.getCheckedNum()
      },
      getCheckedNum: function(){
        let num = 0
        this.options.forEach(item => {
          num += item.check
        })
        this.checkedNum = num
      }
    },
    components: {
      'app-cart-list': CartList
    }
  };
</script>
