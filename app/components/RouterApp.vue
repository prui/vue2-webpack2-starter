<template>
<div class="router-app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'router-app',
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.router-app {
  width: 100%;
  height: 100%;
}
</style>
