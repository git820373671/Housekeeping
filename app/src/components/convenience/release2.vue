<template>
  <div class="h100 convenience-release">
    <header-menu :headerData="headerData"></header-menu>
    <ul class="list">
      <li v-for="(item,index) in listData" class="clear">
        <router-link :to="{name: 'ConvenienceRelease3', params: {id: item.id}}">
          <p>{{item.title}}</p>
          <img src="../../assets/images/icon-right.png" class="right"/>
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
          title: '发布'
        },
        pageId: '',
        listData: []
      }
    },
    created: function () {
      console.log('this.$route.params', this.$route.params)
      this.pageId = this.$route.params.id
      this.getList(this.pageId)
    },
    methods: {
      getList: function (id) {
        var url = '/static/data/Convenience/release2.json'
        var prams = {
          id: id
        }
        var $this = this
        this.$ajax_get(url, prams, function (data) {
          if (!data.success) return
          $this.listData = data.listData
        })
      }
    }
  }
</script>
