<template>
  <el-form label-width='120px' @submit.native.prevent='save'>
    <h1>{{id?'编辑':'新建'}}分组</h1>
     <el-form-item label='文章分组'>
     <el-select v-model='model.categories' placeholder='请选择' multiple>
    <el-option
      v-for='item in categories'
      :key='item._id'
      :label='item.name'
      :value='item._id'>
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label='名称'>
    <el-input type='name' v-model ='model.title'></el-input>
  </el-form-item>
  <el-form-item label='详情'>
    <vue-editor useCustomImageHandler  @image-added='handleImageAdded' v-model='model.body'></vue-editor>
    <!-- <el-input type='name' v-model ='model.body'></el-input> -->
  </el-form-item>
  <el-form-item>
    <el-button type='primary' native-type='submit'>提交</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
  props: {
    id: {}
  },
  components: {
    VueEditor
  },
  data () {
    return {
      model: {},
      categories: []
    }
  },
  methods: {
    async save () {
      // let res;
      if (this.id) {
        await this.$http.put(`rest/articles/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    async fetchCategories () {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('file', file)
      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, 'image', res.data.url)
      resetUploader()
    }
  },
  created () {
    this.id && this.fetch()
    this.fetchCategories()
  }
}
</script>
