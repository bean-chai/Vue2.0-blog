<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-10 10:15:40
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-11 16:39:47
 * @FilePath: \blog-demo\src\views\BackstageView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="backBox">
    <NavigationBar></NavigationBar>
    <BackstageTitle></BackstageTitle>
    <TodayFlow></TodayFlow>
    <PostArticle v-show="false"></PostArticle>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigationBar/index.vue'
import BackstageTitle from '@/components/backstageTitle/index.vue'
import TodayFlow from '@/components/todayFlow.vue'
import PostArticle from '@/components/postArticle.vue'
export default {
  components:{
    NavigationBar,
    BackstageTitle,
    TodayFlow,
    PostArticle
  }
}
</script>

<style lang="scss">
.backBox {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>