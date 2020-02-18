<template>
  <el-form label-width="120px" @submit.native.prevent="save">
    <h1>{{id?'编辑':'新建'}}装备</h1>
  <el-form-item label="名称">
    <el-input type="name" v-model ="model.name"></el-input>
  </el-form-item>
    <el-form-item label="图标">
<el-upload
  class="avatar-uploader"
  :action="$http.defaults.baseURL+'/upload'"
  :show-file-list="false"
  :headers ="getAuth()"
  :on-success="afterUpload">
  <img v-if="model.icon" :src="model.icon" class="avatar" >
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
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
    afterUpload (res) {
      this.$set(this.model, 'icon', res.url)
    },
    async save () {
      // let res;
      if (this.id) {
        await this.$http.put(`rest/items/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/items', this.model)
      }
      this.$router.push('/items/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/items/${this.id}`)
      this.model = res.data
    },
    async fetchParents () {
      const res = await this.$http.get(`rest/items`)
      this.parents = res.data
    }
  },
  created () {
    this.id && this.fetch()
    this.fetchParents()
  }
}
</script>
<style  scoped>

</style>
