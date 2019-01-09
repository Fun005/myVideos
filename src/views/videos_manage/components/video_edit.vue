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
        <el-button @click="diyImg">自定义缩略图</el-button>

      </div>
      <div class="opt-btn">
        <el-button @click="cancelEdit">取消</el-button>
        <el-button @click="saveEdit">保存更改</el-button>
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
        height: 170px;
        line-height: 45px;
      }
      .opt-btn {
        // display: inline-block;
        float: right;
        height: 0px;
        line-height: 400px
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
