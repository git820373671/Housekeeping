<template>
  <div class="h100 cleaning-sub">
    <div class="personal">
      <img src="../../assets/images/img2.jpg" class="photo"/>
      <div class="name">李阿姨<span>工号：12345678</span></div>
      <div class="price"><span>4800</span>元／月</div>
      <div class="address"><span>34岁</span> ｜ <span>辽宁人</span> ｜ <span>4年工作</span></div>
    </div>
    <div class="panel">
      <ul class="personal-aut clear">
        <li>
          <img src="../../assets/images/cleaning/icon1.png"/>身份证
        </li>
        <li>
          <img src="../../assets/images/cleaning/icon1.png"/>健康证
        </li>
        <li>
          <img src="../../assets/images/cleaning/icon1.png"/>催乳师证
        </li>
        <li>
          <img src="../../assets/images/cleaning/icon1.png"/>护理师证
        </li>
      </ul>
      <router-link :to="{name: 'DelNanny', params: {id: '111'}}">
        <div class="personal-btn">查看详细资料 <img src="../../assets/images/icon-right.png"/></div>
      </router-link>
    </div>
    <div class="panel">
      <div class="personal-detail">
        <div class="title">
          自我介绍
        </div>
        <div class="content">本人经验丰富，本人经验丰富，本人经验丰富，本人经验丰富，本人经验丰富，本人经验丰富，本人经验丰富。</div>
      </div>
    </div>
    <div class="panel">
      <div class="personal-detail">
        <div class="title">
          从业经历
        </div>
        <div class="content">李阿姨2010年起从事月嫂工作，带过52个宝宝，其中2对双胞胎，从事过育儿工作。</div>
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
        <div class="all-eval">查看全部评论</div>
      </div>
    </div>
    <div class="panel">
      <div class="icon-title">
        <img src="../../assets/images/cleaning/text1.png"/>
      </div>
      <div class="detail-box">
        <div class="title">
          服务流程
        </div>
        <ul class="three-list clear">
          <li><p><img src="../../assets/images/cleaning/pro-1.png"/>
            在线提交需求</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/pro-2.png"/>
            筛选合适保姆</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/pro-3.png"/>
            约定时间面试</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/pro-4.png"/>
            确定服务人选</p>
          </li>
          <li><p><img src="../../assets/images/cleaning/pro-5.png"/>
            跟踪服务质量</p>
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
    <div class="sub-btn">立即预约</div>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        msg: '保姆下单'
      }
    }
  }
</script>
