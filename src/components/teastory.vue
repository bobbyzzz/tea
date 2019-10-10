<template>
  <div class="teastory">
    <!-- banner -->
    <div class="banner">
      <img src="../statics/img/teastory/banner1.jpg" alt />
    </div>
    <!-- main -->
    <div class="main">
      <div class="main-up">
        <div>
          <img src="../statics/img/teastory/1.png" alt />
        </div>
        <div class="main-up-right">
          <div class="title">传 承 传 统 制 茶</div>
          <div class="infoList">
            <p v-for="(item, index) in upArr" :key="index">{{item}}</p>
          </div>
        </div>
      </div>
      <div class="main-down">
        <div class="main-down-left">
          <div v-for="(item, index) in downArr" :key="index">
            <img :src="item.littleImg" alt />
          </div>
        </div>
        <div class="main-down-right">
          <img src="../statics/img/teastory/ret.png" alt />
        </div>
      </div>
    </div>

    <!-- banner -->
    <div class="banner">
      <img src="../statics/img/teastory/banner2.jpg" alt />
      <div class="banner-right">
        <p>◆心始终做好每一道工序</p>
        <p>花茶有限责任公司一直秉承“诚信为本”的古训，以“金般品质、百年承诺”为经营理念，以”打造中国茶叶品牌、弘扬国饮“为目标。1994年在福建重新建立了自己的生产基地——闽东××××茶叶有限公司。××××茉莉花茶选用上等原料并采用独特的加工工艺，以其“汤清、味浓，入口芳香，回味无穷”的特色，深得国内外茶客的欢迎，使得老字号蜚声海内外。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      upArr: [
        "几百年前，茶农们采用原始的工艺制茶",
        "以红砖起灶、铁鼎炒制、相思木烘焙",
        "不焦躁、不迫切、不功利",
        "虽然站在烟熏火燎的灶台前，挥汗如雨，但是他们甘",
        "之如饴",
        "因为他们深知，茶是大自然的恩赐",
        "再怎么极度细致，耐心的对待都是本分",
        "我们传承一种自然的制茶古法，带给您穿越历史的茶",
        "香真韵"
      ],
      downArr: [
        {
          littleImg: require("../statics/img/teastory/2.png")
        },
        { littleImg: require("../statics/img/teastory/3.jpg") },
        { littleImg: require("../statics/img/teastory/4.png") },
        { littleImg: require("../statics/img/teastory/5.png") },
        { littleImg: require("../statics/img/teastory/6.png") },
        { littleImg: require("../statics/img/teastory/7.png") }
      ]
    };
  }
};
</script>
<style scoped>
@import "../statics/css/teastory.css";
</style>