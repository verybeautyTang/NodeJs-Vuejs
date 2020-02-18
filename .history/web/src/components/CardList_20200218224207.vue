<template>
  <div>
    <m-card :icon="icon" :title="title">
      <div class="nav d-flex jc-between p-3">
        <div class="nav_item" :class="active">
          <div class="nav_link">
            热门
          </div>
        </div>
        <div class="nav_item">
          <div class="nav_link">
            新闻
          </div>
        </div>
        <div class="nav_item">
          <div class="nav_link">
            公告
          </div>
        </div>
        <div class="nav_item">
          <div class="nav_link">
            活动
          </div>
        </div>
        <div class="nav_item">
          <div class="nav_link">
            赛事
          </div>
        </div>
      </div>
      <swiper>
        <swiper-slide  v-for="m in 5" :key="m">
          <div class="p-3" v-for="n in 5" :key="n">
            <span>[公告]</span>
            <span>|</span>
            <span class=" flex-1">2月18日全服不停机更新公告</span>
            <span class="">02/17</span>
          </div>
        </swiper-slide>
      </swiper>
    </m-card>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, require: true },
    icon: { type: String, require: true }
  },
  data () {
    return {
      active: 0
    }
  }
}

</script>
<style scoped>
</style>
