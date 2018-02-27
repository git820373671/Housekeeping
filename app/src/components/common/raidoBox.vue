<template>
  <div class="check-box">
    <mt-checklist
      align="right"
      v-model="checkData.value"
      :options="checkData.checkList">
    </mt-checklist>
  </div>
</template>
<script>
  export default{
    name: 'select-box',
    data: function () {
      return {}
    },
    props: {
      checkData: {
        type: Object,
        checkList: []
      }
    }
  }
</script>
