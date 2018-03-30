<template>
  <div class="h100 integral-exchange">
    <header-menu :headerData="headerData"></header-menu>
    <div class="panel">
      <div class="choose-adress">
        <img src="../../assets/images/icon1.png" class="left"/>
        <div class="choose">请选择一个服务地址</div>
        <div class="detail"  style="display: none">
          <div class="name">姓名  1581341234</div>
          辽宁省沈阳市浑南区首页国际软件园F区 F8栋 A406 位置不够向下动
        </div>
        <img src="../../assets/images/icon-right.png" class="right"/>
      </div>

    </div>
    <div class="panel">
      <div class="detail">
        <div class="title">
          <img src="../../assets/images/icon2.png" class="icon"/>
          <p>订单详情</p>
        </div>
        <ul class="list">
          <li>兑换商品：<p>围巾帽子套装</p></li>
          <li>支付价格：<p>800积分+140.00元/套</p></li>
          <li>兑换数量：<p>10</p></li>
          <li>总价格：<p>8000积分+<span>1408.00</span>元(含邮费)</p></li>
        </ul>
      </div>
    </div>
    <div class="panel">
      <div class="detail">
        <div class="title">
          <img src="../../assets/images/icon3.png" class="icon"/>
          <p>支付方式</p>
        </div>
        <div class="pay-list">
          <div class="icon">
            <img src="../../assets/images/icon4.png" class="top"/>
            <img src="../../assets/images/icon5.png" class="bottom"/>
          </div>
          <mt-radio
            v-model="radioVal"
            align="right"
            :options="['余额支付', '微信支付']">
          </mt-radio>
        </div>
      </div>

    </div>
    <div class="panel">
      <div class="pay-way">
        <mt-field label="支付密码：" type="password" v-model="password"></mt-field>
      </div>

    </div>
    <div class="footer-btn">
      确认支付
    </div>
  </div>
</template>

<script>
  import HeaderMenu from '../common/header'
  export default {
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '积分兑换'
        },
        radioVal: '',
        sum: '',
        data: {},
        password: ''
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
