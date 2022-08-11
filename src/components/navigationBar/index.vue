<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-11 15:19:05
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-11 17:24:27
 * @FilePath: \blog-demo\src\components\navigationBar\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-11 15:19:05
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-11 15:36:24
 * @FilePath: \blog-demo\src\components\navigationBar\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
    <div class="navBox">
    <div class="navTitle">柴柴后台管理系统</div>
    <ul class="navContent">
        <li><a href="#">网站流量</a></li>
        <li><a href="#">发布文章</a></li>
        <li><a href="#">分栏调整</a></li>
        <li><a href="#">文章管理</a></li>
        <li><a href="#">权限管理</a></li>
        <li><a href="#">文章审核</a></li>
    </ul>
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
    background-color: #258dc9;
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
        li {
            width: 10vw;
            height: 10vh;
            line-height: 10vh;
            color: #fff;
            font-size: 0.9vw;
        }
    }
}
</style>