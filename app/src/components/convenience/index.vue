<template>
  <div class="h100 convenience">
    <ul class="tab-list clear">
      <li>
        <router-link :to="{name: 'ConvenienceList', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon1.png"/>
          <p>家政服务</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceList', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon1.png"/>
          <p>人才市场</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceList', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon1.png"/>
          <p>二手市场</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceList', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon1.png"/>
          <p>婚庆摄影</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceList', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon1.png"/>
          <p>装修建材</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceList', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon1.png"/>
          <p>教育培训</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceList', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon1.png"/>
          <p>房产市场</p></router-link>
      </li>
      <li>
        <router-link :to="{name: 'ConvenienceList', params: {id: 11}}">
          <img src="../../assets/images/convenience-icon1.png"/>
          <p>家政黑名单</p></router-link>
      </li>
    </ul>
    <div class="tab-title">
      <p :class="type===1?'active':''" v-on:click="doList(1)">最新</p>
      <p :class="type===2?'active':''" v-on:click="doList(2)">最热</p>
      <router-link :to="{name: 'ConvenienceRelease1'}">
        <img src="../../assets/images/convenience-release.png" class="right"/>
      </router-link>
    </div>
    <ul class="list clear">
      <li v-for="(item,index) in listData" class="clear">
        <router-link :to="{name: 'ConvenienceDetail', params: {id: item.id}}">
          <div class="badge">{{item.badge}}</div>
          <div class="title">{{item.title}}<p class="time">{{item.time}}</p></div>
          <div class="price">
            {{item.price}}元/月<p class="address">{{item.address}}</p>
          </div>
          <div class="name">
            {{item.name}}
          </div>
          <div class="tel">
            <img src="../../assets/images/tel1.png"/>拨打电话
          </div>
        </router-link>
      </li>
    </ul>
    <footer-bar :footerData="footerData"></footer-bar>
  </div>
</template>
<script>
  import FooterBar from '../common/footer'
  export default{
    components: {
      FooterBar: FooterBar
    },
    data: function () {
      return {
        footerData: {
          selected: 'find'
        },
        type: 1,
        listData: {}
      }
    },
    created: function () {
      this.getList(1)
    },
    methods: {
      getList: function (type) {
        var url = '/static/data/Convenience/ConvenienceList.json'
        var prams = {
          type: type
        }
        var $this = this
        this.$ajax_get(url, prams, function (data) {
          if (!data.success) return
          $this.listData = data.listData
          if (type === 1) {
            $this.type = 1
          } else if (type === 2) {
            $this.type = 2
          }
        })
      },
      doList: function (type) {
        this.getList(type)
        console.log('type', type)
      }
    }
  }
</script>
