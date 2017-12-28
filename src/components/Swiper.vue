<!--swiper-vue-->
<template>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in slides">
        <router-link class="swiper-slide" tag="div" :to="{name: 'BookDetail', params: {id: str.id}}">
          <img :src="str.url" alt="" width="100%" height="160px">
        </router-link>
      </div>
    </div>
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props: ['slides'],
    mounted() {
      var mySwiper = new Swiper(this.$refs.slider,{
        direction: 'horizontal',
        loop: true,
        speed: 600,
        autoplay: true,
        autoplayDisableOnInteraction: true,
        pagination: {
          el: this.$refs.pagination
        },
        paginationClickable: true
      })
    }
  }
</script>
