<!--home-vue-->
<template>
  <div class="home-content">
    <section class="search-section">
      <app-search></app-search>
    </section>
    <section>
      <app-banner :slides="slides"></app-banner>
      <div class="news-container">
        <label>快讯</label>
        <span>距离春节只剩{{getDate}}天</span>
      </div>
    </section>
    <section class="newbook-container">
      <book-list :books="newBookList" heading="新书上架"></book-list>
    </section>
    <section class="editbook-container">
      <book-list :books="editList" heading="编辑推荐"></book-list>
    </section>
  </div>
</template>
<script>
  import Banner from './components/Swiper.vue'
  import BookList from './components/BookList.vue'
  import SearchBox from './components/SearchBox.vue'
  import domain from './App.vue'
  export default{
    name: 'Home',
    data() {
      return {
        slides: [
          {id: 1, url: require('./assets/images/hot-title1.png')},
          {id: 2, url: require('./assets/images/hot-title2.png')},
          {id: 3, url: require('./assets/images/hot-title3.png')}
        ],
        newBookList:[
          {url: require('./assets/images/book3.png'), title:'圣诞老人与麋鹿的故事', authors: ['周明','李曼琳']},
          {url: require('./assets/images/book2.png'), title:'圣诞与耶稣，宗教与信仰', authors: ['Danny Snow']},
          {url: require('./assets/images/book1.png'), title: '麋鹿--一个诞生自宗教家庭的叛逆少年', authors: ['蒋旭东','Micheal Max']}
        ],
        editList:[
          {url: require('./assets/images/book2.png'), title:'圣诞老人与麋鹿的故事', authors: ['周明','李曼琳']},
          {url: require('./assets/images/book1.png'), title:'圣诞与耶稣，宗教与信仰', authors: ['Danny Snow']},
          {url: require('./assets/images/book3.png'), title: '麋鹿--一个诞生自宗教家庭的叛逆少年', authors: ['蒋旭东','Micheal Max']}
        ],

      }
    },
    computed: {
      getDate: function () {
        const startDate = new Date()
        const endDate = new Date('2018-2-16')
        var remainDate = parseInt((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000))
        return remainDate
      }
    },
    components: {
      'app-banner': Banner,
      'book-list': BookList,
      'app-search': SearchBox
    }
  }
</script>
