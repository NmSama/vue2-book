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
      <ul class="main-list-container" :style="{height: getScreenSize() + 'px'}">
        <li>
          <div class="hold-image"></div>
          <p>人类简史</p>
        </li>
        <li>
          <div class="hold-image"></div>
          <p>明朝那些事</p>
        </li>
        <li>
          <div class="hold-image"></div>
          <p>史记</p>
        </li>
        <li>
          <div class="hold-image"></div>
          <p>万历十万年</p>
        </li>
        <li>
          <div class="hold-image"></div>
          <p>甲骨文丛书</p>
        </li>
        <li>
          <div class="hold-image"></div>
          <p>资治通鉴</p>
        </li>
        <li>
          <div class="hold-image"></div>
          <p>山海经</p>
        </li>
        <li>
          <div class="hold-image"></div>
          <p>诗经</p>
        </li>
        <li>
          <div class="hold-image"></div>
          <p>论语</p>
        </li>
      </ul>
    </section>
  </div>
</template>
<style></style>
<script>
  export default {
    methods: {
      getScreenSize: function () {
        const screenHeight = document.documentElement.clientHeight
        const height = screenHeight - 58
        return height
      }
    }
  }
</script>
