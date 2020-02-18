<template>
  <div>
     <div class="card bg-white py-3 mt-3">
    <div class="card_head d-flex ai-center p-2">
      <i class='iconfont icon-menu'></i>
      <span class='px-2 flex-1 fs-xl'>{{title}}</span>
      <i class='iconfont icon-menu1 pr-2'></i>
    </div>
    <div class="line p-2 d-flex ml-2"></div>
    <div class="card_body">
      <div class="nav d-flex jc-between p-3">
        <div class="nav_item active">
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
    </div>
   </div>
  </div>
</template>

<script>
export default {

}

</script>
<style scoped>
</style>
