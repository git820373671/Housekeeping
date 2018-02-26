<template>
  <div class="num-box">
    <div class="icon reduce">-</div>

    <input type="number" v-model="numData.val" class="box">
    <div class="icon add">+</div>
  </div>
</template>
<script>
  export default {
    name: 'num-box',
    data: function () {
      return {}
    },
    props: {
      numData: {
        type: Object,
        maxVal: '',
        minVal: 0,
        val: ''
      }
    },
    mounted: function () {
    },
    methods: {}
  }
</script>
