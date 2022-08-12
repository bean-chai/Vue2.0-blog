<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-11 15:19:05
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-12 17:17:14
 * @FilePath: \blog-demo\src\views\BackstageView\navigationBar\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
    <div class="navBox">
        <div class="shadowBox">
    <div class="navTitle">柴柴后台管理系统</div>
    <ul class="navContent">
        <li><a class="contentItem iconfont icon-yonghuliang" href="#">网站信息</a></li>
        <li><a class="contentItem iconfont icon-fuwenben" href="#">发布文章</a></li>
        <li><a class="contentItem iconfont icon-fenleipaixu1" href="#">分栏调整</a></li>
        <li><a class="contentItem iconfont icon-bianji" href="#">文章管理</a></li>
        <li><a class="contentItem iconfont icon-jiqiren" href="#">权限管理</a></li>
        <li><a class="contentItem iconfont icon-tupu" href="#">文章审核</a></li>
    </ul>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
a{
    color: #fff;
    text-decoration: none;
}
.navBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 10vw;
    height: 100vh;
    background: url('@/assets/bgc2.jpg') repeat;
    background-size: 800px;
.shadowBox {
  width: 100%;
  height: 100%;
  background-color: rgba(28, 108, 155,  0.712);
  box-sizing: border-box;
}
.navTitle{
  box-sizing: border-box;
  width: 10vw;
  height: 10vh;
  line-height: 10vh;
  text-align: center;
  color: #fff;
  font-size: 1vw;
  font-weight: 600;
  letter-spacing: 3px;
  border-bottom: 3px solid #fff;
}
.navContent{
  width: 10vw;
  height: 90vh;
  text-align: center;
  .contentItem {
      width: 10vw;
      height: 10vh;
      font-size: 1.3rem;
      font-weight: 900;
      line-height: 10vh;
      letter-spacing: 4px;
      color: #fff;
  }
}
}
</style>