<template>
  <div class="youtube-download">
    <header>
      <el-form ref="form" :model="searchForm" :inline="true">
        <el-form-item label="">
          <el-input v-model="searchForm.linkAddress" placeholder="请输入链接地址" style="width: 300px;"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="theme-red-btn" @click="download">下载视频</el-button>
          <el-button type="primary" class="theme-red-btn" @click="config">设置</el-button>
        </el-form-item>
      </el-form>

    </header>
    <div class="content">
      <el-table :data="downloadTable" border>
        <el-table-column prop="" label="基本信息" width=""/>
        <el-table-column prop="" label="时长" width=""/>
        <el-table-column prop="" label="分类" width=""/>
        <el-table-column prop="status" label="状态" width=""/>
        <el-table-column prop="" label="上传者" width=""/>
        <el-table-column prop="" label="上传时间" width=""/>
        <el-table-column prop="" label="分辨率" width=""/>
        <el-table-column prop="" label="操作" width="">
          <template slot-scope="scope">
            <el-button type="text" @click="editOpt(scope.row)">编辑</el-button>
            <el-button type="text" class="red-text-btn" @click="deleteOpt(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>

    <!-- 设置弹窗 -->
    <el-dialog
      :visible.sync="configDialog"
      title="YOUTUBE下载设置"
      width="30%"
      @close="closeDialog">
      <div style="min-height: 300px">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="分辨率" name="resolution">
            <el-radio v-model="resolution" label="1">全部分辨率</el-radio>
            <el-radio v-model="resolution" label="2">最高分辨率</el-radio>
          </el-tab-pane>
          <el-tab-pane label="字幕" name="subtitle">
            <el-radio v-model="subtitle" label="1">全部字幕</el-radio>
            <el-radio v-model="subtitle" label="2">最高字幕</el-radio>
            <div style="margin: 20px 0;">
              <span>字幕语言</span>
              <el-select v-model="subtitleLanguage" placeholder="请选择">
                <el-option
                  v-for="item in 4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </div>

          </el-tab-pane>
          <el-tab-pane label="播放列表" name="playlist">
            <div class="mt10">列表开始:</div>
            <el-input-number v-model="playStart" :min="1" :max="10" controls-position="right" @change="handleChange"/>
            <div class="mt10">列表结束:</div>
            <el-input-number v-model="playEnd" :min="1" :max="10" controls-position="right" @change="handleChange"/>
            <div class="mt10">最大数量:</div>
            <el-input-number v-model="maxNunmber" :min="1" :max="10" controls-position="right" @change="handleChange"/>
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer">
        <el-button type="primary" @click="saveConfig">确 定</el-button>
        <el-button @click="configDialog = false">取 消</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      searchForm: {
        linkAddress: ''
      },
      downloadTable: [{
        status: '1'
      }],
      configDialog: false,
      activeName: 'resolution',
      resolution: '',
      subtitle: '',
      subtitleLanguage: '',
      playStart: '',
      playEnd: '',
      maxNunmber: ''
    }
  },
  methods: {
    download() {},
    config() {
      this.configDialog = true
    },
    editOpt(row) {},
    deleteOpt(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    saveConfig() {},
    closeDialog() {},
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
  .youtube-download {
    padding: 20px;
    .el-dialog {
      .el-tabs {
        .mt10 {
          margin: 10px 0;
        }
      }
    }
  }
</style>
<style>
  .youtube-download .el-dialog .el-dialog__footer {
    text-align: left;
  }
  .youtube-download .el-dialog .el-tabs__item.is-active {
    color: #000;
  }
  /* .youtube-download .el-dialog .el-tabs__item.is-focus {
    color: #bf0000;
  }
  .youtube-download .el-dialog .el-tabs__item.is-houver {
    color: #bf0000;
  } */
  .youtube-download .el-dialog .el-tabs__active-bar {
    background-color: #bf0000;
  }
</style>
