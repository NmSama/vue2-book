<template>
	<div class="setting-container">
    <mt-header title="修改个人信息">
      <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
    </mt-header>
    <div class="setting-item clearfix">
      <p class="item-title title-avater">头像</p>
      <div class="item-right">
        <img class="avater" src="../../assets/images/avatar.jpg" width="100%" alt="个人头像">
        <i class="iconfont icon-gengduo" @click="sheetVisible = true"></i>
      </div>
    </div>
    <div class="setting-item clearfix">
      <p class="item-title">用户名</p>
      <div class="item-right">1022-8766-900</div>
    </div>
    <div class="setting-item clearfix">
      <p class="item-title">昵称</p>
      <div class="item-right">一罐黄豆酱
        <router-link :to="{name: 'SetName'}" class="iconfont icon-gengduo" tag="i"></router-link>
        <!--<i class="iconfont icon-gengduo"></i>-->
      </div>
    </div>
    <div class="setting-item clearfix">
      <p class="item-title">出生日期</p>
      <div class="item-right">1992-1-23
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancel-text="取消"></mt-actionsheet>
    <!--<router-view></router-view>-->
	</div>
</template>
<script>
  import {Toast} from 'mint-ui'
	export default {
		data() {
			return {
			  sheetVisible: false,
        actions: [{name: '拍照', method: this.takePhoto},
          {name: '从手机相册选取', method: this.openAlbum}
        ]
      }
		},
    methods:{
      takePhoto(){
        Toast({
          message: '暂时无法打开相机',
          position: 'center',
          duration: 2000
        })
      },
      openAlbum(){
        Toast({
          message: '暂时无法打开相册',
          position: 'center',
          duration: 2000
        })
      }
    },
		components: {},
	}
</script>

<style lang="scss" scoped="" type="text/css">
  .setting-container{
    .setting-item{
      padding: 0 10px;
      line-height: 36px;
      vertical-align: middle;
      border-bottom: 1px solid #ddd;
    }
    .item-title{
      float: left;
    }
    .title-avater{
      line-height: 44px;
    }
    .item-right{
      float: right;
      .avater{
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: bottom;
        background: #dddddd;
        &+.icon-gengduo{
           line-height: 44px;
         }
      }
      .icon-gengduo{
        float: right;
        margin-left: 4px;
      }
    }
  }
</style>
