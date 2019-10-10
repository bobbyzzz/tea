<template>
  <div class="headerNav">
    <div class="w">
      <div class="logoName">
        <span>花茶</span>
        <span>记忆</span>
      </div>
      <div class="nav">
        <p
          :class="{active:index==indexs}"
          @click="tapNav(index)"
          v-for="(item, index) in navArr"
          :key="index"
        >{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navArr: [
        { text: "首页" },
        { text: "浪漫花茶" },
        { text: "养颜花茶" },
        { text: "花茶资讯" },
        { text: "品牌故事" }
      ],
      indexs: ""
    };
  },
  methods: {
    tapNav(index) {
      this.indexs = index;
      //console.log()
      if (index == 0) {
        this.$router.push("/index");
      } else if (index == 1) {
        this.$router.push("/romantictea");
      } else if (index == 2) {
        this.$router.push("/faceuptea");
      } else if (index == 3) {
        this.$router.push("/teanew");
      } else if (index == 4) {
        this.$router.push("/teastory");
      }
    },
    navSelect() {
      if (this.$route.path.indexOf("index") != -1) {
        this.indexs = 0;
      } else if (this.$route.path.indexOf("romantictea") != -1) {
        this.indexs = 1;
      } else if (this.$route.path.indexOf("faceuptea") != -1) {
        this.indexs = 2;
      } else if (this.$route.path.indexOf("teanew") != -1) {
        this.indexs = 3;
      } else if (this.$route.path.indexOf("teastory") != -1) {
        this.indexs = 4;
      } else {
        this.indexs = "";
      }
    }
  },
  created() {
    this.navSelect();
  }
};
</script>
<style scoped>
@import "../statics/css/headernav.css";
</style>