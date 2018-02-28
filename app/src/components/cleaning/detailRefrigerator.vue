<template>
  <div class="h100 cleaning-detail">
    <div class="banner">
      <img src="../../assets/images/cleaning/img1.jpg"/>
    </div>

    <div class="panel">
      <div class="price-box">
        <div class="tit">
          冰箱清洗
        </div>
        <div class="note">100元起 <img src="../../assets/images/cleaning/text4.png"/>
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
          <th width="50%">冰箱类型</th>
          <th width="50%">清洗价钱</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>单门冰箱</td>
          <td>100元／台</td>
        </tr>
        <tr>
          <td>双门冰箱</td>
          <td>100元／台</td>
        </tr>
        <tr>
          <td>三开门冰箱</td>
          <td>100元／台</td>
        </tr>
        <tr>
          <td>对开门冰箱</td>
          <td>200元／台</td>
        </tr>
        </tbody>
      </table>

      <div class="detail-box">
        <div class="title">
          服务范围
        </div>
        <div class="text-box"><p>1.关掉电源，清空物品</p>
          <p>2.外部及内部空间和储备的基本清洁工作</p>
          <p>3.不锈钢部分养护，杀菌消毒，除味</p>
          <p>4.物品归位，试机，清理现场</p></div>
      </div>
      <div class="detail-box">
        <div class="title">
          服务标准
        </div>
        <ul class="two-list clear">
          <li><p><img src="../../assets/images/cleaning/fw-1.png"/>
            冰箱无异味<br/>内部无霜无冰</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/fw-2.png"/>
            零部件及冰箱内<br/>外部清洁无菌</p>
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
        msg: '提交冰箱'
      }
    }
  }
</script>
