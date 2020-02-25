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
        <div class="info text-white">
          <div>{{hero.title}}</div>
          <div>{{hero.name}}</div>
          <div>{{hero.categories.map (v => v.name).join('/')}}</div>
        </div>
        <div class=" d-flex text-white">
          <span>难度</span>
          <div class="skills px-2">{{hero.scores.difficult}}</div>
          <span>技能</span>
          <div class="skills ">{{hero.scores.skills}}</div>
          <span>攻击</span>
          <div class="skills ">{{hero.scores.attack}}</div>
          <span>生存</span>
          <div class="skills ">{{hero.scores.survive}}</div>
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
    width: 2rem;
  }
}
</style>
