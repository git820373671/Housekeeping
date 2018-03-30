<template>
  <div class="up-loader">
    <ul>
      <li class="file-item show-img" v-for="item in filesData" :key="item.id">
        <img :src=item.src>
      </li>
      <li class="file-item add">
        <img src="../../assets/images/upLoad.png" class="add-btn"/>
        <input type="file" accept="image/*" ref="file" @change="fileChanged()" multiple="multiple">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {},
    data: function () {
      return {
        filesData: []
      }
    },
    methods: {
      add: function () {
      },
      fileChanged: function () {
        var $file = this.$refs.file.files
        for (let i = 0; i < $file.length; i++) {
          var item = {
            name: $file[i].name,
            src: $file[i].name,
            file: $file[i]
          }
          this.html5Reader($file[i], item)
          this.filesData.push(item)
        }
      },
      // 将图片文件转成BASE64格式
      html5Reader: function (file, item) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.$set(item, 'src', e.target.result)
        }
        reader.readAsDataURL(file)
      }
    }
  }
</script>
<style>

</style>
