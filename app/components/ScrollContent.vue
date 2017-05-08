<template>
<div style="width:100%;height:400px;overflow:hidden;">
  <div>
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'ScrollContent',
  mounted() {
    console.log(this.$el);
    let scroll = new BScroll(this.$el, {
      startX: 0,
      startY: 0
    });
  }
};
</script>

<style>

</style>
