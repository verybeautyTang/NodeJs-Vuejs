<template>
  <div>
    <div class="article_index">
      <i class="iconfont icon-back"></i>
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
