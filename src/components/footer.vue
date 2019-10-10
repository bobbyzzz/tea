<template>
  <div class="footer">
    <p v-for="(item, index) in footerArr" :key="index">
        {{item.foot}}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerArr: [
        { foot: "客服热线：(周一至周五 9:00-18:00)" },
        { foot: "000-000-0000" },
        { foot: "客服电话：020-000000" },
        { foot: "客服 QQ：258506508" },
        { foot: "©2019 网站样板—茶叶 版权所有" },
      ]
    };
  }
};
</script>
<style scoped>
@import "../statics/css/footer.css";
</style>