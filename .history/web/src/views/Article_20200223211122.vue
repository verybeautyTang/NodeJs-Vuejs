<template>
  <div>
    <div class="article_index d-flex">
      <i class="iconfont icon-back"></i>
      <div class="flex-1">{{Id}}</div>
      <div class="text-gary fs-xs">2020/02/23</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Id: { require: true }
  },
  data () {
    return {
      model: null
    }
  },
  methods: {
    async fetch () {
      const res = await this.Aticle.get(`articles/${this.Id}`)
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
