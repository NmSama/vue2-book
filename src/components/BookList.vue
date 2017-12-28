<template>
  <div class="book-container">
    <div class="book-content clearfix">
      <div class="book-title">{{heading}}</div>
      <router-link class="more" :to="{name: 'MoreBook'}">更多</router-link>
    </div>
    <ul class="books-list">
      <router-link v-for="item in books" :to="{name: 'BookDetail', id: '1'}" tag="li" :key="item.id">
        <div class="item-cover">
          <img :src="item.url">
        </div>
        <div class="item-title">{{item.title}}</div>
        <div class="item-author">{{item.authors | join }}</div>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    props:[
      'books',
      'heading'
    ],
    filters:{
      join(args) {
        return args.join('，')
      }
    }
  }
</script>
