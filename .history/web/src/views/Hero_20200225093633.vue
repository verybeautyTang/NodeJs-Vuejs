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
          <div class="px-2 pt-2" style="font-size:1.5rem;font-weight: 1000;">{{hero.name}}</div>
          <div class="px-2 pt-2">{{hero.categories.map (v => v.name).join('/')}}</div>
        </div>
        <div class=" text-white pt-2 d-flex pb-3">
          <span  class="px-2">难度</span>
          <div class="skills bg-info">{{hero.scores.difficult}}</div>
          <span  class="px-2">技能</span>
          <div class="skills bg-blue_1">{{hero.scores.skills}}</div>
          <span  class="px-2">攻击</span>
          <div class="skills bg-red">{{hero.scores.attack}}</div>
          <span  class="px-2">生存</span>
          <div class="skills bg-green ">{{hero.scores.survive}}</div>
          <div class="flex-1"></div>
          <div class="pifu pr-2 text-home-border">皮肤:4 &gt;</div>
        </div>
      </div>
    </div>
     <!-- end of top -->
    <div>
      <div class="bg-white px-3">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div>
            <div class="p-3 bg-white border-bottom">
              <div class="d-flex">
                <router-link tag="button" to="/" class="btn btn-lg flex-1">
                  <i class="iconfont icon-menu1"></i>
                  英雄介绍视频
                </router-link>
                <router-link tag="button" to="/" class="btn btn-lg flex-1 ml-2">
                  <i class="iconfont icon-menu1"></i>
                  英雄介绍视频
                </router-link>
              </div>

              <!-- skills -->
              <div class="skills bg-white mt-4">
                <div class="d-flex jc-around">
                  <img
                    class="icon"
                    @click="currentSkillIndex = i"
                    :class="{active: currentSkillIndex === i}"
                    :src="item.icon"
                    v-for="(item, i) in hero.skills"
                    :key="item.name"
                  />
                </div>
                <div v-if="currentSkill">
                  <div class="d-flex pt-4 pb-3">
                    <h3 class="m-0">{{currentSkill.name}}</h3>
                    <span class="text-grey-1 ml-4">
                      (冷却值: {{currentSkill.delay}}
                      消耗: {{currentSkill.cost}})
                    </span>
                  </div>
                  <p>{{currentSkill.description}}</p>
                  <div class="border-bottom"></div>
                  <p class="text-grey-1">小提示: {{currentSkill.tips}}</p>
                </div>
              </div>
            </div>

            <m-card plain icon="menu1" title="出装推荐" class="hero-items">
              <div class="fs-xl">顺风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in hero.items1" :key="item.name">
                  <img :src="item.icon" class="icon">
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
              <div class="border-bottom mt-3"></div>
              <div class="fs-xl mt-3">逆风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in hero.items2" :key="item.name">
                  <img :src="item.icon" class="icon">
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
            </m-card>
            <m-card plain icon="menu1" title="使用技巧">
              <p class="m-0">{{hero.usageTips}}</p>
            </m-card>
            <m-card plain icon="menu1" title="对抗技巧">
              <p class="m-0">{{hero.battleTips}}</p>
            </m-card>
            <m-card plain icon="menu1" title="团战思路">
              <p class="m-0">{{hero.teamTips}}</p>
            </m-card>
            <m-card plain icon="menu1" title="英雄关系">
              <div class="fs-xl">最佳搭档</div>
              <div v-for="item in hero.partners" :key="item.name"
              class="d-flex pt-3">
                <img :src="item.hero.avatar" alt="" height="50" >
                <p class="flex-1 m-0 ml-3">
                  {{item.description}}
                </p>
              </div>
              <div class="border-bottom mt-3"></div>
            </m-card>

          </div>
        </swiper-slide>
        <swiper-slide></swiper-slide>
      </swiper>
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
      hero: null,
      currentSkillIndex: 0
    }
  },
  computed: {
    currentSkill () {
      return this.hero.skills[this.currentSkillIndex];
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
  .hero_title{
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),
  }
  .skill{
    width: 1rem;
    height: 1rem;
    text-align: center;
    border-radius: 50%;
  }
  .skills {
    img.icon {
      width: 70px;
      height: 70px;
      border: 3px solid map-get($colors, 'white');
      &.active {
        border-color:map-get($colors, 'primary');
      }
      border-radius: 50%;
    }
  }
  .hero-items {
    img.icon{
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
</style>
