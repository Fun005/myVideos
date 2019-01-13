<template>
  <div class="channel">
    <div class="clearfix">
      <span>我的频道</span>
      <el-button round @click="()=>isEdit = !isEdit">编辑</el-button>
    </div>
    <div v-if="!isEdit">
      <el-form ref="form" :rules="rules" label-width="150px">
        <el-form-item label="频道名称：" prop="req">
          <span>频道名称</span>
        </el-form-item>
        <el-form-item label="邮箱：">
          <span>邮箱</span>
        </el-form-item>
        <el-form-item label="新浪微博地址：">
          <span>新浪微博地址</span>
        </el-form-item>
        <el-form-item label="性别：">
          <span>保密</span>
        </el-form-item>
        <el-form-item label="频道Banner：" prop="req">
          <img src="../../assets/404_images/404.png" alt="" style="height: 200px;">
        </el-form-item>
        <el-form-item label="频道头像：" prop="req">
          <img src="../../assets/404_images/404.png" alt="" style="height: 200px;">
        </el-form-item>
        <el-form-item label="频道简介：">
          <span>简介瞎写点,但是字数不够哈,只能凑合哈</span>
        </el-form-item>
      </el-form>

    </div>
    <div v-if="isEdit">
      <el-form ref="channelForm" :rules="rules" :model="channelForm" label-width="150px">
        <el-form-item porp="channelName" label="频道名称：">
          <el-input v-model="channelForm.channelName"/><span class="text-tip">频道名称只允许3-10个字符的汉字、字母、数字、下划线</span>
        </el-form-item>
        <el-form-item porp="" label="邮箱：">
          <el-input v-model="channelForm.email"/>
        </el-form-item>
        <el-form-item porp="weibo" label="新浪微博地址：">
          <el-input v-model="channelForm.weibo"/>
        </el-form-item>
        <el-form-item porp="" label="性别：">
          <el-radio-group v-model="channelForm.sex">
            <el-radio :label="0">保密</el-radio>
            <el-radio :label="1">男生</el-radio>
            <el-radio :label="2">女生</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item porp="banner" label="频道Banner：">
          <el-upload
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"/>
          </el-upload>
          <span>规定分辨率为1340x335；支持jpg、jpeg、png；
          大小不超过5M。</span>
        </el-form-item>
        <el-form-item porp="avatar" label="频道头像：">
          <el-upload
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"/>
          </el-upload>
          <span>规定分辨率为100x100；支持jpg、jpeg、png；
          大小不超过1M。</span>
        </el-form-item>
        <el-form-item porp="introduction" label="频道简介：">
          <el-input v-model="channelForm.introduction" type="textarea" /><span class="text-tip">最多500字</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="()=> isEdit=false">取消</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEdit: false,
      channelForm: {
        channelName: '',
        email: '',
        weibo: '',
        sex: 0,
        banner: '',
        avatar: '',
        introduction: ''
      },
      rules: {
        req: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
        channelName: [{ required: true, message: '请输入频道名称', trigger: 'blur' }],
        banner: [{ required: true }]
      },
      imageUrl: ''
    }
  },
  methods: {
    onSubmit() {},
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style lang="scss" scoped>
  .channel {
    padding: 20px;
    .clearfix {
      width: 100%;
      height: 55px;
      line-height: 55px;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
      background: #f9fafc;
      border-bottom: 1px solid #ededf1;
      margin-bottom: 15px;
        .el-button {
          float: right;
          margin-top: 6px;
        }
    }
    .el-form {
      .el-input {
        width: 300px;
      }
      .text-tip {
        margin-left: 10px;
        color: #aaacb8;
        font-size: 12px;
      }
    }
  }
</style>
<style>
  .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
</style>
