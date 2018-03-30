<template>
  <div class="h100 convenience">
    <header-menu :headerData="headerData"></header-menu>
    <ul class="tab-list clear border-no">
      <li>
        <router-link :to="{name: 'ConvenienceRelease2', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon1.png"/>
          <p>家政服务</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceRelease2', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon2.png"/>
          <p>人才市场</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceRelease2', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon3.png"/>
          <p>二手市场</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceRelease2', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon4.png"/>
          <p>婚庆摄影</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceRelease2', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon5.png"/>
          <p>装修建材</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceRelease2', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon6.png"/>
          <p>教育培训</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceRelease2', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon7.png"/>
          <p>房产市场</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceRelease2', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon8.png"/>
          <p>家政黑名单</p></router-link>
      </li>
    </ul>

  </div>
</template>
<script>
  import HeaderMenu from '../common/header'
  export default{
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '发布'
        }
      }
    }
  }
</script>
