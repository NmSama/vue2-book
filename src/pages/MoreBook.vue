<template>
  <div class="more-container">
    <section class="search-section">
      <app-search></app-search>
    </section>
    <ul class="more-list" :style="{'height': + getScreenSize() + 'px'}">
      <li v-for="item in bookList" class="more-item clearfix">
        <img class="item-img" src="../assets/images/book4.png" @click="goDetail()">
        <div class="item-container">
          <p class="item-name">{{item.bookName}}</p>
          <p class="item-author">{{item.bookAuthor | join}} 著</p>
          <p class="item-publish">{{item.bookPublish}}</p>
          <p class="item-price">{{item.bookPrice}}</p>
        </div>
        <i class="iconfont icon-cart"></i>
      </li>
    </ul>
  </div>
</template>
<script>
  import SearchBox from '../components/SearchBox.vue'
  export default {
    data() {
      return{
        bookList: []
      }
    },
    filters:{
      join(args) {
        return args.join('，')
      }
    },
    created() {
      this.$http.get('http://127.0.0.1:8080/static/json/bookList.json').then((res)=>{
        this.bookList = res.data.data
      })
    },
    methods: {
      getScreenSize() {
        const screenHeight = document.documentElement.clientHeight
        const height = screenHeight - 108
        return height
      },
      goDetail(){
        this.$router.push({
          name: 'BookDetail'
        })
      }
    },
    components:{
      'app-search': SearchBox
    }
  }
</script>
