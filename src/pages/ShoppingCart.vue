<!--cart-vue-->
<template>
  <div class="cart-container">
    <div class="cart-empty" v-show="!checkAllTag">
      <i class="iconfont icon-fangwuzhuangtai-kong"></i>
      <p>购物车是空的哦，快去挑选心仪的书籍吧~</p>
      <!--<mt-button type="primary">去首页</mt-button>-->
    </div>
    <div class="checkbox-all-con" v-show="checkAllTag">
      <a class="cart-book-checkbox checkbox-all" :class="{active: checkedNum == options.length && checkedNum != 0}" @click="toggleAllCheck()"></a>
      <span class="checkbox-all-title">全选</span>
    </div>
    <span v-show="checkedNum">已选{{checkedNum}}项</span>
    <div class="cart-book-operate" v-show="checkedNum">
      <span class="cart-book-account" @click="goPayment()">
        <i class="iconfont icon-jiesuan"></i>
        结算
      </span>
      <span class="cart-book-delete" @click="deleteBooks()">
        <i class="iconfont icon-shanchu"></i>
        删除
      </span>
    </div>
    <div v-for="item in options">
      <a class="cart-book-checkbox" :class="{active: item.check}" @click="toggleCheck(item)"></a>
      <img class="cart-book-img" :src="item.url">
      <div class="cart-book-detail">
        <p class="title">{{item.title}}</p>
        <p>{{item.authors | join}}</p>
        <p>¥{{item.price}}</p>
      </div>
      <div class="cart-book-num">
        <a href="javascript:;" class="num-sub" @click="subNum(item)">-</a>
        <input type="text" v-model="item.count">
        <a href="javascript:;" class="num-plus" @click="plusNum(item)">+</a>
      </div>
    </div>
    <modal-dialog ref="dialog" @dialogClose="selected = undefined">
      <div slot="header">
        <div class="dialog-title">订单结算</div>
      </div>
      <div class="user-address-container clearfix">
        <i class="iconfont icon-dingwei"></i>
        <div class="user-address-content">
          <p class="user-name">收货人：张莉</p>
          <p class="user-tel">联系方式：18852477896</p>
          <p class="user-address">收货地址：广东省广州市花都区白云国际机场南区</p>
        </div>
        <i class="iconfont icon-xiugai" @click="editAddress"></i>
      </div>
      <div class="item-container">
        <div class="book-detail clearfix">
          <div class="book-img"></div>
          <div class="book-right-con">
            <div class="book-item book-title">圣诞模板1-创意圣诞模板，红色烘托圣诞浓郁气氛</div>
            <div class="book-user">周明，李曼琳</div>
            <div class="book-price">¥238.49</div>
            <div class="book-num">×25</div>
            <div class="book-total">小计： ¥1358</div>
          </div>
        </div>
        <div class="send-container">
          <div class="send-type">
            <p>配送方式 <span class="send-right">卖家包邮</span></p>
            <p>运费险 <span class="send-right send-insurance" @click="changeShowIns">{{value != 0? '0.3元可赔付10元' : '不使用运费险'}}</span></p>
            <div class="radio-container" v-show="showIns">
              <mt-radio v-model="value" :options="radioOptions" @change="changeRadio"></mt-radio>
            </div>
            <p>运费险投保须知 <i class="iconfont icon-wenhao"></i></p>
            <p class="item-message">买家留言<input class="input-message" type="text" placeholder="选填：填写内容已和卖家协商确认"></p>
            <p class="item-total">共25件商品 小计：¥1358</p>
          </div>
        </div>
      </div>
      <mt-button class="btn-order" type="primary">提交订单</mt-button>
    </modal-dialog>
    <main-footer></main-footer>
  </div>
