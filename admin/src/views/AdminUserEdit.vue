<template>
  <el-form label-width="120px" @submit.native.prevent="save">
    <h1>{{id?'编辑':'新建'}}管理员</h1>
  <el-form-item label="账号">
    <el-input type="name" v-model ="model.account"></el-input>
  </el-form-item>
   <el-form-item label="密码">
    <el-input type="password" v-model ="model.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">提交</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async save () {
      // let res;
      if (this.id) {
        await this.$http.put(`rest/admin_user/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/admin_user', this.model)
      }
      this.$router.push('/admin_user/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/admin_user/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.id && this.fetch()
  }
}
</script>
