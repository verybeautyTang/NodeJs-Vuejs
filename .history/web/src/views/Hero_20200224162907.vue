<template>
  <div class="hero_list">
    <div class="bg-black tarbar px-3 d-flex ai-center">
      <img class="m-1" src="../assets/logo.png" height="35">
        <div class="mt-3 text-white">王者荣耀</div>
      <div class="flex-1  pl-5">
        <div class=" text-white mt-3" >攻略站</div>
      </div>
      <div class=" text-white mt-3" >更多英雄 &gt;</div>
    </div>
    <div class="hero_bg" :style="{'background-image':`url(${model.banner})`}">
      <div class="hero_title"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Id: {required: true}
  },
  data () {
    return {
      hero: null,
      model: []
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
<style lang='scss'>
.hero_list {
  .hero_bg{
    background-size:auto 100%;
    height: 50vm;
    background:#fff no-repeat top center;
  }
}
</style>
