<template>
  <div class="fiction-container">
    子分类界面
    <ul class="main-list-container" :style="{height: getScreenSize() + 'px'}">
      <li v-for="item in fictions">
        <div class="hold-image"></div>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        fictions:[
          {title: '人类简史',url:''},
          {title: '明朝那些事',url:''},
          {title: '史记',url:''},
          {title: '资治通鉴',url:''},
          {title: '山海经',url:''},
          {title: '诗经',url:''},
          {title: '论语',url:''},
          {title: '孟子',url:''},
          {title: '孙子兵法',url:''}
        ]
      }
    },
    methods:{
      getScreenSize: function () {
        const screenHeight = document.documentElement.clientHeight
        const height = screenHeight - 58
        return height
      }
    }
  }
</script>
