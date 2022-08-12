<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-11 16:27:54
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-12 15:51:34
 * @FilePath: \blog-demo\src\views\BackstageView\navigationContent\todayFlow.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="todayBox">
    <div class="shadowBox">
    <div class="today1">
      <div class="today1Title">网站苟活</div>
      <div class="today1Box"><div class="yearsBox">1</div>年<div class="monthBox">4</div>月<div class="dayBox">23</div>日</div>
    </div>
    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.todayBox{
  width: 90vw;
  height: 90vh;
  overflow: hidden;
  background: url('@/assets/backBG1.jpg') no-repeat;
  background-position: center center;
  background-size: cover;
  .shadowBox{
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 100%;
    height: 100%;
    background: rgba(29, 29, 29, 0.3);
  }
  .today1{
    z-index: 9999;
      width: 34vw;
      background: rgba(95, 182, 240, 0.6);
      border-radius: 3em;
      box-shadow: 15px 15px 15px rgba(29, 29, 29, 0.8);
      height: 24vh;
      margin: 8vh 0 0 4vw;
      overflow: hidden;
      .today1Title{
        margin-top: 1vh;
        font-size: 2rem;
        color: #fff;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 10px;
        text-shadow: 10px 10px 10px rgb(158, 158, 158,0.8)
      }
    .today1Box{
      line-height: 15vh;
      border-radius: 3em;
      // padding-left: 2vw;
      display: flex;
      flex-wrap: nowrap;
      font-size: 3rem;
      font-weight: 600;
      color: #fff;
      margin-top: 2vh;
      text-shadow: 10px 10px 10px rgb(158, 158, 158,0.8);
      .yearsBox,
      .monthBox,
      .dayBox{
        border: 2px solid #fff;
        border-radius: 25px;
        padding: 0 2.5vw;
        font-size: 4rem;
        margin:0 1vw;
      }
    }
  }
}
</style>