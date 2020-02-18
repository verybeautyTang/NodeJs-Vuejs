<template>
  <el-form label-width='120px' @submit.native.prevent='save'>
    <h1>{{id?'编辑':'新建'}}广告位</h1>
  <el-form-item label='名称'>
    <el-input type='name' v-model ='model.title'></el-input>
  </el-form-item>
  <el-form-item label="添加广告">
    <el-button type='text' size='small'  @click="model.items.push({})"><i class="el-icon-plus"></i> 添加技能</el-button>
        <el-row type="flex" class="row-bg" style="flex-wrap:wrap">
          <el-col :md="24"  v-for="(item, i) in model.items" :key="i">
            <el-form-item label="跳转路由（URL）">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL+'/upload'"
                :headers ="getAuth()"
                :show-file-list="false"
                :on-success="res => $set(item, 'image', res.url)">
                <img v-if="item.image" :src="item.image" class="avatar" >
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item >
              <el-button size='small' type="danger"  style="float: right;margin-bottom: 3rem;" @click="model.skills.splice(i, 1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
  </el-form-item>
  <el-form-item>
    <el-button type='primary' native-type='submit'>提交</el-button>
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
      model: {
        items: []
      },
      items: []
    }
  },
  methods: {
    async save () {
      // let res;
      if (this.id) {
        await this.$http.put(`rest/ads/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/ads', this.model)
      }
      this.$router.push('/ads/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = res.data
    },
    async fetchAds () {
      const res = await this.$http.get(`rest/ads`)
      this.categories = res.data
    }
  },
  created () {
    this.id && this.fetch()
    this.fetchAds()
  }
}
</script>
