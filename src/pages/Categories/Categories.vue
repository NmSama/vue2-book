<!--explorer-vue-->
<template>
  <div class="cate-container clearfix">
    <aside class="left-container">
      <ul class="left-list-container" :style="{height: getScreenSize() + 'px'}">
        <router-link v-for="item in fictionList" tag="li" :to="{name: 'Fictions',params: {id: item.fid}}" key="item.id">{{item.fictionName}}</router-link>
      </ul>
    </aside>
    <section class="main-container">
      <router-view></router-view>
    </section>
    <main-footer></main-footer>
  </div>
</template>
<style></style>
<script>
  import Footer from '../../components/Footer.vue'
  import FictionContent from './children/FictionContent.vue'
  export default {
    data(){
      return {
        fictionList: []
      }
    },
    created(){
      this.getFictionList()
      this.$router.push({path: '/categories/fictions/1'})
    },
    mounted(){
      console.log(this.$route.params)
    },
    methods: {
      getScreenSize() {
        const screenHeight = document.documentElement.clientHeight
        const height = screenHeight - 58
        return height
      },
      getFictionList(){
        this.$http.get('http://127.0.0.1:8080/static/json/fictions/fictionList.json').then((res)=>{
          this.fictionList = res.data.data
        })
      }
    },
    components: {
      'fiction-content': FictionContent,
      'main-footer': Footer
    }
  }
</script>
