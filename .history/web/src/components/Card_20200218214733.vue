<template>
  <div>
     <div class="card bg-white py-3 mt-3">
    <div class="card_head d-flex ai-center p-2">
      <i class='iconfont' :class="`icon-${icon}`"></i>
      <span class='px-2 flex-1 fs-xl'>{{title}}</span>
      <i class='iconfont icon-menu1 pr-2'></i>
    </div>
    <div class="line p-2 d-flex ml-2"></div>
    <div class="card_body">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: { type: String, require: true}
  }
}

</script>
<style scoped>
</style>
