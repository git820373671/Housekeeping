<template>
  <div class="num-box">
    <div class="icon reduce" v-if="isReduce" v-on:click="reduce">
      <img src="../../assets/images/reduce-1.png"/>
    </div>
    <div class="icon reduce" v-if="!isReduce">
      <img src="../../assets/images/reduce-0.png"/>
    </div>
    <input type="number" v-model="numData.val" class="box">
    <div class="icon add" v-if="isAdd" v-on:click="add">
      <img src="../../assets/images/add-1.png"/>
    </div>
    <div class="icon add" v-if="!isAdd">
      <img src="../../assets/images/add-0.png"/>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  export default {
    name: 'num-box',
    data: function () {
      return {
        isAdd: true,
        isReduce: false
      }
    },
    props: {
      numData: {
        type: Object,
        maxVal: '',
        minVal: 0,
        val: ''
      }
    },
    methods: {
      add: function () {
        this.numData.val = this.numData.val + 1
        this.isReduce = true
        if (this.numData.val >= this.numData.maxVal) {
          Toast({
            message: '最多' + this.numData.maxVal,
            duration: 1000
          })
          this.isAdd = false
          this.numData.val = this.numData.maxVal
        } else {
          this.isAdd = true
        }
      },
      reduce: function () {
        this.numData.val = this.numData.val - 1
        this.isAdd = true
        if (this.numData.val <= this.numData.minVal) {
          Toast({
            message: '最少' + this.numData.minVal,
            duration: 1000
          })
          this.isReduce = false
          this.numData.val = this.numData.minVal
        } else {
          this.isReduce = true
        }
      }
    }
  }
</script>
