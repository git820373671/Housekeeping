<template>
  <div class="header-box">
    <mt-header :title="headerData.title" fixed>
      <router-link to="/" slot="left" v-if="headerData.left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <div slot="left" v-if="headerData.photo">
        <img :src="headerData.photoSrc" class="photo"/>
      </div>
      <div slot="right" v-if="headerData.search">
        <img src="../../assets/images/search.png" class="right-icon"/>
      </div>
      <div slot="right" v-if="headerData.news">
        <img src="../../assets/images/new.png" class="right-icon"/>
      </div>
      <div slot="right" v-if="headerData.drop">
        <img src="../../assets/images/icon1.png" class="right-icon"/>
      </div>
      <div slot="right" v-if="headerData.upload ">
        上传附件
      </div>
      <div slot="right" v-if="headerData.link " >
        <router-link :to="headerData.linkPath" class="text-primary">{{headerData.linkName}}</router-link>
      </div>
      <mt-button icon="more" slot="right" v-if="headerData.right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  export default{
    name: 'header-menu',
    data: function () {
      return {}
    },
    props: {
      headerData: {
        type: Object,
        required: true,
        title: '',
        left: true,
        right: false,
        photo: false,
        news: false,
        search: false,
        drop: false,
        upload: false,
        link: false,
        linkPath: '/',
        linkName: ''
      }
    }
  }
</script>
