<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probetype: {
      type: Number,
    },
    pullupload: {
      type: Boolean,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //   创建BScroll实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probetype,
      click: true,
      pullUpLoad: this.pullupload,
    });
    // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollposition", position);
    });
    // 监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("scrollpullupload");
    });
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style></style>
