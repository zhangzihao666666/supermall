<template>
  <tabbar>
    <tabbaritem path="/Home" activeColor="red">
      <template #item-img>
        <img src="~assets/img/profile/home.png" alt="" />
      </template>
      <template #item-imgs>
        <img src="~assets/img/profile/homes.png" alt="" />
      </template>
      <template #item-txt>
        <p>首页</p>
      </template>
    </tabbaritem>
    <tabbaritem path="/Shop" activeColor="red">
      <template #item-img>
        <img src="~assets/img/profile/shop.png" alt="" />
      </template>
      <template #item-imgs>
        <img src="~assets/img/profile/shops.png" alt="" />
      </template>
      <template #item-txt>
        <p>购物车</p>
      </template>
    </tabbaritem>
    <tabbaritem path="/Class" activeColor="red">
      <template #item-img>
        <img src="~assets/img/profile/class.png" alt="" />
      </template>
      <template #item-imgs>
        <img src="~assets/img/profile/classs.png" alt="" />
      </template>
      <template #item-txt>
        <p>分类</p>
      </template>
    </tabbaritem>
    <tabbaritem path="/profile" activeColor="red">
      <template #item-img>
        <img src="~assets/img/profile/me.png" alt="" />
      </template>
      <template #item-imgs>
        <img src="~assets/img/profile/mes.png" alt="" />
      </template>
      <template #item-txt>
        <p>我的</p>
      </template>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar.vue";
import tabbaritem from "components/common/tabbar/tabbaritem.vue";
export default {
    name:'mantabbar',
    components:{
        tabbar,
        tabbaritem
    }
};
</script>

<style>

</style>