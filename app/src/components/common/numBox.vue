<template>
  <div class="num-box">
    {{numData.maxVal}}
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
