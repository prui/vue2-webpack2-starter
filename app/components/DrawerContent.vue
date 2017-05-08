<template>
<drawer :show="drawerShow" :pos="pos" :tran="tran" @change-show="changeDrawerShow">
  <div class="layout" slot="drawer">
    <slot name="menu"></slot>
  </div>
  <slot name="content"></slot>
</drawer>
</template>

<script>
import Vue from 'vue';

let DrawerBus = new Vue();

Vue.directive('close-drawer-menu', {
  bind: (el, binding, vnode) => {
    el.addEventListener('click', () => {
      DrawerBus.$emit('EVENT:close-drawer-menu');
    });
  }
});

export default {
  name: 'DrawerContent',
  data() {
    return {
      pos: 'left',
      tran: 'push',
      drawerShow: false,
    };
  },
  mounted() {
    DrawerBus.$on('EVENT:close-drawer-menu', () => {
      this.hide();
    });
  },
  methods: {
    drawerToggle() {
      setTimeout(() => {
        this.drawerShow = !this.drawerShow;
      }, 100);
    },
    show() {
      setTimeout(() => {
        this.drawerShow = true;
      }, 100);
    },
    hide() {
      setTimeout(() => {
        this.drawerShow = false;
      }, 100);
    },
    changeDrawerShow() {
      this.drawerToggle();
    }
  }
};
</script>

<style>
.drawer {
  min-width: 200px;
  width: 70%;
  border-right: 1px solid #f2f2f2;
}

.vue-drawer>.main>.mask {
  background-color: inherit !important;
}
</style>
