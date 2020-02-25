<template>
  <div>
        <div class="bg-black tarbar px-3 d-flex ai-center">
      <img class="m-1" src="../assets/logo.png" height="35">
       <div class="mt-3 text-white">王者荣耀</div>
      <div class="flex-1  px-4">
        <div class=" text-white mt-3" >攻略站</div>
      </div>
      <div class=" text-white mt-3" >更多英雄</div>
    </div>
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
    this.fetch()
  }
}

</script>
<style scoped>
</style>
