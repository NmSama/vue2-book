<!--explorer-vue-->
<template>
  <div class="cate-container clearfix">
    <aside class="left-container">
      <ul class="left-list-container" :style="{height: getScreenSize() + 'px'}">
        <router-link tag="li" :to="{name: 'Fictions'}">小说</router-link>
        <router-link tag="li" :to="{name: 'Fictions'}">文学</router-link>
        <router-link tag="li" :to="{name: 'Fictions'}">人文社科</router-link>
        <router-link tag="li" :to="{name: 'Fictions'}">育儿/家教</router-link>
      </ul>
    </aside>
    <section class="main-container">
      <router-view></router-view>

    </section>
  </div>
</template>
<style></style>
<script>
  export default {
    props:[
      heading
    ],
    methods: {
      getScreenSize: function () {
        const screenHeight = document.documentElement.clientHeight
        const height = screenHeight - 58
        return height
      }
    }
  }
</script>
