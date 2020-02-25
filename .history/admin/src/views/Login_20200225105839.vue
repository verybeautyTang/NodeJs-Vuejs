<template>
<el-card style="width: 30rem;margin:10rem auto"  class="box-card">
    <div slot="header" class="clearfix">
   <span>请先登录</span>
  </div>
  <el-form @submit.native.prevent="login">
    <el-form-item label="用户名">
    <el-input placeholder="请输入用户名" v-model="model.account"></el-input>
  </el-form-item>
    <el-form-item label="密码">
    <el-input placeholder="请输入用密码" type="password" v-model="model.password"></el-input>
  </el-form-item>
  <el-button type="primary" native-type="submit">登录</el-button>
  </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async login () {
      const res = await this.$http.post('login', this.model)
      // sessionStorage是为了在下次页面打开的时候依然存在
      // sessionStorage 是为了关闭页面的时候清除信息
      sessionStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })
      console.log(this.model.account)
    }
  }
}

</script>
<style scoped>
</style>
