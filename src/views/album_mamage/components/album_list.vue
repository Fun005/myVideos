<template>
  <div class="album-list">
    <header v-if="isListPage">
      <el-form :inline="true" v-model="searchForm" size="small">
        <el-form-item label="">
          <el-input v-model="searchForm.albumName" placeholder="专辑名称"/>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.sort">
            <el-option label="默认排序" value=""/>
            <el-option label="专辑数量" value="1"/>
            <el-option label="发布时间" value="2"/>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="searchForm.albumType" placeholder="">
            <el-option label="全部列表" value=""/>
            <el-option label="专辑" value="1"/>
            <el-option label="剧集" value="2"/>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-date-picker
            v-model="searchForm.pubDate"
            type="daterange"
            range-separator="到"
            start-placeholder="发布时间"
            end-placeholder="发布时间"/>
        </el-form-item>
        <el-form-item style="float: right;">
          <el-button class="green-btn" icon="el-icon-search" @click="onSubmit">查找</el-button>
          <el-button @click="resetSubmit">清空查询项</el-button>
          <el-button type="primary" round @click="createNewAlbum">新建专辑</el-button>
        </el-form-item>
      </el-form>
    </header>
    <header v-else class="is-edit">
      <div class="cover">
        <img src="../../../assets/404_images/404.png" alt="">
      </div>
      <div class="video-info">
        <div>
          <el-input v-model="editObj.albumName" placeholder="" style="width: 300px;">
            <el-button slot="append" icon="el-icon-edit"/>
          </el-input>
        </div>
        <div>最后更新时间:</div>
        <div><span>视频ID：</span>121465415</div>
        <el-button @click="diyImg">自定义缩略图</el-button>

      </div>
      <div class="opt-btn">
        <el-button @click="createVideo">添加视频</el-button>
      </div>
    </header>
    <div class="content">
      <el-table :data="albumTableData" border>
        <el-table-column
          v-for="col in columns"
          :prop="col.prop"
          :key="col.id"
          :label="col.label"
          :width="col.width"
          :header-row-style="heaedrStyle" />
        <el-table-column prop="" label="操作" width="300">
          <template slot-scope="scope">
            <!-- <el-button type="text" @click="optVideo(scope.row)">管理</el-button>  | -->
            <el-button type="text" @click="editVideo(scope.row)">编辑</el-button>  |
            <!-- <el-button type="text" @click="spreadVideo(scope.row)">推广专辑</el-button>  | -->
            <el-button type="text" class="del-opt" @click="deleteVideo(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :total="totalSize"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isListPage: true,
      searchForm: {
        albumName: '',
        status: '',
        sort: '',
        albumType: '',
        pubDate: ''
      },
      editObj: {
        albumName: ''
      },
      albumTableData: [{
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
          width: '',
          prop: 'base_info'
        }, {
          id: 2,
          label: '时长',
          width: '',
          prop: 'duration'
        }, {
          id: 3,
          label: '分类',
          width: '',
          prop: 'status'
        }, {
          id: 4,
          label: '状态',
          width: '',
          prop: 'classification'
        }, {
          id: 5,
          label: '上传者',
          width: '',
          prop: 'upload_time'
        }, {
          id: 6,
          label: '上传时间',
          width: '',
          prop: 'pub_time'
        }, {
          id: 7,
          label: '分辨率',
          width: '',
          prop: ''
        }
        // {
        //   id: 7,
        //   label: '操作',
        //   width: '',
        //   prop: 'option'
        // }
      ],
      heaedrStyle: {
        'background-color': '#000'
      },

      currentPage: 1, // 当前页码
      pageSize: 10, // 每页条数
      totalSize: 0, // 总记录数
      pageSizes: [10, 15, 20, 30] // 每页可显示记录数
    }
  },
  mounted() {},
  methods: {
    onSubmit() {},
    resetSubmit() {
      this.searchForm = {
        albumName: '',
        status: '',
        sort: '',
        albumType: '',
        pubDate: ''
      }
      this.onSubmit()
    },

    createNewAlbum() {},

    createVideo() {},

    diyImg() {},

    /**
     * 编辑专辑
     */
    editVideo(row) {
      console.log(row)
      // this.$router.push({ path: 'edit_album' })
      this.isListPage = false
    },

    /**
     * 推广专辑
     */
    spreadVideo(row) {
      console.log(row)
      row.online = true
      if (row.online) {
        this.$alert('<p style="text-align:center;">链接复制成功</p>', '提示', {
          confirmButtonText: '确定',
          dangerouslyUseHTMLString: true,
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
        // this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', '提示', {
        //   dangerouslyUseHTMLString: true
        // });
      } else {
        // do
      }
    },

    /**
     *删除专辑  */
    deleteVideo(row) {
      console.log(row)
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

    /**
     * 切换每页条数
     */
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },

    /**
     * 切换当前页码
     */
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  }
}
</script>
<style lang="scss" scoped>
.album-list {
  padding: 20px;
    header {
      margin: 10px;
    }
    .is-edit {
        display: flex;
        justify-content: space-between;
        width: 80%;
        padding-left: 20%;
        margin-bottom: 20px;
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
          line-height: 42px;
        }
        .opt-btn {
          // display: inline-block;
          float: right;
          height: 0px;
          line-height: 320px;
        }
      }
    .del-opt {
      color:#f56c6c;
    }

}
</style>
<style>
  .album-list .el-date-editor .el-range-separator {
    width: 7%;
  }
</style>
