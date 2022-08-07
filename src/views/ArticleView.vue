<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-03 15:33:01
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-05 15:22:41
 * @FilePath: \blog-demo\src\views\AboutView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="article">
    <header>
      <div class="addressName">chaichai.top</div>
      <div class="routerBox">
        <router-link to="/" class="routerLink">首页</router-link>
        <router-link to="/article" class="routerLink">文章</router-link>
        <a href="https://marrydream.top" class="routerLink">友链</a>
      </div>
    </header>
    <main>
      <section>
        <div class="blurBox"></div>
        <div class="contentBox">
          <a
            href="www.baidu.com"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm1.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">母猪的产后护理</p>
            <p style="color: #fff" class="createTime">发布时间：2022-8-6</p>
          </a>
          <a
            href="www.baidu.com"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm2.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">母猪的产后护理</p>
            <p style="color: #fff" class="createTime">发布时间：2022-8-6</p>
          </a>
          <a
            href="www.baidu.com"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm3.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">母猪的产后护理</p>
            <p style="color: #fff" class="createTime">发布时间：2022-8-6</p>
          </a>
          <a
            href="www.baidu.com"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm4.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">母猪的产后护理</p>
            <p style="color: #fff" class="createTime">发布时间：2022-8-6</p>
          </a>
          <a
            href="www.baidu.com"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm5.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">母猪的产后护理</p>
            <p style="color: #fff" class="createTime">发布时间：2022-8-6</p>
          </a>
          <a
            href="www.baidu.com"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm6.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">母猪的产后护理</p>
            <p style="color: #fff" class="createTime">发布时间：2022-8-6</p>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  background-color: rgba(188, 217, 235, 0.4);
}
header {
  display: flex;
  justify-content: space-between;
  height: 95px;
  width: 100%;
  background-color: #000000;
  .addressName {
    font-size: 30px;
    width: 250px;
    height: 95px;
    line-height: 95px;
    font-weight: 600;
    color: #fff;
  }
  .routerBox {
    display: flex;
    justify-content: space-between;
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
section {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;

  .blurBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90vh;
    // filter: blur(3.5px);
    background: url("../assets/bg3.jpg") repeat;
    background-size: 500px;
  }
  .contentBox {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    width: 80%;
    height: 70vh;
    margin: 10vh auto;
  }
  .articleContent {
    z-index: 2;
    position: relative;
    width: 480px;
    height: 300px;
    border-radius: 55px;
    box-shadow: 10px 10px 20px #8498a5;
    transition: all 0.3s;
    .contentImg {
      width: 450px;
      height: 300px;
      border-radius: 10%;
    }
    .contentTitle {
      z-index: 9999;
      margin: 80px 0 60px 80px;
      text-align: left;
      font-weight: 600;
      font-size: 32px;
    }
    .createTime {
      z-index: 9999;
      font-size: 24px;
      text-align: left;
      margin-left: 80px;
    }
  }
  .articleContent:hover {
    transform: scale(1.1);
  }
  .createTime::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    border-radius: 55px;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
