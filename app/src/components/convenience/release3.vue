<template>
  <div class="h100 convenience-release">
    <header-menu :headerData="headerData"></header-menu>
    <div class="panel">
      <uploader></uploader>
    </div>
    <div class="panel">
      <div class="field-box">
        <P><span>*</span> 标题</P>
        <input v-model="subData.title" class="field" placeholder="请输入标题"/>
      </div>

      <div class="field-box">
        <P><span>*</span> 联系人</P>
        <input v-model="subData.name" class="field" placeholder="请输入联系人姓名"/>
      </div>
      <div class="field-box">
        <P><span>*</span> 联系方式</P>
        <input v-model="subData.tel" class="field" placeholder="请输入联系方式"/>
      </div>
      <div class="field-box">
        <P> 服务区域</P>
        <select class="field" v-model="subData.address" style="width: auto" placeholder="请输入联系方式">
          <option value="auto">请选择</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div class="field-box big">
        <P><span>*</span> 详细介绍</P>
        <textarea v-model="subData.detail" class="field-area" placeholder="请输入详细介绍">{{subData.detail}}</textarea>

      </div>
    </div>

    <div class="sub-btn">确认发布</div>
  </div>
</template>
<script>
  import Uploader from '../common/uploader'
  import HeaderMenu from '../common/header'
  export default{
    components: {
      HeaderMenu: HeaderMenu,
      Uploader: Uploader
    },
    data: function () {
      return {
        headerData: {
          title: '发布'
        },
        subData: {
          title: '',
          name: '',
          tel: '',
          address: 'auto',
          detail: ''
        }
      }
    }
  }
</script>
