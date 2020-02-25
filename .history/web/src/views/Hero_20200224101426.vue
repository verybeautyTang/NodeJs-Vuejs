<template>
  <div>
    {{Id}}
  </div>
</template>

<script>
export default {
  props: {
    Id: {required: true}
  },
  data () {
    return {
      hero: null
    }
  },
  methods: {
    async fetch () {
      const res = this.$http.get(`heroes/${this.Id}`)
      this.hero = res.data
    }
  },
  created () {
    this.fetch
  }
}

</script>
<style scoped>
</style>
