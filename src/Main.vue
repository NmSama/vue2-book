<template>
  <div id="main">
    <div class="tabs-content">
      <ul class="item-list">
        <router-link :to="{name: 'Home'}" tag="li">
          <i class="iconfont icon-shouye"></i>
          <div class="item-name">首页</div>
        </router-link>
        <router-link :to="{name: 'Categories'}" tag="li">
          <i class="iconfont icon-categories"></i>
          <div class="item-name">分类</div>
        </router-link>
        <router-link :to="{name: 'ShoppingCart'}" tag="li">
          <i class="iconfont icon-cart"></i>
          <div class="item-name">购物车</div>
        </router-link>
        <router-link :to="{name: 'Me'}" tag="li">
          <i class="iconfont icon-fcstubiao18"></i>
          <div class="item-name">我</div>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<style></style>
<script>
  export default {}
</script>
