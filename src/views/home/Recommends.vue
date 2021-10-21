<template>
  <div class="recommend">
    <div v-for="items in Recommendlist" :key="items" class="recommend-item">
      <div class="imgbox">
        <img :src="items.image" alt="" />
      </div>
      <div class="titbox">
          <p>{{items.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: ["Recommendlist"],
}
</script>

<style>
.recommend {display: flex;width: 100%;text-align: center;margin-top: 10px;border-bottom: 8px solid #eeeeee;padding: 10px 0px 30px 0}
.recommend .recommend-item {width: 90px;padding: 0 10px;flex: 1;}
.recommend .recommend-item .imgbox img {width: 100%;}
.recommend .recommend-item .titbox p {width: 100%;text-align: center;margin-top: 5px;}
</style>
