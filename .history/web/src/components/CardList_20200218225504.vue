<template>
  <div>
    <m-card :icon="icon" :title="title">
      <div class="nav d-flex jc-between p-3">
        <div class="nav_item" :class={active:flase} v-for="(category,i) in categories" :key="i">
          <div class="nav_link">
            {{category.name}}
          </div>
        </div>
      </div>
      <swiper>
         <swiper-slide  v-for="(category,i) in categories" :key="i">
          <slot name="item" category="categrory"></slot>
        </swiper-slide>
      </swiper>
    </m-card>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, require: true },
    icon: { type: String, require: true },
    categories: { type: Array, require: true }
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
