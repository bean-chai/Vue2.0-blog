<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-10 10:15:40
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-12 17:10:37
 * @FilePath: \blog-demo\src\views\BackstageView\BackstageView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="backBox">
    <NavigationBar></NavigationBar>
    <BackstageTitle></BackstageTitle>
    <TodayFlow v-show="false"></TodayFlow>
    <PostArticle></PostArticle>
  </div>
</template>

<script>
import NavigationBar from "./navigationBar/index.vue";
import BackstageTitle from "./backstageTitle/index.vue";
import TodayFlow from "./navigationContent/todayFlow.vue";
import PostArticle from "./navigationContent/postArticle.vue";
export default {
  component: {},
  components: {
    NavigationBar,
    BackstageTitle,
    TodayFlow,
    PostArticle,
  },
};
</script>

<style lang="scss">
body {
  background: #000;
  user-select: none;
}
.backBox {
  z-index: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border-radius: 3em 3em;
}
</style>
