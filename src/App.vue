<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-03 15:33:01
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-12 09:27:36
 * @FilePath: \blog-demo\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div id="app">
    <router-view />
    <audio
      src="@/assets/bgmusic.mp3"
      id="aud"
      autoplay="autoplay"
      controls="controls"
      preload="auto"
    ></audio>

    <!-- <router-view /> -->
    <!-- <div class="star" style="width: 200px; height: 300px; background-color: red;"> -->
    <!-- </div> -->
  </div>
</template>
<script>
// Vue.component("todayFlow", {});
export default {
  name: "App",

  created() {
    window.L2Dwidget
      //此处是对点击人物时触发事件的监听
      .on("*", (name) => {})
      //对人物的属性配置
      .init({
        pluginRootPath: "../live2dw/", //人物文件夹的位置
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-koharu/assets/",
        model: {
          jsonPath:
            "../live2dw/live2d-widget-model-koharu/assets/koharu.model.json",
        },
        dialog: {
          enable: true, //是否开启对话框
          script: {
            //每20s，显示一言（调用一言Api返回的句子）
            "every idle 20s": "$hitokoto$",
            //触摸到class='star'对象,将会展示的文字
            "hover .star": "星星在天上而你在我心里 (*/ω＼*)",
            //触摸到身体
            "tap body": "害羞⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄",
            //触摸到头部
            "tap face": "~~",
          },
        },
        display: {
          //人物的属性配置
          position: "left",
          width: 250,
          height: 700,
          hOffset: 50, // 横向偏移
          vOffset: -220, // 纵向偏移
        },
        mobile: {
          show: false, //是否在移动端展示
          scale: 0.5, //t透明度
        },
      });
  },
};
</script>
<!-- <script>
    function musicAutoPlay(){
    let music = document.getElementById('aud')//获取audio
    if (music.paused) {//判断一下paused（pused为真是禁用的）
        music.play()//调用播放
    }
}
setInterval(musicAutoPlay, 1);//必须使用一个时间函数 ，不触发的情况下还是报错


  
</script> -->
<!-- <script type="text/javascript">
    window.oncontextmenu=function(){
      alert('想看我源码？超捏妈！');
      return false;
      } 
    window.onkeydown = window.onkeyup = window.onkeypress = function () { 
      alert('想看我源码？超捏妈！');
        window.event.returnValue = false; 
        return false; 
    }
</script> -->
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
audio {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  right: 0;
  width: 13vw;
}
html {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style>
@font-face {
  font-family: "iconfont"; /* Project id 3583917 */
  src: url("//at.alicdn.com/t/c/font_3583917_mcgnr7uedpf.woff2?t=1660267502622")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3583917_mcgnr7uedpf.woff?t=1660267502622")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3583917_mcgnr7uedpf.ttf?t=1660267502622")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-qiehuan:before {
  content: "\e6d5";
}

.icon-jianpan:before {
  content: "\e6d6";
}

.icon-renwu:before {
  content: "\e6d7";
}

.icon-shaixuan:before {
  content: "\e6d8";
}

.icon-shangchuan2:before {
  content: "\e6d9";
}

.icon-shangjiantou:before {
  content: "\e6da";
}

.icon-jiqiren:before {
  content: "\e6db";
}

.icon-shizhong:before {
  content: "\e6dc";
}

.icon-shanchuxian:before {
  content: "\e6dd";
}

.icon-shanchu:before {
  content: "\e6de";
}

.icon-shijian:before {
  content: "\e6df";
}

.icon-shangdian:before {
  content: "\e6e0";
}

.icon-meiridati:before {
  content: "\e6a6";
}

.icon-wenku:before {
  content: "\e6a7";
}

.icon-tupu:before {
  content: "\e6a8";
}

.icon-yonghuliang:before {
  content: "\e6a9";
}

.icon-xuexijihuashijian:before {
  content: "\e6aa";
}

.icon-caidanzhedie:before {
  content: "\e6ac";
}

.icon-bianji:before {
  content: "\e6ad";
}

.icon-bianzu:before {
  content: "\e6ae";
}

.icon-caidandakai:before {
  content: "\e6af";
}

.icon-danwenben:before {
  content: "\e6b0";
}

.icon-chuangkou:before {
  content: "\e6b1";
}

.icon-ditu:before {
  content: "\e6b2";
}

.icon-duowenben:before {
  content: "\e6b3";
}

.icon-bingzhuangtu:before {
  content: "\e6b4";
}

.icon-cai:before {
  content: "\e6b5";
}

.icon-fangda:before {
  content: "\e6b6";
}

.icon-fenleipaixu1:before {
  content: "\e6b7";
}

.icon-fenleipaixu2:before {
  content: "\e6b8";
}

.icon-fankui:before {
  content: "\e6b9";
}

.icon-banbenduibi:before {
  content: "\e6ba";
}

.icon-gouxuan1:before {
  content: "\e6bb";
}

.icon-fenxiang:before {
  content: "\e6bc";
}

.icon-fengexian:before {
  content: "\e6bd";
}

.icon-dianhua:before {
  content: "\e6be";
}

.icon-fuzhi:before {
  content: "\e6bf";
}

.icon-gouxuan2:before {
  content: "\e6c0";
}

.icon-fuwenben:before {
  content: "\e6c1";
}

.icon-huakuai:before {
  content: "\e6c2";
}

.icon-guanbi1:before {
  content: "\e6c3";
}

.icon-huida:before {
  content: "\e6c4";
}

.icon-jinzhi:before {
  content: "\e6c5";
}

.icon-guanbi:before {
  content: "\e6c6";
}

.icon-jiazai:before {
  content: "\e6c7";
}

.icon-jianzhu:before {
  content: "\e6c8";
}

.icon-jingshi:before {
  content: "\e6c9";
}

.icon-gongju:before {
  content: "\e6ca";
}

.icon-jinzhiyuyin:before {
  content: "\e6cb";
}

.icon-lingdang:before {
  content: "\e6cc";
}

.icon-kaiguan:before {
  content: "\e6cd";
}

.icon-quanping:before {
  content: "\e6ce";
}

.icon-pinglun:before {
  content: "\e6cf";
}

.icon-lianjie:before {
  content: "\e6d0";
}

.icon-guanbiyanjing:before {
  content: "\e6d1";
}

.icon-pingjia:before {
  content: "\e6d2";
}

.icon-lanya:before {
  content: "\e6d3";
}

.icon-riqi:before {
  content: "\e6d4";
}
</style>
</style>
