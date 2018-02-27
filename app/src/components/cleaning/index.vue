<template>
  <div class="h100 cleaning">
    <div class="banner">
      <img src="../../assets/images/cleaning/banner.png">
    </div>
    <div class="panel">
      <ul class="list-top clear">
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/cleaning-1.png"/>
            保洁
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/cleaning-2.png"/>
            保姆
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/cleaning-3.png"/>
            开锁换锁
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/cleaning-4.png"/>
            货运搬家
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/cleaning-5.png"/>
            家电维修
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/cleaning-6.png"/>
            房屋维修
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'SmallClassification', params: {id: 123}}">
            <img src="../../assets/images/cleaning/cleaning-7.png"/>
            洗护
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'AllClassification'}">
            <img src="../../assets/images/cleaning/cleaning-8.png"/>
            全部服务
          </router-link>
        </li>
      </ul>
    </div>
    <div class="clear m-t-10">
      <div class="list-left">
        <div class="panel">
          <div class="title icon1">保洁</div>
          <div class="card">
            <img src="../../assets/images/cleaning/cleaning-type-1.png"/>
            <div class="text">
              灶台清理<span>去除重油烟</span>
            </div>
          </div>
          <div class="card">
            <img src="../../assets/images/cleaning/cleaning-type-2.png"/>
            <div class="text">
              沙发清理<span>清尘除螨</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list-right">
        <div class="panel">
          <div class="title icon2">便民</div>
          <div class="card">
            <img src="../../assets/images/cleaning/cleaning-type-3.png"/>
            <div class="text">
              快递代送<span>及时上门</span>
            </div>
          </div>
          <div class="card">
            <img src="../../assets/images/cleaning/cleaning-type-4.png"/>
            <div class="text">
              跑腿<span>去除重油烟</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clear m-t-10">
      <div class="list-left">
        <div class="panel">
          <div class="title icon3">维修</div>
          <div class="card">
            <img src="../../assets/images/cleaning/cleaning-type-5.png"/>
            <div class="text">
              手机维修<span>信誉保障</span>
            </div>
          </div>
          <div class="card">
            <img src="../../assets/images/cleaning/cleaning-type-6.png"/>
            <div class="text">
              电脑维修<span>价格透明</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list-right">
        <div class="panel">
          <div class="title icon4">洗护</div>
          <div class="card">
            <img src="../../assets/images/cleaning/cleaning-type-7.png"/>
            <div class="text">
              箱包洗护<span>上门取送</span>
            </div>
          </div>
          <div class="card">
            <img src="../../assets/images/cleaning/cleaning-type-8.png"/>
            <div class="text">
              鞋靴洗护<span>不伤材质</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="clear" style="height: 10px"></div>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        page: '保洁首页'
      }
    }
  }
</script>
