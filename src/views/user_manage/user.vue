<template>
  <div class="user-manage">
    <header>
      <el-form :inline="true" v-model="searchForm" size="small">
        <el-form-item label="">
          <el-input v-model="searchForm.account" placeholder="用户注册登录账号"/>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="searchForm.userId" placeholder="用户ID"/>
        </el-form-item><el-form-item label="">
          <el-input v-model="searchForm.nickName" placeholder="用户昵称"/>
        </el-form-item>
        <el-form-item style="float: right;">
          <el-button class="green-btn" icon="el-icon-search" @click="onSubmit">查找</el-button>
          <el-button @click="resetSubmit">清空查询项</el-button>
        </el-form-item>
      </el-form>
    </header>

    <div class="content">
      <el-table :data="userTableData" border>
        <el-table-column
          v-for="col in columns"
          :prop="col.prop"
          :key="col.id"
          :label="col.label"
          :width="col.width"
          :header-row-style="heaedrStyle" />
        <el-table-column prop="" label="操作" width="300">
          <template slot-scope="scope">
            <el-button type="text" @click="editVideo(scope.row)">编辑</el-button>
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
      searchForm: {
        account: '',
        userId: '',
        nickName: ''
      },
      userTableData: [{
        base_info: '基本信息fsd',
        account: '登录账号',
        email: '邮箱',
        phone: '手机号'
      }],
      columns: [
        {
          id: 1,
          label: '基本信息',
          width: '',
          prop: 'base_info'
        }, {
          id: 2,
          label: '登录账号',
          width: '',
          prop: 'account'
        }, {
          id: 3,
          label: '邮箱',
          width: '',
          prop: 'email'
        }, {
          id: 4,
          label: '手机号',
          width: '',
          prop: 'phone'
        }
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
        account: '',
        userId: '',
        nickName: ''
      }
      this.onSubmit()
    },

    /**
     * 编辑专辑
     */
    editVideo(row) {
      console.log(row)
      this.$router.push({ path: 'edit_user' })
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
.user-manage {
  padding: 20px;
    // header {
    //   margin: 10px;
    // }
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
  .user-manage .el-date-editor .el-range-separator {
    width: 7%;
  }
</style>
