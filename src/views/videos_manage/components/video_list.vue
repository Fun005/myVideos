<template>
  <div class="video-list">
    <header>
      <el-form :inline="true" v-model="searchForm">
        <el-form-item label="">
          <el-input v-model="searchForm.videoName" placeholder="视频名称"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.status">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="下线" value="1"></el-option>
            <el-option label="在线" value="2"></el-option>
            <el-option label="待编辑" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.sort">
            <el-option label="默认排序" value=""></el-option>
            <el-option label="视频数量" value="1"></el-option>
            <el-option label="发布时间" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.videoType">
            <el-option label="全部类型" value=""></el-option>
            <el-option label="aaa" value="1"></el-option>
            <el-option label="zaaa" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-date-picker
            v-model="searchForm.pubDate"
            type="daterange"
            range-separator="到"
            start-placeholder="发布时间"
            end-placeholder="发布时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: right;">
          <el-button type="success" icon="el-icon-search" @click="onSubmit">查找</el-button>
          <el-button @click="resetSubmit">清空查询项</el-button>
        </el-form-item>
      </el-form>
    </header>

    <div class="content">
      <el-table :data="videoTableData" border>
        <el-table-column v-for="col in columns"
          :prop="col.prop"
          :key="col.id"
          :label="col.label"
          :width="col.width">
        </el-table-column>
        <el-table-column prop="" label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="editVideo(scope.row)">编辑</el-button>  |
            <el-button type="text" @click="spreadVideo(scope.row)">推广视频</el-button>  |
            <el-button type="text" @click="deleteVideo(scope.row)">删除</el-button> 
          </template>
        </el-table-column>
      </el-table>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchForm: {
        videoName: '',
        status: '',
        sort: '',
        videoType: '',
        pubDate: ''
      },
      videoTableData: [{
        base_info: '基本信息fsd',
        duration: '时长sdf',
        status: '状态sdf',
        classification: '分类sdf',
        upload_time: '上传时间sadf',
        pub_time: '发布时间asdf'
      }],
      columns: [
        {
          id: 1,
          label: '基本信息',
          width: '300',
          prop: 'base_info'
        },{
          id: 2,
          label: '时长',
          width: '',
          prop: 'duration'
        },{
          id: 3,
          label: '状态',
          width: '',
          prop: 'status'
        },{
          id: 4,
          label: '分类',
          width: '',
          prop: 'classification'
        },{
          id: 5,
          label: '上传时间',
          width: '',
          prop: 'upload_time'
        },{
          id: 6,
          label: '发布时间',
          width: '',
          prop: 'pub_time'
        }
        // {
        //   id: 7,
        //   label: '操作',
        //   width: '',
        //   prop: 'option'
        // }
      ]
    }
  },
  methods: {
    onSubmit() {},
    resetSubmit() {
      this.searchForm =  {
        videoName: '',
        status: '',
        sort: '',
        videoType: '',
        pubDate: ''
      }
      this.onSubmit()
    },

    /**
     * 编辑视频
     */
    editVideo(row) {
      console.log(row)
      this.$router.push({path:'edit_video'})
    },

    /**
     * 推广视频
     */
    spreadVideo(row) {
      console.log(row)
      row.online = true
      if(row.online){
        this.$alert('<p style="text-align:center;">链接复制成功</p>', '提示', {
          confirmButtonText: '确定',
          dangerouslyUseHTMLString: true,
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        })
        // this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', '提示', {
        //   dangerouslyUseHTMLString: true
        // });
      } else {

      }
    },
    /**
     *删除视频  */  
    deleteVideo(row) {
      console.log(row)
    }
  }
}
</script>
<style lang="scss" scoped>
.video-list {
  padding: 30px;
    header {
      margin: 10px;
    }
}
</style>
<style>
  .video-list .el-date-editor .el-range-separator {
    width: 7%;
  }
</style>