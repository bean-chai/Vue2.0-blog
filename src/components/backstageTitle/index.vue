<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-11 15:41:11
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-11 16:24:19
 * @FilePath: \blog-demo\src\components\backstageTitle\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="titleBox">
    <div class="avatarBox">
        <div class="statusLight"></div>
    </div>
    
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss">
.titleBox{
    box-sizing: border-box;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    position: absolute;
    right: 0;
    top: 0;
    width: 90vw;
    height: 10vh;
    background-color: #258dc9;
    .avatarBox{
        position: absolute;
        right: 1vw;
        margin-top: 1vh ;
        width: 8vh;
        height: 8vh;
        border-radius: 50%;
        background: url('@/assets/avatar1.webp') no-repeat;
        background-position: center center;
        background-size: cover;
        border: 1px solid #000;
        .statusLight{
            width: 0.8vw;
            height: 0.8vw;
            position: absolute;
            right: 0;
            top: 6vh;
            background: rgb(148, 236, 16);
            border-radius: 50%;
        }
    }
}
</style>