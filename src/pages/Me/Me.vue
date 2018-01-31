<!--me-vue-->
<template>
  <div>
  <div class="me-container">
    <div class="me-head-container clearfix">
      <div class="me-avatar">
        <img src="../../assets/images/avatar.jpg" width="100%" alt="个人头像">
      </div>
      <p class="me-name">这是一个很长的昵称</p>
      <i class="iconfont icon-nv"></i>
      <router-link class="iconfont icon-shezhi" :to="{name: 'Setting'}" tag="i"></router-link>
    </div>
    <div class="me-content">
      <p class="order-title">我的订单</p>
      <ul class="order-list clearfix">
        <li>
          <i class="iconfont icon-qian"></i>
          <p>待付款</p>
        </li>
        <li>
          <i class="iconfont icon-daifahuo"></i>
          <p>待发货</p>
        </li>
        <li>
          <i class="iconfont icon-shouhuo"></i>
          <p>待收货</p>
        </li>
        <li>
          <i class="iconfont icon-daipingjia"></i>
          <p>待评价</p>
        </li>
      </ul>
    </div>
    <main-footer></main-footer>
  </div>
  <transition name="slide-fade">
	  <router-view></router-view>
  </transition>
  </div>
</template>
<style type="text/css" lang="scss">
</style>
<script>
  import Footer from '../../components/Footer.vue'
  export default {
    methods:{
      setInfo(){

      }
    },
    components:{
      'main-footer': Footer
    }
  }
</script>
