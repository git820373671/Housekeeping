<template>
  <div class="h100 integral">
    <header-menu :headerData="headerData"></header-menu>
    <div class="header"><img src="../../assets/images/gold.png"/>{{sum}}积分</div>
    <ul class="list">
      <li v-for="(item,index) in listData" >
        <router-link :to="{name: 'IntegralDetail', params: {id: item.id}}">
          <img :src="item.photoSrc" class="photo"/>
          <h3 class="title">{{item.title}}</h3>
          <div class="price">
            <img src="../../assets/images/gold.png"/>{{item.gold}}+<span>{{item.price}}</span>元
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import HeaderMenu from '../common/header'
  export default {
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '积分'
        },
        sum: '',
        listData: []
      }
    },
    created: function () {
      var url = '/static/data/Integral/Integral.json'
      var prams = {}
      var $this = this
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        $this.listData = data.listData
        $this.sum = data.sum
      })
    }
  }
</script>
