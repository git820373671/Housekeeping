<template>
  <div class="h100 cleaning-appointment">
    <header-menu :headerData="headerData"></header-menu>
    <div class="panel">
      <div class="detail-box">
        <div class="tit">
          <img src="../../assets/images/icon2.png"/>
          <p>订单详情</p></div>
        <ul class="list">
          <li>
            <p class="lable">服务类型：</p>
            <p class="right">保姆</p>
          </li>
          <li>
            <p class="lable">单价：</p>
            <p class="right">¥6000元/月</p>
          </li>
          <li>
            <p class="lable">服务周期：</p>
            <p class="right">
              <select class="filed">
                <option>半年</option>
                <option>一年</option>
                <option>2年</option>
              </select>
            </p>
          </li>
          <li>
            <p class="lable">定金：</p>
            <p class="right red">¥1200元</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="panel">
      <div class="detail-box p-b-20">
        <mt-field label="联系人：" placeholder="请输入您的称呼" v-model="username"></mt-field>
        <div class="radio-box">
          <p :class="radioVal===2?'active':''" v-on:click="changeType(2)">女士</p>
          <p :class="radioVal===1?'active':''" v-on:click="changeType(1)">先生</p>
        </div>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      </div>
    </div>
    <div class="appointment-footer">
      <div class="btn-icon">
        <img src="../../assets/images/cleaning/icon3.png"/>
        <div class="node">99+</div>
        购物车
      </div>
      <div class="btn">加入购物车</div>
      <router-link :to="{name: 'SubmitPage',params: {type: 3}}">
        <div class="btn yellow">立即预约</div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '预约保姆'
        },
        username: '',
        phone: '',
        radioVal: 1
      }
    },
    methods: {
      changeType: function (val) {
        this.radioVal = val
      }
    }
  }
</script>
