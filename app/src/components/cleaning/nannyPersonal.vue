<template>
  <div class="h100 cleaning-personal">
    <header-menu :headerData="headerData"></header-menu>
    <div class="nav">
      <img src="../../assets/images/icon-left.png" class="left" v-on:click="$router.go(-1)"/>
      李阿姨的详细资料
    </div>
    <div class="panel">
      <div class="title">
        基本信息
      </div>
      <ul class="base-list clear">
        <li>姓名：<span>宋阿姨</span></li>
        <li>年龄：<span>34岁</span></li>
        <li>性别：<span>女</span></li>
        <li>民族：<span>汉族</span></li>
        <li>身高：<span>162cm</span></li>
        <li>体重：<span>60KG</span></li>
        <li>籍贯：<span>辽宁</span></li>
        <li>属相：<span>牛</span></li>
        <li class="clear">星座：<span>射手座</span></li>
        <li class="clear">出生日期：<span>1984-05-05</span></li>
        <li class="clear">婚育：<span>已婚已育</span></li>
      </ul>
    </div>
    <div class="panel">
      <div class="title">
        教育程度
      </div>
      <ul class="row-list clear">
        <li>最高学历：<span>大学</span></li>
      </ul>
    </div>
    <div class="panel">
      <div class="title">
        居住地址
      </div>
      <ul class="row-list clear">
        <li>现住址：<p class="right">沈阳市铁西区北二西路26号 瑞盛家园</p></li>
      </ul>
    </div>
    <div class="panel">
      <div class="title">
        家庭成员
      </div>
      <ul class="row-list clear">
        <li>儿子：<p class="right">王博文<br/>18岁<br/>15812341234</p></li>
      </ul>
    </div>
    <div class="panel">
      <div class="title">
        服务信息
      </div>
      <ul class="row-list clear">
        <li>服务年限：<span>4年</span></li>
        <li>可服务城市：<span>沈阳</span></li>
      </ul>
    </div>
    <div class="panel">
      <div class="title">
        证件信息
      </div>
      <ul class="row-list clear">
        <li>身份证：<span><img src="../../assets/images/cleaning/icon1.png"/>已认证</span></li>
        <li>健康证：<span><img src="../../assets/images/cleaning/icon1.png"/>已认证</span></li>
        <li>护理师证：<span><img src="../../assets/images/cleaning/icon1.png"/>已认证</span></li>
        <li>催乳师证：<span><img src="../../assets/images/cleaning/icon1.png"/>已认证</span></li>
      </ul>
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
          title: '保姆'
        }
      }
    },
    methods: {}
  }
</script>
