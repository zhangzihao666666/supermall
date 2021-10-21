<template>
  <div class="banner">
      <div v-for="items in Bannerlist" :key="items" class="banner-item">
          <img :src="items.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name:'Banner',
    props:['Bannerlist']
}
</script>

<style>
.banner .banner-item {width: 100%;height: 150px;}
.banner .banner-item img {width: 100%;height: 100%;}
</style>