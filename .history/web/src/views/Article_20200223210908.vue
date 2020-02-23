<template>
  <div>
    <div class="article_index d-flex">
      <i class="iconfont icon-back"></i>
      <div class="flex-1">{{id}}</div>
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

    }
  },
  created () {
    this.fetch()
  }
}

</script>
<style scoped>
</style>
