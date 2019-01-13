<template>
  <div class="edit-user">
    <header>
      <span>用户管理 > userName</span>
      <el-button type="primary" round icon="el-icon-plus" @click="createAuth">新建权限</el-button>
    </header>
    <el-table :data="tableData" border >
      <el-table-column prop="id" label="权限ID" width=""/>
      <el-table-column prop="authType" label="权限类型" width="">
        <!-- <template slot-scope="scope"/> -->
      </el-table-column>
      <el-table-column prop="startTime" label="权限起始时间" width=""/>
      <el-table-column prop="endTime" label="权限起始时间" width=""/>
      <el-table-column prop="" label="管理" width="">
        <template slot-scope="scope">
          <el-button type="text" @click="editAuth(scope.row)">修改</el-button>  |
          <el-button type="text" class="del-opt" @click="deleteUser(scope.row)">删除</el-button>
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

    <el-dialog
      :visible.sync="authEditDialog"
      :title="dialogTitle"
      width="500px"
      @close="dialogClose">
      <el-select v-if="!isEdit" v-model="authObj.authType" placeholder="选择权限类型">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>

      <el-date-picker
        v-model="authObj.endDate"
        type="date"
        placeholder="权限结束时间"/>
      <span slot="footer">
        <el-button type="primary" @click="authEditDialog = false">确 定</el-button>
        <el-button @click="authEditDialog = false">取 消</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        id: 1,
        authType: 1,
        startTime: '2017-12-12 10:15:12',
        endTime: '2018-12-12 10:15:12'
      }],
      dialogTitle: '',
      authObj: {
        authType: '',
        endDate: ''
      },
      options: [{
        value: 1,
        label: '播放权限'
      }, {
        value: 2,
        label: '上传权限'
      }, {
        value: 3,
        label: '480视频上传权限'
      }, {
        value: 4,
        label: '推广权限'
      }],
      authEditDialog: false,
      isEdit: false,
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页条数
      totalSize: 0, // 总记录数
      pageSizes: [10, 15, 20, 30] // 每页可显示记录数
    }
  },
  methods: {

    /**
     * createAuth
     */
    createAuth() {
      this.isEdit = false
      this.dialogTitle = '新建权限'
      this.authEditDialog = true
    },

    editAuth() {
      this.isEdit = true
      this.dialogTitle = '权限编辑'
      this.authEditDialog = true
    },

    /**
     *删除  */
    deleteUser(row) {
      console.log(row)
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
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

    dialogClose() {},

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
  .edit-user {
    padding: 20px;
    header {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    .del-opt {
      color:#f56c6c;
    }
  }
</style>
