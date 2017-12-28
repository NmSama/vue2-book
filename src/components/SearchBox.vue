<template>
  <div class="search-container" :style="{'margin-left': marginToLeft + 'px'}">
    <input class="search-input" type="text" placeholder="搜索">
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        marginToLeft: 0
      }
    },
    mounted: function(){
      let screenWidth = document.documentElement.clientWidth
      let searchWidth = document.querySelector('.search-input').clientWidth
      let searchToLeft = (screenWidth - searchWidth) / 2
      this.marginToLeft = searchToLeft
    }
  }
</script>
