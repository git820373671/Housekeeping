<template>
  <div class="h100 integral-detail">
    <header-menu :headerData="headerData"></header-menu>
    <img :src="data.photoSrc" class="photo"/>
    <h3 class="title">{{data.title}}</h3>
    <div class="price">
      <img src="../../assets/images/gold.png"/>{{data.gold}}+<span>{{data.price}}</span>元
      <p class="right">运费：￥8</p>
    </div>
    <div class="num-btn">
      <num-box :numData="data.numData"></num-box>
    </div>
    <div class="panel">
      <div class="panel-title">商品介绍</div>
      <div class="content">
        此款帽子围巾套装为纯手工制作，羊毛材质，冬季保暖抵御低温。此款帽子围巾套装为纯手工制作，羊毛材质，冬季保暖抵御低温。此款帽子围巾套装为纯手工制作，羊毛材质，冬季保暖抵御低温。此款帽子围巾套装为纯手工制作，羊毛材质，冬季保暖抵御低温。此款帽子围巾套装为纯手工制作，羊毛材质，冬季保暖抵御低温。
        <img src="../../assets/images/img1.jpg"/>
      </div>
      <div class="panel-title">商品信息</div>
      <div class="content">
        <p>材质：98%羊毛</p>
        <p>帽子尺寸：17.5CM*22CM*1CM</p>
        <p>围巾尺寸：176CM*22CM*0.4CM</p>
      </div>
      <div class="panel-title">相关问题解答</div>
      <div class="content">
        <p>1.商品下单后将于48小时內发货，节假日顺延。发货后可到“我的-礼品订单”查看订单详情和物流信息</p>
        <p>2.云到家积分商城客服电话：123456789</p>
      </div>
    </div>
    <div class="bottom-btn-box">
      <div class="bottom-btn" v-on:click="goExchange">马上兑换</div>
    </div>
  </div>
</template>

<script>
  import numBox from '../common/numBox'
  import HeaderMenu from '../common/header'
  export default {
    components: {
      HeaderMenu: HeaderMenu,
      numBox: numBox
    },
    data: function () {
      return {
        headerData: {
          title: '积分'
        },
        sum: '',
        data: {
          'numData': {'val': ''}
        }
      }
    },
    created: function () {
      var url = '/static/data/Integral/Detail.json'
      var prams = {}
      var $this = this
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        $this.data = data.data
        $this.sum = data.sum
      })
    },
    methods: {
      goExchange: function () {
        this.$router.push({
          path: '/integral/exchange'
        })
      }
    }
  }
</script>
