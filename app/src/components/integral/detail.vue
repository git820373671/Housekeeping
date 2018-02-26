<template>
  <div class="h100 detail">
    <img :src="data.photoSrc" class="photo"/>
    <h3 class="title">{{data.title}}</h3>
    <div class="price">
      <img src="../../assets/images/gold.png"/>{{data.gold}}+{{data.price}}元
      <p class="right">运费：￥8</p>
    </div>
    <div>
      <num-box :numData="numData"></num-box>
    </div>
  </div>
</template>

<script>
  import numBox from '../common/numBox'

  export default {
    components: {
      numBox: numBox
    },
    data: function () {
      return {
        sum: '',
        data: {},
        numData: {
          maxVal: 100,
          minVal: 0,
          val: 1
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
    }
  }
</script>
