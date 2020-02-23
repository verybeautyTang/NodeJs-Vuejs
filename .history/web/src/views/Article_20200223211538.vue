<template>
  <div>
    <div class="article_index d-flex" v-if="model">
      <i class="iconfont icon-back"></i>
      <div class="flex-1">{{Id}}</div>
      <div class="text-gary fs-xs">2020/02/23</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Id: { required: true }
  },
  data () {
    return {
      model: null
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`/articles/${this.Id}`)
      console.log(res)
      this.model = res.data
    }
  },
  created () {
    this.fetch()
  }
}

</script>
<style scoped>
</style>
