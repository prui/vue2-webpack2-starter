<template>
  <div>
      <div class="drawer-menu-title" flex="cross:center">
        功能导航
      </div>
      <div>
        <ScrollContent>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
          <div v-close-drawer-menu style="height:40px;">
            asdasdasd
          </div>
        </ScrollContent>
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
  color: $positive-dark;
  // height: 30px;
  padding:10px;
  font-size:18px;
  @include divide;

}

</style>
