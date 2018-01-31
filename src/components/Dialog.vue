<!--cart-vue-->
<template>
  <div class="dialog" :class="{'open': isOpen}">
    <div>
      <div class="close"><span @click="close()">&times;</span></div>
      <slot name="header"></slot>
    </div>
    <div>
      <!--内容区域-->
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        isOpen: false
      }
    },
    methods:{
      open(){
        if(!this.isOpen){
          this.$emit('dialogOpen')
        }
        this.isOpen = true
      },
      close(){
        if(this.isOpen){
          this.$emit('dialogClose')
        }
        this.isOpen = false
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
  .dialog {
    display: none;
    position: absolute;
    padding: 3%;
    top: 24px;
    left: 24px;
    right: 24px;
    bottom: 24px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    z-index: 500;
    .close{
      font-size: 40px;
      text-align: right;
    }
  }
  .open{
    display: block;
  }
</style>
