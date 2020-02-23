<template>
<div>
    <!-- 首页轮播图 -->
  <swiper :options="swiperOption">
    <swiper-slide>
        <a href="#" target="blank">
          <img src="../assets/swiper/swiper1.jpeg" alt="" height="100%" width="100%">
        </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#" target="blank">
          <img src="../assets/swiper/swiper2.jpeg" alt="" height="100%" width="100%">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="#" target="blank">
          <img src="../assets/swiper/swiper3.jpeg" alt="" height="100%" width="100%">
        </a>
      </swiper-slide>
        <div class="swiper-pagination pagination-home text-right pr-3 pb-2" slot="pagination"></div>
  </swiper>
  <!-- end of swiper -->
  <div class='nav-icons  mt-3'>
    <div class="d-flex flex-wrap pt-3 ">
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-news'></i>
        <div>爆料站</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-story'></i>
        <div>故事站</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-shops'></i>
        <div>周边商城</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-feeling'></i>
        <div>体验服</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-newPerson'></i>
        <div>新人专区</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-honer'></i>
        <div>荣耀-传承</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-files'></i>
        <div>模拟战资料库</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-kings'></i>
        <div>王者营地</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-wechat'></i>
        <div>公众号</div>
      </div>
        <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items   sprite-version'></i>
        <div>版本介绍</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-govr'></i>
        <div>对局环境</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-team'></i>
        <div>无线王者团</div>
      </div>
      <div class='nav-items mb-3 pl-2 pt-3'>
        <i class='sprite sprite-items sprite-idea'></i>
        <div>创意互动营</div>
      </div>
    </div>
    <div class='bg-light_1 py-2 text-center '>
      <i class='sprite sprite-items sprite-slow'></i>
      <span class='fs-xs'>收起</span>
    </div>
  </div>
  <list-card icon="menu" title="新闻资讯" :categories="newsList">
    <template #item="{category}">
      <div class="p-3 d-flex" v-for="(item, n) in category.newsList" :key="n">
        <span class="text-dark">[{{item.categoryName}}]</span>
        <span class="px-2">|</span>
        <span class=" flex-1 pr-2 text-tips text-dark_1">{{item.title}}</span>
        <span class="text-gary fs-ms ">{{item.createdAt |date }}</span>
      </div>
    </template>
  </list-card>
    <list-card icon="icon-test" title="英雄列表" :categories="heroList">
    <template #item="{category}">
      <div class="d-flex flex-wrap" >
        <div style="width:20%" class="p-2 text-center" v-for="(item, n) in category.heroList" :key="n">
        <img :src="item.avatar" alt="" class="w-100">
        <div>{{item.name}}</div>
      </div>
      </div>
    </template>
  </list-card>
  <m-card icon="video" title="精彩视频"></m-card>
  <m-card icon="Book" title="图文攻略"></m-card>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  filters: {
    date (val) {
      return dayjs(val).format('MM/DD')
    }
  },
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        },
        autoplay: {
          delay: 2000,
          loop: true
        }
      },
      newsList: [ ],
      heroList: []
    }
  },
  methods: {
    async fetchNewsList () {
      const res = await this.$http.get('news/list')
      this.newsList = res.data
    },
    async fetchHeroList () {
      const res = await this.$http.get('heroes/list')
      this.heroList = res.data
    }
  },
  created () {
    this.fetchNewsList()
    this.fetchHeroList()
  }
}
</script>
<style lang='scss'>
@import './../assets/sass/_varible.scss';
.pagination-home{
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    opacity: 1;
    background-color: map-get($colors, 'white');
    &.swiper-pagination-bullet-active{
       background-color: map-get($colors, 'home_swiper')
    }
  }
}
.nav-icons{
  background-color: map-get($colors,'white');
  border-top:1px solid $home-borders;
  border-bottom:1px solid $home-borders;
  .nav-items{
    width: 25%;
    text-align: center;
    border-left:0.0769rem solid $border-color;
    &:nth-child(4n+1){
      border-left:none;
    }
  }
}
.line{
  border-bottom: 0.0769rem solid #d4d9de;
  width: 95%;
}

</style>
