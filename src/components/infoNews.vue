<template>
  <div class="infoNews">
    <!-- banner -->
    <div class="banner">
      <img src="../statics/img/teanew/banner.jpg" alt />
    </div>
    <div class="main">
      <div class="content" v-if="one">
        <div class="title">{{initData.titleName}}</div>
        <div class="container">
          <img :src="initData.img1" alt />
          <p>{{initData.text1}}</p>
          <p>{{initData.text2}}</p>
          <img :src="initData.img2" alt />
          <p>{{initData.text3}}</p>
        </div>
      </div>
      <div class="content" v-else-if="two">
        <div class="title">{{initData.titleName}}</div>
        <div class="container">
          <img :src="initData.img1" alt />
          <p>{{initData.text1}}</p>
          <p>{{initData.text2}}</p>
          <p>{{initData.text3}}</p>
          <p>{{initData.text4}}</p>
        </div>
      </div>
      <div class="content" v-else-if="three">
        <div class="title">{{initData.titleName}}</div>
        <div class="container">
          <img :src="initData.img1" alt />
          <p>{{initData.text1}}</p>
          <p v-html="initData.text2">{{initData.text2}}</p>
          <img :src="initData.img2" alt />
          <p>{{initData.text3}}</p>
          <p>{{initData.text4}}</p>
          <p>{{initData.text5}}</p>
          <p>{{initData.text6}}</p>
        </div>
      </div>
      <div class="content" v-else-if="four">
        <div class="title">{{initData.titleName}}</div>
        <div class="container">
          <img :src="initData.img1" alt />
          <p>{{initData.text1}}</p>
          <p>{{initData.text2}}</p>
          <p>{{initData.text3}}</p>
          <p>{{initData.text4}}</p>
          <p>{{initData.text5}}</p>
          <p>{{initData.text6}}</p>
          <p>{{initData.text7}}</p>
        </div>
      </div>
      <div class="content" v-else>
        <div class="title">{{initData.titleName}}</div>
        <div class="container">
          <p>{{initData.text1}}</p>
          <p>{{initData.text2}}</p>
          <p v-html="initData.text3">{{initData.text3}}</p>
          <p v-html="initData.text4">{{initData.text4}}</p>
          <p v-html="initData.text5">{{initData.text5}}</p>
          <p v-html="initData.text6">{{initData.text6}}</p>
          <p v-html="initData.text7">{{initData.text7}}</p>
          <p v-html="initData.text8">{{initData.text8}}</p>
          <p v-html="initData.text9">{{initData.text9}}</p>
          <p v-html="initData.text10">{{initData.text10}}</p>
          <p v-html="initData.text11">{{initData.text11}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import bus from "../bus/bus.js";
export default {
  data() {
    return {
      one: false,
      two: false,
      three: false,
      four: false,
      initData: {}
    };
  },
  methods: {
    getData() {
      // console.log(JSON.parse(localStorage.getItem("key")).arr);
      // console.log(JSON.parse(localStorage.getItem("key")).index);
      let num = JSON.parse(localStorage.getItem("key")).index;
      this.initData = JSON.parse(localStorage.getItem("key")).arr;
      if (num == 0) {
        this.one = true;
      } else if (num == 1) {
        this.two = true;
      } else if (num == 2) {
        this.three = true;
      } else if (num == 3) {
        this.four = true;
      }
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped>
@import "../statics/css/infoNews.css";
</style>