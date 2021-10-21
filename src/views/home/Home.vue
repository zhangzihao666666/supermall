<template>
  <div class="Home">
    <NavBar class="home-nav"><template #center>购物街</template> </NavBar>
    <Banner :Bannerlist="banners"></Banner>
    <Recommends :Recommendlist="recommends"></Recommends>
    <Feature></Feature>
    <TabControl :titles="['流行', '新款', '精选']"></TabControl>
  </div>
</template>

<script>
import { getHomedata, getHomeGoods } from "network/home.js";
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/common/tabcontrol/TabControl";

import Banner from "views/home/Banner";
import Recommends from "views/home/Recommends";
import Feature from "views/home/Feature";
export default {
  name: "Home",
  components: {
    NavBar,
    Banner,
    Recommends,
    Feature,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomedata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    getHomeGoods('pop',1).then((res) => {
      console.log(res)
    });
  },
};
</script>

<style>
.Home {
  padding: 44px 0 49px 0;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
