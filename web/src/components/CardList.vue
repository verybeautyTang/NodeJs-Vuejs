<template>
  <div>
    <m-card :icon="icon" :title="title">
      <div class="nav d-flex jc-between p-3">
        <div class="nav_item" @click="$refs.list.swiper.slideTo(i)" :class="{active: active === i}" v-for="(category,i) in categories" :key="i">
          <div class="nav_link">
            {{category.name}}
          </div>
        </div>
      </div>
      <swiper ref="list" :options="{autoHeight:true}" @slide-change="()=> active = $refs.list.swiper.realIndex">
         <swiper-slide  v-for="(category,i) in categories" :key="i">
          <slot name="item" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </m-card>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    categories: { type: Array, required: true }
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
