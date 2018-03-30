<template>
  <div class="select-box">
    <div class="select-title">
      {{selectData.curName}}
      <img src="../../assets/images/index/icon.png"/>
    </div>
    <ul class="list" id="selectBox" v-if="selectData.showSelect">
      <li v-for="(item,index) in selectData.list">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'select-box',
    data: function () {
      return {}
    },
    props: {
      selectData: {
        type: Object,
        curName: '',
        showSelect: false,
        list: []
      }
    },
    methods: {
      toggle: function (name) {
        this.selectData.curName = name
        this.selectData.showSelect = false
      }
    }
  }
</script>
