<template>
  <div class="h100 cleaning-sort">
    <ul class="tab-bar">
      <li :class="isSort?'active':''" v-on:click="isSort=true">{{sortName}}
        <img src="../../assets/images/cleaning/st-icon1.png" class="show"/>
        <img src="../../assets/images/cleaning/st-icon2.png" class="hidden"/>
      </li>
      <li v-on:click="isChoose=true"><img src="../../assets/images/cleaning/st-icon3.png" class="sort-icon"/>筛选
      </li>
    </ul>
    <div class="sort-box" v-if="isSort">
      <P :class="sortType==1?'active':''" v-on:click="doSort(1,'综合排序')">综合排序</P>
      <P :class="sortType==2?'active':''" v-on:click="doSort(2,'评价最好')">评价最好</P>
      <P :class="sortType==3?'active':''" v-on:click="doSort(3,'价格由低到高')">价格由低到高</P>
      <P :class="sortType==4?'active':''" v-on:click="doSort(4,'价格由高到低')">价格由高到低</P>
    </div>
    <div class="choose-box" v-show="isChoose">
      <div class="title">服务类别</div>
      <ul class="list">
        <li v-on:click="doChoose('12')" id="12"><p>地锁</p></li>
        <li v-on:click="doChoose('45')" id="45"><p>保险柜</p></li>
        <li v-on:click="doChoose('44')" id="44"><p>汽车锁</p></li>
        <li v-on:click="doChoose('66')" id="66"><p>门窗锁</p></li>
      </ul>
      <div class="bottom-btn" v-on:click="sureChoose()">确认</div>
    </div>

    <div class="model" v-if="isSort" v-on:click="doHidden()">
    </div>
    <div class="model" v-if="isChoose" style="z-index: 7" v-on:click="doHidden()">
    </div>
    <ul class="tab-con clear">
      <li>
        <router-link :to="{name: 'SubNanny', params: {id: '7788'}}">
          <img src="../../assets/images/img2.jpg" class="photo"/>
          <div class="title">刘阿姨 金牌保姆 经验丰富</div>
          <div class="badge"><p class="eval"><img src="../../assets/images/eval-1.png"/><img
            src="../../assets/images/eval-1.png"/><img src="../../assets/images/eval-1.png"/><img
            src="../../assets/images/eval-1.png"/><img src="../../assets/images/eval-0.png"/>4.0</p><span>已售43</span>
          </div>
          <div class="price">¥1800元 <span>订金</span></div>
          <div class="address"><img src="../../assets/images/cleaning/st-icon4.png"/>沈阳美宜佳家政服务中心</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'SubNanny', params: {id: '2314'}}">
          <img src="../../assets/images/img2.jpg" class="photo"/>
          <div class="title">刘阿姨 金牌保姆 经验丰富</div>
          <div class="badge"><p class="eval"><img src="../../assets/images/eval-1.png"/><img
            src="../../assets/images/eval-1.png"/><img src="../../assets/images/eval-1.png"/><img
            src="../../assets/images/eval-1.png"/><img src="../../assets/images/eval-0.png"/>4.0</p><span>已售43</span>
          </div>
          <div class="price">¥1800元 <span>订金</span></div>
          <div class="address"><img src="../../assets/images/cleaning/st-icon4.png"/>沈阳美宜佳家政服务中心</div>
        </router-link>
      </li>

    </ul>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        msg: '保姆',
        isChoose: false,
        isSort: false,
        sortName: '综合排序',
        sortType: 1
      }
    },
    methods: {
      doSort: function (val, name) {
        this.sortType = val
        this.sortName = name
        this.isSort = false
      },
      doHidden: function () {
        this.isSort = false
        this.isChoose = false
      },
      sureChoose: function () {
        this.isChoose = false
      },
      doChoose: function (id) {
        var $el = document.getElementById(id)
        if ($el.className === 'active') {
          $el.setAttribute('class', '')
        } else {
          $el.setAttribute('class', 'active')
        }
      }
    }
  }
</script>
