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
    <div class="hero_bg" :style="{'background-image':`url(${hero.banner})`}">
      <div class="hero_title">
        <div class="info text-white">{{hero.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {required: true}
  },
  data () {
    return {
      hero: null
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`heroes/${this.id}`)
      this.hero = res.data
      console.log(res.data)
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
    background-size:  100% auto;
    height: 50vw;
    background:#fff no-repeat top center;
  }
}
</style>
