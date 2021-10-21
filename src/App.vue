<template>
  <div>
    <router-view></router-view>
    <mantabbar></mantabbar>
  </div>
</template>
<script>
import mantabbar from "components/content/mainTabbar/mantabbar.vue";
export default {
  name: "App",
  components: {
    mantabbar,
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
