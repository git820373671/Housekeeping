<template>
  <div class="h100 convenience">
    <header-menu :headerData="headerData"></header-menu>
    <div class="convenience-tab-box">
      <ul class="convenience-tab" id="selectBox">
        <li v-for="(item,index) in tabData" v-on:click="doList(item.id)" :id="item.id">
          <span>{{item.title}}</span>
        </li>
      </ul>
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
          title: '便民列表'
        },
        listData: [],
        tabData: [],
        sum: ''
      }
    },
    created: function () {
      this.getTab()
    },
    methods: {
      getTab: function () {
        var url = '/static/data/Convenience/release2.json'
        var prams = {}
        var $this = this
        this.$ajax_get(url, prams, function (data) {
          if (!data.success) return
          $this.tabData = data.listData
          $this.sum = data.listData.length
          $this.getList($this.tabData[0].id)
        })
      },
      getList: function (type) {
        var url = '/static/data/Convenience/ConvenienceList.json'
        var prams = {
          type: type
        }
        var $this = this
        this.$ajax_get(url, prams, function (data) {
          if (!data.success) return
          $this.listData = data.listData
          var $elC = document.getElementById('selectBox').getElementsByClassName('active')
          for (var i = 0; i < $elC.length; i++) {
            $elC[i].setAttribute('class', '')
          }
          var $el = document.getElementById(type)
          $el.setAttribute('class', 'active')
          console.log($this.sum)
          document.getElementById('selectBox').style.width = $this.sum * 70 + 'px'
        })
      },
      doList: function (type) {
        this.getList(type)
      }
    }
  }
</script>
