<template>
  <div class="h100 cleaning-detail">
    <div class="banner">
      <img src="../../assets/images/cleaning/img1.jpg"/>
    </div>

    <div class="panel">
      <div class="price-box">
        <div class="tit">
          房屋开荒
        </div>
        <div class="note">540元起 <img src="../../assets/images/cleaning/text4.png"/>
          <span class="right">去充值 ></span>
        </div>
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
          <th width="50%">房屋类型</th>
          <th width="50%">价钱</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>一居室</td>
          <td>504元</td>
        </tr>
        <tr>
          <td>二居室一卫</td>
          <td>720元</td>
        </tr>
        <tr>
          <td>二居室二卫</td>
          <td>880元</td>
        </tr>
        <tr>
          <td>三居室一卫</td>
          <td>960元</td>
        </tr>
        <tr>
          <td>三居室二卫</td>
          <td>1080元</td>
        </tr>
        <tr>
          <td>四居室及以上</td>
          <td>7.2元／建筑平米</td>
        </tr>
        </tbody>
      </table>

      <div class="detail-box">
        <div class="title">
          服务范围
        </div>
        <div class="text-box"><p>1.擦拭玻璃</p>
          <p>2.全面牵尘</p>
          <p>3.表面养护</p>
          <p>4.清洗地面</p>
          <p>5.厨厕除污消毒</p>
          <p>6.装修痕迹清理</p>
          <p>7.打蜡</p>
        </div>
      </div>
      <div class="detail-box">
        <div class="title">
          服务标准
        </div>
        <ul class="two-list clear">
          <li><p><img src="../../assets/images/cleaning/fw-1.png"/>
            玻璃目视无水痕、无手印、<br/>无污渍、光亮洁净</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/fw-2.png"/>
            木地板无胶渍、洁净</p>
          </li>
          <li class="clear"><p><img src="../../assets/images/cleaning/fw-3.png"/>
          墙砖和地砖无尘土、<br/>无漆点、无污渍</p>
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
    <router-link :to="{name: 'SubSuccess'}">
      <div class="sub-btn">立即预约</div>
    </router-link>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        msg: '详情开荒'
      }
    }
  }
</script>
