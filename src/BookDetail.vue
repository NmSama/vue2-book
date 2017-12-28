<!--cart-vue-->
<template>
  <div class="detail-container">
    <div class="close">&times;</div>
    <div class="detail-box">
      <div class="detail-header clearfix">
        <img class="detail-image" src="./assets/images/book1.png" alt="">
        <div class="detail-info">
          <p class="detail author">老夏</p>
          <p class="detail-page">254</p>
          <p class="detail-num">987-7-121-988546-8</p>
          <p class="detail-date">2014-8-24</p>
          <a href="" class="detail-more">更多</a>
          <i class="iconfont icon-gengduo"></i>
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
    name: 'books'
  }
</script>
