<template>
<div class="scroll-content">
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
    console.log('ScrollContentMounted');
    this.attachScroll(this.$el);
  },
  updated() {
    console.log('ScrollContentUpdated');
    this.scroll.refresh();
  },
  methods: {
    attachScroll(element) {
      this.scroll = new BScroll(element, {
        startX: 0,
        startY: 0,
        scrollX: false,
        click: true,
        HWCompositing: true,
        resizePolling: 1
      });
    },
    scrollTo(x, y, time, easing){
      // 滚动到某个位置，x,y 代表坐标，time 表示动画时间，easing 表示缓动函数
      this.scroll.scrollTo(x, y, time, easing);
    },
    scrollToElement(el, time, offsetX, offsetY, easing){
      // 滚动到某个元素，el（必填）表示 dom 元素，time 表示动画时间，offsetX 和 offsetY 表示坐标偏移量，easing 表示缓动函数
      this.scroll.scrollToElement(el, time, offsetX, offsetY, easing);
    },
    refresh(){
      // 强制 scroll 重新计算，当 better-scroll 中的元素发生变化的时候调用此方法。
      this.scroll.refresh();
    },
    enable(){
      // 启用 better-scroll，默认开启
      this.scroll.enable();
    },
    disable(){
      // 禁用 better-scroll
      this.scroll.disable();
    },
    destroy(){
      // 销毁 better-scroll，解绑事件
      this.scroll.destroy();
    }
  }
};
</script>

<style>
.scroll-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
