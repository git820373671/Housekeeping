<template>
  <div class="h100 index">
    <div class="banner">
      <div class="swipe-banenr">
        <mt-swipe :auto="5000">
          <mt-swipe-item><img src="../../assets/images/index/banner.png" class="photo"/>
          </mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/index/banner.png" class="photo"/></mt-swipe-item>
        </mt-swipe>
      </div>
      <!--<select-box :selectData="selectData"></select-box>-->
      <div class="search">
        <img src="../../assets/images/index/search.png"/>
        <input type="text" class="filed"/>
      </div>
      <div class="msg"><img src="../../assets/images/index/msg.png"/></div>
    </div>
    <div class="swiper-box">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <ul class="list clear">
            <li>
              <router-link :to="{name: 'Cleaning', params: {id: 123}}">
                <img src="../../assets/images/index/icon-1.png"/>
                家政服务
              </router-link>
            </li>
            <li>
              <img src="../../assets/images/index/icon-2.png"/>
              云外卖
            </li>
            <li>
              <router-link :to="{name: 'Integral', params: {id: 123}}">
                <img src="../../assets/images/index/icon-3.png"/>
                积分商城
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'Convenience', params: {id: 123}}">
                <img src="../../assets/images/index/icon-4.png"/>
                便民信息
              </router-link>
            </li>
            <li>
              <img src="../../assets/images/index/icon-5.png"/>
              云超市
            </li>
            <li>

              <img src="../../assets/images/index/icon-6.png"/>
              积分夺宝

            </li>
            <li>
              <img src="../../assets/images/index/icon-7.png"/>
              云商家
            </li>
            <li>
              <img src="../../assets/images/index/icon-8.png"/>
              大转盘
            </li>
          </ul>
        </mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>

      </mt-swipe>
    </div>
    <ul class="grid clear">
      <li>
        <router-link :to="{name: 'SmallClassification', params: {id:111}}">
          <div class="title">
            保洁套餐<span>最贴心的套餐</span>
          </div>
          <img src="../../assets/images/index/img1.png" class="img1"/>
          <img src="../../assets/images/index/img1-1.png" class="img2"/>
        </router-link>
      </li>
      <li>
        <div class="title">
          折扣美食<span>最贴心的套餐</span>
        </div>
        <img src="../../assets/images/index/img2.png" class="img1"/>
        <img src="../../assets/images/index/img2-1.png" class="img2"/>
      </li>
      <li>
        <div class="title">
          保洁套餐<span>最贴心的套餐</span>
        </div>
        <img src="../../assets/images/index/img3.png" class="img1"/>
        <img src="../../assets/images/index/img3-1.png" class="img2"/>
      </li>
      <li>
        <div class="title">
          保洁套餐<span>最贴心的套餐</span>
        </div>
        <img src="../../assets/images/index/img4.png" class="img1"/>
        <img src="../../assets/images/index/img4-1.png" class="img2"/>
      </li>

    </ul>
    <div class="panel">
      <div class="panel-title">便民信息
        <div class="right"><img src="../../assets/images/index/change.png"/>换一换</div>
      </div>
      <ul class="list clear">
        <li v-for="(item,index) in listData" class="clear">
          <router-link :to="{name: 'ConvenienceDetail', params: {id: item.id}}">
            <div class="badge">{{item.badge}}</div>
            <div class="title">{{item.title}}<p class="time">{{item.time}}</p></div>
            <div class="price">
              {{item.price}}元/月<p class="address-s">{{item.address}}</p>
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
    <footer-bar :footerData="footerData"></footer-bar>
  </div>
</template>
<script>
  import FooterBar from '../common/footer'
  import HeaderMenu from '../common/header'
  import SelectBox from '../common/select'

  export default {
    components: {
      HeaderMenu: HeaderMenu,
      FooterBar: FooterBar,
      SelectBox: SelectBox
    },
    data: function () {
      return {
        headerData: {
          title: '首页'
        },
        name: '123',
        footerData: {selected: 'index'},
        selectData: {curName: '', list: [{'title': '沈阳', 'id': '1'}, {'title': '大连', 'id': '2'}]},
        listData: []
      }
    },
    created: function () {
      this.getList()
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
        })
      }
    }
  }
</script>
