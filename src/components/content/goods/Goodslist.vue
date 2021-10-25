<template>
  <div class = "goodslist">
    <goodslist-item v-for='item in goodslist' :key="item" :goodslistItem="item">

    </goodslist-item>
  </div>
</template>

<script>
import GoodslistItem from 'components/content/goods/GoodslistItem'
export default {
  props: {
    goodslist:Array,
  },
  components: {
    GoodslistItem
  }
}
</script>

<style>
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>