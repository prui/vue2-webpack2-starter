<template>
  <div>
      <div class="drawer-menu-title" flex="cross:center">
        功能导航
      </div>
      <div >
        <div v-close-drawer-menu>
          asdasdasd
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'drawer-menu',
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style lang="sass">
@import "../../scss/variable.scss";
@import "../../scss/mixin.scss";

.drawer-menu-title {
  color: $font-positive;
  // height: 30px;
  padding:10px;
  font-size:18px;
  @include divide;

}

</style>
