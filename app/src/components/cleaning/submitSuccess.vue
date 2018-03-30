<template>
  <div class="h100 sub-static-box">
    <div class="sub-static">
      恭喜下单成功！
      <img src="../../assets/images/sunccess.png"/>
    </div>
    <div class="btn style1">
      查看订单
    </div>
    <router-link :to="{name: 'Index'}">
      <div class="btn style2">
        返回首页
      </div>
    </router-link>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        msg: '提交成功'
      }
    }
  }
</script>
