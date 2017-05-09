<template>
<div>
  <div class="drawer-menu-title" flex="cross:center">
    功能导航
  </div>
  <div class="drawer-menu-content">
    <ScrollContent>
      <div v-close-drawer-menu class="drawer-menu-item" flex="cross:center">
        首页
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

<style lang="sass">@import "../../scss/variable.scss";
@import "../../scss/mixin.scss";

.drawer-menu-title {
    color: $positive-dark;
    padding: 10px;
    font-size: 19px;
    @include divide;
}

.drawer-menu-item {
    padding: 16px 10px;
    @include divide;
}

.drawer-menu-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 39px;
    top: 0;
}
</style>
