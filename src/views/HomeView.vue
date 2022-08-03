<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-03 15:33:01
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-03 16:35:06
 * @FilePath: \blog-demo\src\views\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="home">
   <header>
    <div class="addressName">chaichai.top</div>    
    <div class="routerBox">
      <router-link to="/" class="routerLink">首页</router-link>
      <router-link to="/about" class="routerLink">文章</router-link>
      <a href="https://marrydream.top" class="routerLink">友链</a>
    </div>
   </header>
   <nav class="welecomeText">welecome to chaichai.top</nav>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style lang="scss">
.home {
   background: url('@/assets/bgc.jpeg') no-repeat;
   width: 100%;
  height: 100vh;
header {
  display: flex;
  justify-content:space-between;
  height: 95px;
  width: 100%;
  .addressName{
    font-size: 30px;
    width: 250px;
    height: 95px;
    line-height: 95px;
    font-weight: 600;
    color: #fff;
  }
  a {
    text-decoration: none;
  }
  .routerBox{
    display: flex;
    justify-content:space-between;
    width: 200px;
    margin-right: 30px;
    .routerLink {
    font-weight: 600;
    color: #fff;
    height: 95px;
    line-height: 95px;
   }
  }
 }
 .welecomeText {
  line-height: calc(100vh - 180px);
  text-align: center;
  font-weight: 600;
  color: #fff;
  font-size: 50px;
 }
}

</style>
