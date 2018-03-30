<template>
  <div class="h100 cleaning-all">
    <header-menu :headerData="headerData"></header-menu>
    <ul class="tab-bar" id="selectBox">
      <li v-for="(item,index) in tabData" v-on:click="doList(item.id)" :id="item.id">
        <span>{{item.title}}</span>
      </li>
    </ul>
    <div class="tab-con">
      <div class="tab-box clear">
        <ul class="list clear">
          <li>
            <img src="../../assets/images/img1.jpg"/>
            <p>擦玻璃</p>
          </li>
          <li>
            <img src="../../assets/images/img1.jpg"/>
            <p>擦玻璃</p>
          </li>
          <li>
            <img src="../../assets/images/img1.jpg"/>
            <p>擦玻璃</p>
          </li>
        </ul>
      </div>
      <div class="clear" v-for="(item,index) in listData">
        <div class="title">{{item.title}}</div>
        <ul class="list clear">
          <li v-for="(items,index) in item.list">
            <router-link :to="{name: 'Sort'}">
              <img :src="items.src"/>
              {{items.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
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
          title: '全部分类'
        },
        listData: [],
        tabData: []
      }
    },
    created: function () {
      this.getTab()
    },
    methods: {
      getTab: function () {
        var url = '/static/data/cleaning/allClassTab.json'
        var prams = {}
        var $this = this
        this.$ajax_get(url, prams, function (data) {
          if (!data.success) return
          $this.tabData = data.listData
          $this.getList($this.tabData[0].id)
        })
      },
      getList: function (type) {
        var url = '/static/data/cleaning/ClassList.json'
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
        })
      },
      doList: function (type) {
        this.getList(type)
      }
    }
  }
</script>
