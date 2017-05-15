<template>
<div id="app">
  <!-- @change-show="changeDrawerShow" @on-hide="onHide" @on-show="onShow" -->
  <DrawerContent ref="drawer">
    <DrawerMenu slot="menu"></DrawerMenu>
    <div slot="content">
      <!-- <NavBar></NavBar> -->
      <transition name='page'>
        <router-view></router-view>
      </transition>
      <button @click="toggleMenu">toggleMenu</button>

    </div>
  </DrawerContent>
</div>
</template>

<script>
import DrawerMenu from './menu';
export default {
  name: 'app',
  components: {
    DrawerMenu
  },
  data() {
    return {

    };
  },
  methods: {
    toggleMenu() {
      this.$refs.drawer.show();
    }
  }
};
</script>



<style lang="sass">@import "../scss/variable.scss";
@import "../scss/mixin.scss";

#app {
    width: 100%;
    height: 100%;
    overflow-x: hidden;

}
</style>
