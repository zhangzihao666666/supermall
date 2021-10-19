<template>
  <div>
    <NavBar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
      <div></div>
    </NavBar>
    <Banner :Bannerlist='banners'></Banner>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomedata } from "network/home.js";
import Banner from 'views/home/Banner'
export default {
  name: "Home",
  components: {
    NavBar,
    Banner
  },
  data() {
    return {
      banners: [],
      recommend: [],
    };
  },
  created() {
    getHomedata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res.data.banner.list)
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
