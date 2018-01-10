<!--cart-vue-->
<template>
  <div class="detail-container">
    <div class="close" @click="goBack()">&times;</div>
    <div class="detail-box">
      <div class="detail-header clearfix">
        <img class="detail-image" src="../assets/images/book1.png" alt="">
        <div class="detail-info">
          <p class="detail author">作者： 老夏</p>
          <p class="detail-page">页数： 254</p>
          <p class="detail-num">书号： 98771219885468</p>
          <p class="detail-date">出版时间： 2014-8-24</p>
          <div class="more-content" v-show="showMore">
            <p class="detail-publish">出版社： 电子科大出版社</p>
            <p class="detail-banc">版次： 2</p>
            <p class="detail-baoz">包装： 简装</p>
            <p class="detail-zhi">纸型： 轻型纸</p>
            <p class="kanb">开本： 32开</p>
            <a class="detail-more" @click="toggleMore()">
              收起
              <i class="iconfont icon-jian"></i>
            </a>
          </div>
          <a class="detail-more" @click="toggleMore()" v-show="!showMore">
            更多
            <i class="iconfont icon-jia"></i>
          </a>
        </div>
      </div>
      <div class="detail-content">
        <h3>淘宝天猫电商运营与数据化选品完全手册</h3>
        <p class="detail-intro">
          现代化的电商运营要求对社会发展，
          现代化的电商运营要求对社会发展，
          现代化的电商运营要求对社会发展，
          现代化的电商运营要求对社会发展，
          现代化的电商运营要求对社会发展，
          现代化的电商运营要求对社会发展。
        </p>
        <div class="detail-price-content clearfix">
          <div class="price-box price">¥160</div>
          <div class="price-box num">1本</div>
        </div>
        <div class="btn-group">
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="default">加入购物车</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
  export default {
    data(){
      return{
        showMore: false
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      toggleMore(){
        this.showMore = !this.showMore
      }
    }
  }
</script>
