<template>
  <div class="faceuptea">
    <!-- banner -->
    <div class="banner">
      <img src="../statics/img/index/01.jpg" alt />
      <div class="bannerInfo">
        <p>
          以<span>花</span>养颜
        </p>
        <p>逝水流年，容颜随时光衰老，回忆那些青春！</p>
        <p>我们都还是我们，只是回不去那个单纯的年纪！</p>
      </div>
    </div>
    <!-- shopList-1 -->
    <div class="shopList">
      <ul>
        <li v-for="(item, index) in listShopArr" :key="index" @click="postVal(index)">
          <!-- :fromfathermsg="num" -->
          <div class="iconPic">
            <el-button type="text" @click="centerDialogVisible = true">
              <img :src="item.imgList" alt />
              <div class="icon">
                <i class="el-icon-search"></i>
              </div>
            </el-button>
          </div>
          <p>{{item.teaName}}</p>
          <p>￥{{item.price}}</p>
        </li>
        <el-dialog :visible.sync="centerDialogVisible" width="60%" center>
          <div class="info">
            <div class="shopPic">
              <div class="shopBigPic" @click="postV">
                <img :src="shopValue.imgList" alt />
              </div>
              <div class="shopSmallPic">
                <img :src="shopValue.imgListSmall" alt />
              </div>
            </div>
            <div class="shopInfo">
              <p class="titleName">{{shopValue.teaName}}</p>
              <p class="money">
                价&nbsp;&nbsp;&nbsp;&nbsp;格：
                <span>￥</span>
                <span>{{shopValue.price}}</span>
              </p>
            </div>
          </div>
        </el-dialog>
      </ul>
    </div>
  </div>
</template>
<script>
// import bus from "../bus/bus";
export default {
  data() {
    return {
      listShopArr: [
        {
          imgList: require("../statics/img/index/list07.jpg"),
          imgListSmall: require("../statics/img/index/list007.jpg"),
          teaName: "新鲜金银花花茶罐装",
          price: "38.00"
        },
        {
          imgList: require("../statics/img/index/list08.jpg"),
          imgListSmall: require("../statics/img/index/list008.jpg"),
          teaName: "糙米茶花草茶蒸青绿茶",
          price: "38.00"
        },
        {
          imgList: require("../statics/img/index/list09.jpg"),
          imgListSmall: require("../statics/img/index/list009.jpg"),
          teaName: "玫瑰花茶干花玫瑰花",
          price: "38.00"
        },
        {
          imgList: require("../statics/img/index/list10.jpg"),
          imgListSmall: require("../statics/img/index/list010.jpg"),
          teaName: "天然白菊花茶贡菊花",
          price: "24.00"
        },
        {
          imgList: require("../statics/img/index/list11.jpg"),
          imgListSmall: require("../statics/img/index/list011.jpg"),
          teaName: "原装烘焙大麦泡茶",
          price: "38.00"
        },
        {
          imgList: require("../statics/img/index/list12.jpg"),
          imgListSmall: require("../statics/img/index/list012.jpg"),
          teaName: "浓香罐装新鲜茉莉花茶",
          price: "38.00"
        },
        {
          imgList: require("../statics/img/index/list09.jpg"),
          imgListSmall: require("../statics/img/index/list009.jpg"),
          teaName: "玫瑰花茶干花玫瑰花",
          price: "38.00"
        },
        {
          imgList: require("../statics/img/index/list10.jpg"),
          imgListSmall: require("../statics/img/index/list010.jpg"),
          teaName: "天然白菊花茶贡菊花",
          price: "24.00"
        }
      ],
      centerDialogVisible: false,
      shopValue: ""
    };
  },
  methods: {
    postVal(index) {
      this.shopValue = this.listShopArr[index];
    },
    postV() {
      this.$router.push("/buyPage?imgList="+this.shopValue.imgList+"&teaName="+this.shopValue.teaName+"&price="+this.shopValue.price);
      // bus.$emit("postData", this.shopValue);
      // console.log(this.shopValue.imgList)
      // console.log(this.shopValue.imgListSmall)
      // console.log(this.shopValue.teaName)
      // console.log(this.shopValue.price)
    }
  }
};
</script>
<style scoped>
@import "../statics/css/faceuptea.css";
</style>