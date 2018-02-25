<template>
  <div class="">
    {{name}}
    <router-link :to="{name: 'Integral'}"><span>积分商城</span></router-link>

  </div>
</template>
<script>
  export default{
    data: function () {
      return {name: '123'}
    }
  }
</script>
