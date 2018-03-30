<template>
  <div class="header-box">
    <mt-header :title="headerData.title" fixed>
        <mt-button icon="back" v-on:click="$router.go(-1)" slot="left"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  export default{
    name: 'header-menu',
    data: function () {
      return {}
    },
    props: {
      headerData: {
        type: Object,
        title: ''
      }
    }
  }
</script>
