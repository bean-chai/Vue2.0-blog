<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-11 15:41:11
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-12 17:06:54
 * @FilePath: \blog-demo\src\views\BackstageView\backstageTitle\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div class="titleBox">
    <div class="shadowBox">
      <div class="functionBtn">
        <div class="exit iconfont icon-kaiguan" @click="handleExit">
          <a href="#">退出后台</a>
        </div>
        <div class="all iconfont icon-quanping" @click="handleAll">
          <a href="#">全屏</a>
        </div>
      </div>
      <div class="avatarBox">
        <div
          class="statusLight"
          @click="lightChange"
          :style="{ background: this.background }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      userStatus: true,
      background: "#9fe080",
    };
  },
  methods: {
    lightChange() {
      if (this.flag === true) {
        this.background = "red";
        this.flag = false;
      } else {
        this.background = "#9fe080";
        this.flag = true;
      }
    },
    handleAll() {
      document.body.requestFullscreen();
    },
    handleExit() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.titleBox {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  position: absolute;
  right: 0;
  top: 0;
  width: 90vw;
  height: 10vh;
  z-index: -1;
  background: url("@/assets/bgc2.jpg") repeat;
  background-size: 800px;

  overflow: hidden;

  .shadowBox {
    width: 100%;
    height: 100%;
    background-color: rgba(23, 91, 131, 0.712);
    box-sizing: border-box;
  }
  .functionBtn {
    height: 10vh;
    display: flex;
    width: 82vw;
    font-size: 1.5rem;
    justify-content: flex-end;
    line-height: 10vh;
    color: #fff;
    font-weight: 900;
    .exit {
      z-index: 99999;
      font-size: 1.25rem;
      letter-spacing: 3px;
    }
    .all {
      z-index: 99999;
      font-size: 1.25rem;
      margin-left: 3vw;
      letter-spacing: 3px;
      margin-right: 30px;
    }
  }
  .avatarBox {
    position: absolute;
    right: 1vw;
    top: 1.5vh;
    z-index: 99999;
    // margin-top: 1.5vh;
    // margin-right: 1vw;
    width: 7vh;
    height: 7vh;
    border-radius: 50%;
    background: url("@/assets/avatar1.webp") no-repeat;
    background-position: center center;
    background-size: cover;
    border: 1px solid #000;
    .statusLight {
      cursor: pointer;
      width: 0.8vw;
      height: 0.8vw;
      position: absolute;
      right: 0;
      top: 6vh;
      border-radius: 50%;
    }
  }
}
</style>