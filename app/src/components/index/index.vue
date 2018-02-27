<template>
  <div class="">
    {{name}}
    <router-link :to="{name: 'Integral'}"><span>积分商城</span></router-link>
    <br/>
    <router-link :to="{name: 'Convenience'}"><span>便民信息</span></router-link>
    <br/>
    <router-link :to="{name: 'Cleaning'}"><span>保洁</span></router-link>
    <footer-bar :footerData="footerData"></footer-bar>
  </div>
</template>
<script>
  import FooterBar from '../common/footer'
  export default{
    components: {
      FooterBar: FooterBar
    },
    data: function () {
      return {
        name: '123',
        footerData: {selected: 'index'}
      }
    }
  }
</script>
