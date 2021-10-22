<template>
  <div class="banner">
    <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="item in Bannerlist" :key="item">
        <img :src="item.image" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ["Bannerlist"],
};
</script>

<style>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img {width: 100%;}
</style>
