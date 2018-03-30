<template>
  <div class="h100 cleaning-detail">
    <header-menu :headerData="headerData"></header-menu>
    <div class="banner">
      <img src="../../assets/images/cleaning/img1.jpg"/>
    </div>

    <div class="panel">
      <div class="price-box">
        <div class="tit">
          擦玻璃
        </div>
        <div class="note">13元/平米</div>
      </div>
    </div>

    <div class="panel">
      <div class="evaluate">
        <div class="title">
          用户评价
          <div class="right">
            <img src="../../assets/images/eval-1.png"/>
            <img src="../../assets/images/eval-1.png"/>
            <img src="../../assets/images/eval-1.png"/>
            <img src="../../assets/images/eval-0.png"/>
            <img src="../../assets/images/eval-0.png"/>
            4.0
          </div>
        </div>
        <ul class="eval-list">
          <li>
            <div class="name">
              金*力  <img src="../../assets/images/eval-1.png"/>
              <img src="../../assets/images/eval-1.png"/>
              <img src="../../assets/images/eval-1.png"/>
              <img src="../../assets/images/eval-0.png"/>
              <img src="../../assets/images/eval-0.png"/>
            </div>
            <div class="text">上门准时。提前联系，服务态度好</div>
            <div class="time">2017.12.30</div>
          </li>
          <li>
            <div class="name">
              金*力  <img src="../../assets/images/eval-1.png"/>
              <img src="../../assets/images/eval-1.png"/>
              <img src="../../assets/images/eval-1.png"/>
              <img src="../../assets/images/eval-0.png"/>
              <img src="../../assets/images/eval-0.png"/>
            </div>
            <div class="text">上门准时。提前联系，服务态度好</div>
            <div class="time">2017.12.30</div>
          </li>
          <li>
            <div class="name">
              金*力  <img src="../../assets/images/eval-1.png"/>
              <img src="../../assets/images/eval-1.png"/>
              <img src="../../assets/images/eval-1.png"/>
              <img src="../../assets/images/eval-0.png"/>
              <img src="../../assets/images/eval-0.png"/>
            </div>
            <div class="text">上门准时。提前联系，服务态度好</div>
            <div class="time">2017.12.30</div>
          </li>
        </ul>
        <router-link :to="{name: 'Evaluate'}">
          <div class="all-eval">查看全部评论</div>
        </router-link>
      </div>
    </div>
    <div class="panel">
      <div class="icon-title">
        <img src="../../assets/images/cleaning/text1.png"/>
      </div>
      <table border="0" cellpadding="0" cellspacing="0" class="table">
        <thead>
        <tr>
          <th width="50%">房屋面积</th>
          <th width="50%">参考时长</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>一居室(80㎡以下)</td>
          <td>2个半小时</td>
        </tr>
        <tr>
          <td>二居室(80-120㎡)</td>
          <td>3个小时</td>
        </tr>
        <tr>
          <td>三居室(120-140㎡)</td>
          <td>4个小时</td>
        </tr>
        <tr>
          <td>四居室以上(140㎡以上)</td>
          <td>5个小时</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="panel">
      <div class="icon-title">
        <img src="../../assets/images/cleaning/text2.png"/>
      </div>

      <div class="detail-box">
        <div class="title">
          服务范围
        </div>
        <div class="text-box"><p>1.玻璃边框、槽道无尘无水印</p>
          <p>2.玻璃内外表面无尘无水渍</p>
          <p>3.操作区域干净整洁</p>
          <p class="grey">温馨提示： <span> 服务不包含纱窗清洁，不包含玻璃表面大面积的除胶除漆，清洗师会提前与您沟通，了解玻璃的具体情况--密封情况、玻璃厚</span></p>
        </div>
      </div>
      <div class="detail-box">
        <div class="title">
          服务标准
        </div>
        <ul class="two-list clear">
          <li><p><img src="../../assets/images/cleaning/fw-1.png"/>
            多款创新玻璃器<br/>一面擦两面净</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/fw-2.png"/>
            专业清洁首发<br/>有效清洁边角</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/fw-3.png"/>
            专用清洗剂<br/>彻底清除玻璃污渍</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/fw-4.png"/>
            清洁工作台面<br/>贴心服务</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="panel">
      <div class="icon-title">
        <img src="../../assets/images/cleaning/text3.png"/>
      </div>
      <div class="detail-box border-no">
        <ul class="three-list clear big">
          <li><p><img src="../../assets/images/cleaning/six-1.png"/>
            人员保障</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/six-2.png"/>
            品质保障</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/six-3.png"/>
            隐私保障</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/six-4.png"/>
            健康保障</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/six-5.png"/>
            安全保障</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/six-6.png"/>
            售后保障</p>
          </li>
        </ul>
      </div>
    </div>
    <router-link :to="{name: 'AppClean'}">
      <div class="sub-btn">立即预约</div>
    </router-link>
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
          title: '详情玻璃'
        }
      }
    }
  }
</script>
