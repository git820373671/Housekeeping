<template>
  <div class="footer">
    <mt-tabbar v-model="footerData.selected" fixed>
      <mt-tab-item id="index">
        <div class="icon-f-1"></div>
      </mt-tab-item>
      <!--<mt-tab-item id="find">-->
      <!--<div class="icon-f-2"></div>-->
      <!--</mt-tab-item>-->
      <mt-tab-item id="recharge">
        <div class="icon-f-3"></div>
      </mt-tab-item>
      <mt-tab-item id="car">
        <div class="icon-f-4"></div>
      </mt-tab-item>
      <mt-tab-item id="user">
        <div class="icon-f-5"></div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    name: 'footer-bar',
    data: function () {
      return {}
    },
    props: {
      footerData: {
        selected: 'index'
      }
    },
    watch: {
      'footerData.selected': function (newData, oldData) {
        if (newData === 'index') {
          this.$router.push({
            path: '/'
          })
        } else if (newData === 'car') {
          this.$router.push({
            name: 'Car'
          })
        } else if (newData === 'recharge') {
          this.$router.push({
            name: 'Recharge'
          })
        } else if (newData === 'user') {
          this.$router.push({
            path: '/user/index'
          })
        }
      }
    }
  }
</script>
