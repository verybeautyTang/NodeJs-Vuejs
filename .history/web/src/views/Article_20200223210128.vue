<template>
  <div>
    <h1>文章详情</h1>
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
