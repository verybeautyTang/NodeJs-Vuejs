<template>
  <div>
    <h1>管理员管理</h1>
     <el-table :data="items">
          <el-table-column prop="_id" label="ID" width="240">
        </el-table-column>
         <el-table-column prop="account" label="账号" ></el-table-column>
        <!-- <el-table-column prop="password" label="密码" ></el-table-column> -->
        <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
        <el-button type="text" size="small" @click="$router.push(`/admin_user/edit/${scope.row._id}`)">编辑</el-button>
        <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get('rest/admin_user')
      console.log(res.data)
      this.items = res.data
    },
    async remove (row) {
      this.$confirm(`是否删除账号为${row.account}的管理员?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.$http.delete(`rest/admin_user/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetch()
      })
    }
  },
  created () {
    this.fetch()
  }
}

</script>
<style scoped>
</style>
