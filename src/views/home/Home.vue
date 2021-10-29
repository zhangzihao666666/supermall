<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav"><template #center>购物街</template> </NavBar>

    <Scroll
      class="content"
      ref="scroll"
      :probetype="3"
      @scrollposition="Homeposition"
      :pullupload="true"
      @scrollpullupload="Homeload"
    >
      <Banner :Bannerlist="banners"></Banner>
      <Recommends :Recommendlist="recommends"></Recommends>
      <Feature></Feature>
      <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick"></TabControl>
      <Goodslist :goodslist="showGoods"></Goodslist>
    </Scroll>

    <BackTop @click="backClick" v-show="isshowbackTop"></BackTop>
  </div>
</template>

<script>
import { getHomedata, getHomeGoods } from "network/home.js";
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/common/tabcontrol/TabControl";
import Goodslist from "components/content/goods/Goodslist.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

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
    Goodslist,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      showType: "pop",
      isshowbackTop: false,
    };
  },
  created() {
    // 在生命周期函数中尽量写对应的方法调用 具体的方法在methods中
    this.getHomedata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.showType].list;
    },
  },
  methods: {
    // 监听相关方法
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.showType = "pop";
          break;
        case 1:
          this.showType = "new";
          break;
        case 2:
          this.showType = "sell";
      }
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    Homeposition(position) {
      // console.log(position);
      this.isshowbackTop = -position.y > 1000;
    },
    Homeload() {
      console.log("加载更多");
      this.getHomeGoods(this.showType);
    },

    // 网络请求方法
    getHomedata() {
      getHomedata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 拿到当前type的页码数
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#Home {
  padding: 44px 0 49px 0;
  position: relative;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
