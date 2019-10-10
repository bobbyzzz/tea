<template>
  <div class="romanticTea">
    <!-- banner -->
    <div class="banner">
      <img src="../statics/img/romantic/banner.jpg" alt />
    </div>
    <!-- shopList-1 -->
    <div class="shopList">
      <ul>
        <li v-for="(item, index) in shopListArr" :key="index" @click="postValue(index)">
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
      shopListArr: [
        {
          imgList: require("../statics/img/index/list01.jpg"),
          imgListSmall: require("../statics/img/index/list001.jpg"),
          teaName: "干薄荷叶新鲜薄荷茶",
          price: "24.00"
        },
        {
          imgList: require("../statics/img/index/list02.jpg"),
          imgListSmall: require("../statics/img/index/list002.jpg"),
          teaName: "洛神花干花果茶",
          price: "24.00"
        },
        {
          imgList: require("../statics/img/index/list01.jpg"),
          imgListSmall: require("../statics/img/index/list001.jpg"),
          teaName: "干薄荷叶新鲜薄荷茶",
          price: "24.00"
        },
        {
          imgList: require("../statics/img/index/list02.jpg"),
          imgListSmall: require("../statics/img/index/list002.jpg"),
          teaName: "洛神花干花果茶",
          price: "24.00"
        },
        {
          imgList: require("../statics/img/index/list03.jpg"),
          imgListSmall: require("../statics/img/index/list003.jpg"),
          teaName: "花草法兰西玫瑰花茶",
          price: "24.00"
        },
        {
          imgList: require("../statics/img/index/list04.jpg"),
          imgListSmall: require("../statics/img/index/list004.jpg"),
          teaName: "烘干纯桂花香桂花茶",
          price: "24.00"
        },
        {
          imgList: require("../statics/img/index/list05.jpg"),
          imgListSmall: require("../statics/img/index/list005.jpg"),
          teaName: "凉山茶胚芽荞麦茶",
          price: "24.00"
        },
        {
          imgList: require("../statics/img/index/list06.jpg"),
          imgListSmall: require("../statics/img/index/list006.jpg"),
          teaName: "天然白菊花茶贡菊花",
          price: "24.00"
        }
      ],
      centerDialogVisible: false,
      shopValue: ""
    };
  },
  methods: {
    postValue(index) {
      this.shopValue = this.shopListArr[index];
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
@import "../statics/css/romantictea.css";
</style>