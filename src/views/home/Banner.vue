<template>
  <div class="banner">
      <div v-for="(items) in Bannerlist" :key="items" class="imgbox">
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
.banner .imgbox {width: 100%;height: 150px;}
.banner .imgbox img {width: 100%;height: 100%;}
</style>