<template>
  <div class="buyPage">
    <!-- banner -->
    <el-carousel :interval="5000" arrow="always" height="630px">
      <el-carousel-item v-for="(item, index) in bannerArr" :key="index">
        <div class="banner">
          <img class="bgcPic" :src="item.imgBcg" alt />
          <img class="smallPic" :src="item.imgUrl" alt />
          <img class="logoPic" :src="item.imgLogo" alt />
          <p class="text1">{{item.text1}}</p>
          <p class="text2">{{item.text2}}</p>
          <p class="text3">{{item.text3}}</p>
          <p class="text4">{{item.text4}}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- shop -->
    <div class="buyShop">
      <div class="shopCard">
        <div class="shopCard-left">
          <img :src="fromHomeData.imgList" alt />
        </div>
        <div class="shopCard-right">
          <p class="teaName">{{fromHomeData.teaName}}</p>
          <p class="price">
            价格：
            <span>￥</span>
            <span>{{fromHomeData.price}}</span>
          </p>
          <p class="phone">
            <i class="el-icon-phone"></i>1300000000
          </p>
        </div>
      </div>
      <div class="infoList">
        <p>产品详情</p>
      </div>
    </div>
  </div>
</template>
<script>
// import bus from "../bus/bus";
export default {
  data() {
    return {
      bannerArr: [
        {
          imgUrl: require("../statics/img/index/111.png"),
          imgBcg: require("../statics/img/index/banner1.png"),
          imgLogo: require("../statics/img/index/030.png"),
          text1: "甘 甜 爽 口",
          text2: "上 乘 品 质 · 美 白 美 颜",
          text3: "浓 香 玫 瑰 花 茶"
        },
        {
          imgUrl: require("../statics/img/index/banner11.png"),
          imgBcg: require("../statics/img/index/banner2.png"),
          text1: "Test Life And Enjoy A Healthy",
          text2: "茶清思绪 花香润心",
          text3: "你若愿品  花色生香",
          text4: "If you wish to product color and aroma"
        }
      ],
      fromHomeData: {}
    };
  },
  methods: {
    getVal() {
      // bus.$on("postData", data => {
      //   this.fromHomeData = data;
      //   console.log(this.fromHomeData)
      // });
      // console.log(this.$route.query);
      this.fromHomeData = this.$route.query;
    }
  },
  created() {
    this.getVal();
  }
};
</script>
<style scoped>
@import "../statics/css/buyPage.css";
</style>