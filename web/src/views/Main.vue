<template>
  <div>
    <div class="bg-black tarbar px-3 d-flex ai-center">
      <img class="m-1" src="../assets/logo.png" height="35">
      <div class="flex-1  px-2">
        <div class="mt-2 text-white">王者荣耀</div>
        <div class="fs-xxs text-dark mt-1">团队成就更多</div>
      </div>
      <button class="bg-primary btn fs-sm mt-2" type="button">立即下载</button>
    </div>
    <div class="nav nav_main bg-primary  pt-3 pb-2  d-flex jc-space text-white">
        <div class="nav_item active">
          <router-link to="/" class="nav_link" tag="div">首页</router-link>
        </div>
        <div class="nav_item">
          <router-link to="glcenter" class="nav_link" tag="div">攻略中心</router-link>
        </div>
        <div class="nav_item">
          <router-link  to="playGame" class="nav_link" tag="div">赛事中心</router-link>
        </div>
      </div>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}

</script>
<style lang='scss'>
.tarbar{
  position: sticky;
  top: 0;
  z-index: 9;
}
</style>
