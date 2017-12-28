<!--cart-vue-->
<template>
  <div class="cart-container">
    <a class="cart-book-checkbox checkbox-all"></a>
    <span class="checkbox-all-title">全选</span>
    <div v-for="item in options">
      <a class="cart-book-checkbox"></a>
      <img class="cart-book-img" :src="item.url">
      <div class="cart-book-detail">
        <p class="title">{{item.title}}</p>
        <p>{{item.authors}}</p>
        <p>¥{{item.price}}</p>
      </div>
      <div class="cart-book-num">
        <a href="javascript:;" class="num-sub">-</a>
        <input type="text" :value="item.count">
        <a href="javascript:;" class="num-plus">+</a>
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
          {url: url, title: '圣诞模板1-原创不得以任何形式转载', authors: ['周明','李曼琳'], price: '239.8', count: '25'},
          {url: url, title: '圣诞模板2-原创不得以任何形式转载', authors: ['Danny Snow'], price: '239.8', count: '14'},
          {url: url, title: '圣诞模板3-原创不得以任何形式转载', authors: ['赵启明'], price: '239.8', count: '5'},
          {url: url, title: '圣诞模板4-原创不得以任何形式转载', authors: ['蒋旭东','Micheal Max'], price: '239.8', count: '1'},
        ]
      }
    },
    methods: {
      checked: function () {
        console.log(this.value)
      }
    },
    components: {
      'app-cart-list': CartList
    }
  };
</script>
