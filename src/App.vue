<template>
  <div>
    <!-- 最终封装结果 -->
    <!-- 视图 -->
    <router-view></router-view>
    <!-- 导航 -->
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
