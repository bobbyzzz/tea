<template>
  <div class="indexPage">
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
    <!-- showShop -->
    <div class="showShop">
      <ul>
        <li v-for="(item, index) in showShopArr" :key="index">
          <p>
            <img :src="item.imgShow" alt />
          </p>
          <p class="shapName">{{item.shapName}}</p>
        </li>
      </ul>
    </div>
    <!-- middlePic -->
    <div class="middlePic">
      <img src="../statics/img/index/01.jpg" alt />
    </div>
    <!-- greatTea -->
    <div class="greatTea">
      <ul>
        <li v-for="(item, index) in greatTeaArr" :key="index">
          <img class="bigImg" :src="item.imgGreat" alt />
          <img class="lineImg" :src="item.imgLine" alt />
          <img class="imgGreatLogo" :src="item.imgGreatLogo" alt />
          <p class="txt1">{{item.txt1}}</p>
          <p class="txt2">{{item.txt2}}</p>
          <p class="txt3">{{item.txt3}}</p>
          <p class="txt4">{{item.txt4}}</p>
          <p class="txt5">{{item.txt5}}</p>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <!-- middlePic2 -->
    <div class="middlePic2">
      <img src="../statics/img/index/06.jpg" alt />
      <div>
        <p v-for="(item, index) in textArr" :key="index">{{item.tt}}</p>
      </div>
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
    <!-- middlePic3 -->
    <div class="middlePic3">
      <img src="../statics/img/index/07.jpg" alt />
      <div>
        <p>
          苦涩甘
          <span>甜</span>
        </p>
        <p>忙碌的一整天，找个舒适的角落</p>
        <p>品味苦荞的甘甜自畅想在金色麦田</p>
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
      showShopArr: [
        {
          imgShow: require("../statics/img/index/1.jpg"),
          shapName: "养颜花茶"
        },
        {
          imgShow: require("../statics/img/index/2.jpg"),
          shapName: "浪漫花茶"
        },
        { imgShow: require("../statics/img/index/3.jpg"), shapName: "清火花茶" }
      ],
      greatTeaArr: [
        {
          imgGreat: require("../statics/img/index/02.png"),
          imgLine: require("../statics/img/index/04.png"),
          imgGreatLogo: require("../statics/img/index/03.png"),
          txt1: "桂花性温味辛 ，具有健胃 、化痰生津散痰平肝的",
          txt2: "作用 ，能治痰多咳嗽 、肠风血痢牙痛口臭和食欲",
          txt3: "不振 ，具有疏肝理气醒脾开胃的功效 ，咽干等病",
          txt4: " ，专治外感风邪 、肾虚等症。桂根则可治疗筋骨",
          txt5: "疼痛 、风湿麻木等病症 。",
          title: "甘爽桂花"
        },
        {
          imgGreat: require("../statics/img/index/05.png"),
          imgLine: require("../statics/img/index/04.png"),
          imgGreatLogo: require("../statics/img/index/03.png"),
          txt1: "薰衣草茶可以净化心绪 ，纾解压力 、改善睡眠降",
          txt2: "低压脂 ，镇静心脏 ，有助于改善呼吸系统及妇科",
          txt3: "问题 ，经常饮用还可以使肌肤更有光泽帮腹泻 、头",
          txt4: "晕头痛等 。安定神经具有促进食进食养颜美肤的",
          txt5: "功效 。",
          title: "薰衣草茶"
        }
      ],
      textArr: [
        { tt: "是天然的美体良方。" },
        { tt: "除体内脂肪的功能可说" },
        { tt: "气爽促进新陈代谢、消" },
        { tt: "可使你容光焕发，神清" },
        { tt: "春痘的功能，经常饮用" },
        { tt: "具有滋养肌肤、预防青" },
        { tt: "维生素等抗氧化的成份" },
        { tt: "外，有些花草茶中富含" },
        { tt: "不适状。除了有益身心" },
        { tt: "用可以调整体质、减轻" },
        { tt: "富有各种疗效，长期饮" },
        { tt: "喝花茶的好处是在于它" }
      ],
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
    postValue(index) {
      this.shopValue = this.shopListArr[index];
    },
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
@import "../statics/css/index.css";
</style>