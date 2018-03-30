<template>
  <div class="h100 cleaning">
    <header-menu :headerData="headerData"></header-menu>
    <div class="banner">
      <img src="../../assets/images/cleaning/sm-banner.png">
    </div>
    <div class="panel">
      <ul class="list-top clear">
        <li>
          <router-link :to="{name: 'DetGlass', params: {id: 123}}">
            <img src="../../assets/images/cleaning/sm-1.png"/>
            日常保洁
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/sm-2.png"/>
            深度保洁
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'DetLand', params: {id: 123}}">
            <img src="../../assets/images/cleaning/sm-3.png"/>
            新房开荒
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'DetGlass', params: {id: 123}}">
            <img src="../../assets/images/cleaning/sm-4.png"/>
            擦玻璃
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/sm-5.png"/>
            清尘除螨
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/sm-6.png"/>
            空调清洗
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/sm-7.png"/>
            油烟机清洗
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'DetRefrig'}">
            <img src="../../assets/images/cleaning/sm-8.png"/>
            冰箱清洗
          </router-link>
        </li>
      </ul>
    </div>
    <div class="panel m-t-10">
      <div class="title border-no">家庭保洁</div>
      <ul class="list-tab clear">
        <li>
          <router-link :to="{name: 'DetGlass', params: {id: 123}}">
            <p>
              日常保洁</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <p>
              深度保洁</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'DetLand', params: {id: 123}}">
            <p>
              新房开荒</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'DetGlass', params: {id: 123}}">
            <p>
              擦玻璃</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="panel m-t-10">
      <div class="title border-no">家电清洗</div>
      <ul class="list-tab clear">
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <p> 清尘除螨</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <p> 空调清洗</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <p> 油烟机清洗</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'DetRefrig'}"><p>冰箱清洗</p></router-link>
        </li>
      </ul>
    </div>
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
          title: '保洁分类'
        }
      }
    }
  }
</script>
