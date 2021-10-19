<template>
  <div class="tabbaritem" @click="itemsClick">
    <div v-if="!isshow">
      <slot name="item-img"> <img src="~assets/img/profile/home.png" alt="" /> </slot>
    </div>
    <div v-else>
      <slot name="item-imgs"> <img src="~assets/img/profile/homes.png" alt="" /> </slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-txt">首页</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    activeColor:{
        type:String,
        default:'red'
    }
  },
  computed: {
    isshow() {
        return this.$route.path == this.path;
    },
    activeStyle(){
        return this.isshow?{color:this.activeColor}:{}
    }
  },

  methods: {
    itemsClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tabbaritem {height: 49px;flex: 1;}
.tabbaritem img {height: 24px;widows: 24px;}
.tabbaritem {text-align: center;}
.tabbaritem p {margin-top: 4px;}
</style>