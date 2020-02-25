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
      <div class="hero_title d-flex flex-column jc-end " style="height:100%">
        <div class="info text-white">
          <div class="px-2 pt-2">{{hero.title}}</div>
          <div class="px-2 pt-2">{{hero.name}}</div>
          <div class="px-2 pt-2">{{hero.categories.map (v => v.name).join('/')}}</div>
        </div>
        <div class=" text-white pt-2  d-flex">
          <span  class="px-2">难度</span>
          <div class="skills bg-info">{{hero.scores.difficult}}</div>
          <span  class="px-2">技能</span>
          <div class="skills bg-blue_1">{{hero.scores.skills}}</div>
          <span  class="px-2">攻击</span>
          <div class="skills bg-red">{{hero.scores.attack}}</div>
          <span  class="px-2">生存</span>
          <div class="skills bg-green ">{{hero.scores.survive}}</div>
          <div class="flex-1"></div>
          <div class="pifu pr-2 text-gary-1">皮肤:4 &gt;</div>
        </div>
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
    background-size: auto 100%;
    height: 50vw;
    background-repeat: no-repeat;
    background-position: top right;
    background-color: #fff;
  }
  .skills{
    width: 1rem;
    height: 1rem;
    text-align: center;
    border-radius: 50%;
  }
}
</style>
