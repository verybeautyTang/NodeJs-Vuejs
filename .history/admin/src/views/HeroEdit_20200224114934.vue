<template>
  <el-form label-width="120px" @submit.native.prevent="save">
    <h1>{{id?'编辑':'新建'}}英雄</h1>
    <el-tabs type='border-card' value='basic'>
      <el-tab-pane label='普通配置' name='basic'>
        <el-form-item label="名称">
          <el-input type="name" v-model ="model.name"></el-input>
        </el-form-item>
        <el-form-item label="称号">
          <el-input type="name" v-model ="model.title"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL+'/upload'"
            :headers ="getAuth()"
            :show-file-list="false"
            :on-success="res => $set(model, 'avatar',res.url)">
            <img v-if="model.avatar" :src="model.avatar" class="avatar" >
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
           <el-form-item label="背景">
          <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL+'/upload'"
            :headers ="getAuth()"
            :show-file-list="false"
            :on-success="res => $set(model, 'banner',res.url)">
            <img v-if="model.banner" :src="model.banner" class="avatar" >
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="model.categories" multiple  placeholder="请选择">
            <el-option
              v-for="item of categories"
              :key="item._id"
              :label="item.name"
              :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="难度">
          <el-rate style="margin-top:0.6rem" :max="9" show-score type="name" v-model ="model.scores.difficult"></el-rate>
        </el-form-item>
        <el-form-item  label="技能">
          <el-rate style="margin-top:0.6rem"  :max="9" show-score type="name" v-model ="model.scores.skills"></el-rate>
        </el-form-item>
        <el-form-item label="攻击">
          <el-rate style="margin-top:0.6rem"  :max="9" show-score type="name" v-model ="model.scores.attack"></el-rate>
        </el-form-item>
        <el-form-item label="生存">
          <el-rate  style="margin-top:0.6rem" :max="9" show-score v-model ="model.scores.survive"></el-rate>
        </el-form-item>
        <el-form-item label="顺风出装">
          <el-select v-model="model.items1" multiple  placeholder="请选择">
            <el-option
              v-for="item of items"
              :key="item._id"
              :label="item.name"
              :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="逆风出装">
          <el-select v-model="model.items2" multiple  placeholder="请选择">
            <el-option
              v-for="item of items"
              :key="item._id"
              :label="item.name"
              :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="使用技巧">
          <el-input  type="textarea"  v-model ="model.usageTips"></el-input>
        </el-form-item>
        <el-form-item label="对抗技巧">
          <el-input type="textarea"  v-model ="model.battleTips"></el-input>
        </el-form-item>
        <el-form-item label="团战技巧">
          <el-input type="textarea" v-model ="model.teamTips"></el-input>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label='技能' name='addSkill'>
        <el-button type='text' size='small'  @click="model.skills.push({})"><i class="el-icon-plus"></i> 添加技能</el-button>
        <el-row type="flex" class="row-bg" style="flex-wrap:wrap">
          <el-col :md="12"  v-for="(item, i) in model.skills" :key="i">
            <el-form-item label="名称">
              <el-input v-model="item.title"></el-input>
            </el-form-item>
            <el-form-item label="图标">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL+'/upload'"
                :headers="getAuth()"
                :show-file-list="false"
                :on-success="res => $set(item, 'icon', res.url)">
                <img v-if="item.icon" :src="item.icon" class="avatar" >
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
              <el-form-item label="冷却值">
              <el-input v-model="item.delay"></el-input>
            </el-form-item>
              <el-form-item label="消耗">
              <el-input v-model="item.cost"></el-input>
            </el-form-item>
            <el-form-item label="描述">
              <el-input type="textarea" v-model="item.description"></el-input>
            </el-form-item>
            <el-form-item label="小提示">
              <el-input type="textarea" v-model="item.tips"></el-input>
            </el-form-item>
            <el-form-item >
              <el-button size='small' type="danger"  @click="model.skills.splice(i, 1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label='英雄关系' >
        <el-tabs type='border-card' value='addPatner'>
          <el-tab-pane label='最佳搭档' name='addPatner'>
            <el-button type='text' size='small'  @click="model.heroes.push({})"><i class="el-icon-plus"></i> 添加技能</el-button>
            <el-row type="flex" class="row-bg" style="flex-wrap:wrap">
            <el-col :md="12"  v-for="(item, i) in model.partners" :key="i">
              <el-form-item label="名称">
                <el-select v-model="item.hero" filters  placeholder="请选择">
                  <el-option
                    v-for="item of heroes"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item >
                <el-button size='small' type="danger"  @click="model.partners.splice(i, 1)">删除</el-button>
              </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label='被谁克制' name='addenemy'>
            <el-button type='text' size='small'  @click="model.enemy.push({})"><i class="el-icon-plus"></i> 添加技能</el-button>
            <el-row type="flex" class="row-bg" style="flex-wrap:wrap">
            <el-col :md="12"  v-for="(item, i) in model.enemy" :key="i">
              <el-form-item label="名称">
                <el-select v-model="item.hero" filters  placeholder="请选择">
                  <el-option
                    v-for="item of heroes"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item >
                <el-button size='small' type="danger"  @click="model.enemy.splice(i, 1)">删除</el-button>
              </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label='克制谁' name='adddepacth'>
            <el-button type='text' size='small'  @click="model.depacth.push({})"><i class="el-icon-plus"></i> 添加技能</el-button>
            <el-row type="flex" class="row-bg" style="flex-wrap:wrap">
            <el-col :md="12"  v-for="(item, i) in model.depacth" :key="i">
              <el-form-item label="名称">
                <el-select v-model="item.hero" filters  placeholder="请选择">
                  <el-option
                    v-for="item of heroes"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item >
                <el-button size='small' type="danger"  @click="model.depacth.splice(i, 1)">删除</el-button>
              </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <el-form-item>
      <el-button style="margin-top:1rem" type="primary" native-type="submit">提交</el-button>
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
        name: '',
        avatar: '',
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        },
        skills: []
      },
      categories: [],
      heroes: [],
      items: []
    }
  },
  methods: {
    afterUpload (res) {
      this.model.avatar = res.url
    },
    async save () {
      // let res;
      if (this.id) {
        await this.$http.put(`rest/heroes/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/heroes', this.model)
      }
      this.$router.push('/heroes/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/heroes/${this.id}`)
      // 保证数据不出错
      this.model = Object.assign({}, this.model, res.data)
    },
    async fetchCategories () {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    async fetchHeroes () {
      const res = await this.$http.post(`rest/heroes`)
      this.categories = res.data
    },
    async fetchItems () {
      const res = await this.$http.get(`rest/items`)
      this.items = res.data
    }
  },
  created () {
    this.id && this.fetch()
    this.fetchCategories()
    this.fetchHeroes()
    this.fetchItems()
  }
}
</script>
<style  scoped>

</style>
