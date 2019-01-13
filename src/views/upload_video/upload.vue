<template>
  <div class="download-video">
    <header>
      <!-- <div class="cover">
        <img src="../../assets/404_images/404.png" alt="">
      </div> -->
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"/>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>
      <div class="video-info">
        <div>
          <el-progress :text-inside="true" :stroke-width="28" :percentage="100" status="success"/>
        </div>
        <div>您的视频仍在上传。在上传过程完成之前。请不要关闭此页。</div>
        <div><span>视频ID：</span>121465415</div>
        <el-button @click="diyImg">自定义缩略图</el-button>

      </div>
      <div class="opt-btn">
        <el-button @click="cancelEdit">取消</el-button>
        <el-button class="theme-red-btn" @click="saveEdit">发布</el-button>
      </div>
    </header>
    <div class="line"/>
    <div class="content">
      <el-form ref="form" :model="videoForm" style="width: 300px;margin-right: 40px;">
        <el-form-item label="">
          <el-input v-model="videoForm.videoOldName" placeholder="视频原名称"/>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="videoForm.videoNewName" placeholder="视频名称"/>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="videoForm.remark" type="textarea" placeholder=""/>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="videoForm.label" placeholder="标签(例如：爱因斯坦、飞天猪、混搭)"/>
        </el-form-item>
      </el-form>
      <el-form :model="videoForm" style="width: 200px;">
        <el-form-item label="">
          <div style="text-align: left;">类别</div>
          <el-select v-model="videoForm.type" placeholder="">
            <el-option v-for="i in 3" :key="i" :value="i"/>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="videoForm.videoName" placeholder="名称(建议填写)"/>
        </el-form-item>
        <el-form-item>
          <el-select v-model="videoForm.type" placeholder="添加到播放列表">
            <el-option v-for="i in 3" :key="i" :value="i"/>
          </el-select>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoForm: {
        videoOldName: '',
        videoNewName: ''
      }
    }
  },
  methods: {
    diyImg() {},

    onSubmit() {},

    cancelEdit() {},

    saveEdit() {}
  }
}
</script>
<style lang="scss" scoped>
  .download-video {
    padding: 25px;
    header {
      display: flex;
      justify-content: space-between;
      width: 80%;
      padding-left: 20%;
      .cover {
        display: inline-block;
        width: 300px;
        img {
          width: 300px;
        }
      }
      .upload-demo {
        width: 360px;
        display: inline-block;
      }
      .video-info {
        height: 170px;
        line-height: 52px;
      }
      .opt-btn {
        // display: inline-block;
        float: right;
        height: 0px;
        line-height: 320px;
      }
    }
    .line {
      height: 1px;
      margin: 20px 0;
      background-color: #dcdfe6;
    }
    .content {
      display: flex;
      justify-content: center;
      .el-form {
        display: inline-block;
      }
    }
  }
</style>