</template>
<script>
  import Footer from '../components/Footer.vue'
  import {MessageBox} from 'mint-ui'
  import {Toast} from 'mint-ui'
  import CartList from '../components/CartList.vue'
  import url from '../assets/images/book-cover.png'
  import ModalDialog from '../components/Dialog.vue'
  export default {
    data() {
      return {
        options:[
          {url: url, title: '圣诞模板1-原创不得以任何形式转载', authors: ['周明','李曼琳'], price: '239.8', count: '25',check: 0},
          {url: url, title: '圣诞模板2-原创不得以任何形式转载', authors: ['Danny Snow'], price: '239.8', count: '14',check: 0},
          {url: url, title: '圣诞模板3-原创不得以任何形式转载', authors: ['赵启明'], price: '239.8', count: '5',check: 0},
          {url: url, title: '圣诞模板4-原创不得以任何形式转载', authors: ['蒋旭东','Micheal Max'], price: '239.8', count: '1',check: 0},
        ],
        radioOptions:[
          {label:'不使用运费险', value: '0'},
          {label:'确认收货前可赔付10元 0.30元', value: '1'}
        ],
        checkedNum: 0,
        checkAllTag: true,
        showIns: false,
        value: '0'
      }
    },
    filters:{
      join(args) {
        return args.join('，')
      },
      checked(args) {
        return args.get('check')
      }
    },
    methods: {
      subNum(book) {
        if(book.count > 1){
          book.count--
        }
      },
      plusNum(book) {
        book.count++
      },
      toggleCheck(book) {
        book.check = !book.check
        this.getCheckedNum()
      },
      toggleAllCheck() {
        let tag = 0
        if(this.checkedNum === this.options.length){
          tag = 0
        }else{
          tag = 1
        }
        this.options.forEach(item => {
          item.check = tag
        })
        this.getCheckedNum()
      },
      getCheckedNum(){
        let num = 0
        this.options.forEach(item => {
          num += item.check
        })
        this.checkedNum = num
        return num
      },
      goPayment(){
        /*console.log('弹出复合框')*/
        this.$refs.dialog.open()
      },
      deleteBooks(){
        MessageBox.confirm('是否要删除选中的物品吗').then(action => {
          var that = this;
          for(let i=that.options.length;i>=1;i--){
            if(that.options[i-1].check){
              that.options.splice(i-1,1)
            }
          }
          this.getCheckedNum()
          if(this.options.length == 0){
            this.checkAllTag = false
          }
          Toast({
            message: '删除成功',
            position: 'center',
            duration: 2000
          })
        });
      },
      editAddress(){
        Toast({
          message: '功能暂未实现',
          position: 'center',
          duration: 2000
        })
      },
      changeShowIns(){
        this.showIns = !this.showIns
      },
      changeRadio(){
        console.log(this.value)
      }
    },
    components: {
      'app-cart-list': CartList,
      'main-footer': Footer,
      ModalDialog
    }
  };
</script>
<style lang="scss" scoped="" type="text/css">
  .dialog-title{
    margin-bottom: 10px;
    font-size: 18px;
  }
  .user-address-container{
    margin-bottom: 10px;
    .icon-dingwei{
      float: left;
      margin: 0 2px;
      font-size: 20px;
    }
    .user-address-content{
      float: left;
      width: 86%;
    }
    .icon-xiugai{
      float: left;
      margin-top: 20px;
    }
  }
  .item-container{
    .book-detail{
      margin-bottom: 10px;
      .book-img{
        float: left;
        width: 80px;
        height: 80px;
        background: #ddd;
      }
      .book-right-con{
        float: left;
        margin-left: 10px;
        width: 66%;
        .book-price{
          display: inline-block;
        }
        .book-num{
          display: inline-block;
          float: right;
        }
        .book-total{
          text-align: right;
        }
      }
    }
    .send-container{
      .send-right{
        float: right;
        margin-right: 8px;
      }
      .send-insurance{
        color: #2c89ea;
      }
      p{
        line-height: 26px;
      }
      .item-message{
        position: relative;
      }
      .input-message{
        position: absolute;
        right: 8px;
        padding: 5px;
        width: 200px;
        border: 1px solid #ddd;
      }
      .item-total{
        margin-top: 15px;
        text-align: right;
      }
    }
  }
  .btn-order{
    float: right;
    margin-top: 10px;
  }
</style>
