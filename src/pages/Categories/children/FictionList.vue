<template>
  <div class="fiction-container">
    <h3>子导航{{fid}}</h3>
    <ul class="main-list-container" :style="{height: getScreenSize() + 'px'}">
      <li v-for="item in fictions">
        <div class="hold-image"></div>
        <p>{{item.fictionName}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        fid: '',
        fictions:[]
      }
    },
    created(){
      this.getParams()
    },
    watch:{
      '$route': 'getParams'
    },
    methods:{
      getScreenSize() {
        const screenHeight = document.documentElement.clientHeight
        const height = screenHeight - 58
        return height
      },
      getParams(){
        this.fid = this.$route.params.id
        this.getFictionList()
      },
      getFictionList() {
        var url;
        if(this.fid == 1){
          url = 'fictionContent'
        }else{
          url = 'fictionContent2'
        }
        this.$http.get('http://127.0.0.1:8080/static/json/fictions/'+url+'.json').then( (res)=> {
          this.fictions = res.data.data
        })
      }
    }
  }
</script>
