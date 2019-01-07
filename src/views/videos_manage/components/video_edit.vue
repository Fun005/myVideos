<template>
  <div class="video-edit">
    <header>
      <div class="cover">
        <img src="../../../assets/404_images/404.png" alt="">
      </div>
      <div class="video-info">
        <div><span>频道：</span>发送到发顺丰</div>
        <div><span>上传时间：</span>2018年十一月二号</div>
        <div><span>时长：</span>5:22</div>
        <div><span>视频ID：</span>121465415</div>
      </div>
    </header>
    <div class="line"></div>
    <div class="content">
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  .video-edit {
    padding: 25px;
    header {
      width: 80%;
      padding-left: 20%;
      .cover {
        display: inline-block;
        width: 300px;
        img {
          width: 300px;
        }
      }
      .video-info {
        display: inline-block;
      }
    }
    .line {
      height: 1px;
      margin: 20px 0;
      background-color: #dcdfe6;
    }
  }
</style>
