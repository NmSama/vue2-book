<template>
	<div class="name-container">
    <mt-header title="修改昵称">
      <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
      <mt-button slot="right" @click="confirmName">确定</mt-button>
    </mt-header>
    <input type="text" placeholder="请输入昵称" maxlength="20" v-model="name">
    <i class="iconfont icon-delete"></i>
    <p>4-20个字符，可由中英文、数字、"-"、"_"组成</p>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			  name: ''
      }
		},
    methods:{
      confirmName(){
        this.checkName()
        console.log('修改成功')
      },
      checkName(){
        var a=/^[a-zA-Z0-9_]*$/;
        if(!a.test(this.name)){
          console.log('error')
        }
      }

    },
		components: {},
	}
</script>

<style lang="scss" scoped="" type="text/css">
  input{
    padding: 10px 6px 10px;
    width: 96%;
    border-left: none;
    border-right: none;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
  .iconfont{
    position: absolute;
    right: 10px;
    top: 50px;
  }
  p{
    padding: 6px;
    font-size: 14px;
    color: #656b79;
  }
</style>
