<template>
  <div>
    <div class="article_index d-flex p-3 ai-center" v-if="modelName" style=" border-bottom: 0.0385rem solid rgba(153, 153, 153, 0.57);">
      <i class="iconfont icon-back text-blue" ></i>
      <div class="flex-1 px-2 text-blue " style="font-weight: bolder;">{{modelName.title}}</div>
      <div class="text-gary fs-xs">2020/02/23</div>
    </div>
    <div v-html="modelName.body" class="article_body p-4 fs-xl" ></div>
  </div>
</template>

<script>
export default {
  props: {
    Id: { required: true }
  },
  data () {
    return {
      modelName: null
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`articles/${this.Id}`)
      this.modelName = res.data
    }
  },
  created () {
    this.fetch()
  }
}

</script>
<style lang='scss'>
.article_body{
  img {
    width: 100%;
    height: auto;
  }
}
</style>
