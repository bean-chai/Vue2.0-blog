<template>
  <div class="article">
    <header>
      <div class="addressName">chaichai.top</div>
      <div class="routerBox">
        <router-link to="/" class="routerLink">首页</router-link>
        <router-link to="/article" class="routerLink">文章</router-link>
        <router-link to="/login" class="routerLink">后台</router-link>
        <a href="https://marrydream.top" class="routerLink">友链</a>
      </div>
    </header>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><section>
        <div class="blurBox"></div>
        <div class="contentBox">
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121276751?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm1.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">前端自学分享</p>
            <p style="color: #fff" class="createTime">发布时间：2021-11-11</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121294881?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm2.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">编译软件-Vscode（附加背景设置）</p>
            <p style="color: #fff" class="createTime">发布时间：2021-11-13</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121462698?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm3.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">flex布局父项常见属性超详解（附图解）</p>
            <p style="color: #fff" class="createTime">发布时间：2021-11-22</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121533214?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm4.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">JavaScript（API）缓动动画封装</p>
            <p style="color: #fff" class="createTime">发布时间：2021-11-25</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121570823?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm5.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">PC端网页轮播图基本效果(html+css+js)</p>
            <p style="color: #fff" class="createTime">发布时间：2021-11-27</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121592246?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm6.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">Web移动端轮播图基本效果(html+css+js)</p>
            <p style="color: #fff" class="createTime">发布时间：2021-11-28</p>
          </a>
        </div>
      </section></div>
        <div class="swiper-slide"><section>
        <div class="blurBox"></div>
        <div class="contentBox">
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121600151?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm1.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">web移动端click三种延时解决方案</p>
            <p style="color: #fff" class="createTime">发布时间：2021-11-28</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121622479?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm2.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">Snipaste截图软件安装、使用详细教程</p>
            <p style="color: #fff" class="createTime">发布时间：2021-11-30</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121705618?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm3.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">node : 无法将“node”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。解决方案</p>
            <p style="color: #fff" class="createTime">发布时间：2021-12-03</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/121808293?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm4.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">基本语义标签及用法整理</p>
            <p style="color: #fff" class="createTime">发布时间：2021-12-09</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/122498672?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm5.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">用nginx+Xshell+Xftp将静态项目部署到腾讯云服务器</p>
            <p style="color: #fff" class="createTime">发布时间：2022-01-14</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/122521393?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm6.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">nodemon : 无法加载文件 解决办法</p>
            <p style="color: #fff" class="createTime">发布时间：2022-01-16</p>
          </a>
        </div>
      </section>
      </div>
        <div class="swiper-slide">
          <section>
        <div class="blurBox">
        </div>
        <div class="contentBox">
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/122589948?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm1.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">GIT-克隆远程仓库并提交时发生的小问题</p>
            <p style="color: #fff" class="createTime">发布时间：2022-01-19</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/122825737?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm2.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">部署到线上的网页，提示网页不安全的解决办法</p>
            <p style="color: #fff" class="createTime">发布时间：2022-02-08</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/124134746?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm3.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">Web内容可访问性及HTML语义化标签</p>
            <p style="color: #fff" class="createTime">发布时间：2022-04-12</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/124246672?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm4.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">HTML传统布局方式</p>
            <p style="color: #fff" class="createTime">发布时间：2022-04-18</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/125213895?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm5.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">Script引入CDN链接提示net::ERR_FILE_NOT_FOUND问题</p>
            <p style="color: #fff" class="createTime">发布时间：2022-06-10</p>
          </a>
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/126133266?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm6.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">VScode安装了ESlint以后不管用、不生效的解决办法</p>
            <p style="color: #fff" class="createTime">发布时间：2022-08-03</p>
          </a>
        </div>
          </section>
        </div>
        <div class="swiper-slide">
          <section>
        <div class="blurBox">
        </div>
        <div class="contentBox">
          <a
            href="https://blog.csdn.net/bbxx_lzx/article/details/126284897?spm=1001.2014.3001.5501"
            class="articleContent"
            :style="{
              background: 'url(' + require('../assets/mm1.jpeg') + ') ',
              'background-size': 'cover',
              'background-position': 'center center',
              color: '#fff',
            }"
          >
            <p class="contentTitle">Handtrack.Js使用过程及总结分析</p>
            <p style="color: #fff" class="createTime">发布时间：2022-08-11</p>
          </a>
        </div>
          </section>
        </div>
    </div>
</div>
      
  </div>
</template>

<script>
import "swiper/css/swiper.min.css"
import Swiper from "swiper"
 
export default {
components: {},
props: {},
data() {
return {
 
}
},
computed: {},
methods: {
 
},
created() {
   
},
 
mounted() {
 new Swiper ('.swiper-container', {
    direction: 'horizontal',
    speed:1500,
    observer: true,
    observeParents: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  })        
},
}
</script>

<style lang="scss">
  * {
  margin: 0;
  padding: 0;
}
a{
    text-decoration: none;
}
body {
  height: 90vh;
  background-color: rgba(188, 217, 235, 0.4);
}
.swiper-container {
    width: 100%;
    height: 90vh;
    overflow: hidden;
    .swiper-slide {
      height: 90vh !important
    }
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
    bottom: 0;
    right:0;
    width: 100%;
    height: 100vh;
    background: url("../assets/bg3.jpg") repeat;
     animation: bganimation 100s infinite;
    background-size: 500px ;
  }
        @keyframes bganimation {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
  .contentBox {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    text-align: center;
    justify-content: space-between;
    width: 80%;
    height: 70vh;
    margin: 10vh auto;
  }
  .articleContent {
    z-index: 2;
    position: relative;
    width: 23vw;
    height: 30vh;
    border-radius: 55px;
        box-shadow: rgba(0, 0, 0, 0.39) 10px 20px 30px, rgba(0, 0, 0, 0.43) 10px 16px 16px;
    transition: all 0.3s;
    .contentTitle {
      z-index: 9999;
      margin: 80px 10px 60px 40px;
      text-align: left;
      font-weight: 600;
      font-size: 32px;
    }
    .createTime {
      z-index: 9999;
      font-size: 24px;
      text-align: left;
      margin-left: 40px;
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
    background-color: rgba(0, 0, 0, 0.2);
  }
}

@media (max-width:1440px) {
  * {
  margin: 0;
  padding: 0;
}
a{
    text-decoration: none;

}
body {
  height: 100vh;
  background-color: rgba(188, 217, 235, 0.4);
}
.swiper-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .swiper-slide {
      height: 100vh !important
    }
    }
header {
  display: flex;
  justify-content: space-between;
  height: 95px;
  width: 100%;
  line-height: 95px;
  background-color: #000000;
  .addressName {
    font-size: 30px;
    width: 250px;
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
  height: 100vh;
  overflow: hidden;
  .blurBox {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;
    width: 100%;
    height: 100vh;
    background: url("../assets/bg3.jpg") repeat;
     animation: bganimation 30s infinite;
    background-size: 500px ;
  }
        @keyframes bganimation {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
  .contentBox {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    text-align: center;
    justify-content: space-between;
    width: 80%;
    height: 100vh;
    margin: 2vh auto;
  }
  .articleContent {
    z-index: 2;
    position: relative;
    width: 30vw;
    height: 25vh;
    border-radius: 20px;
    margin: 2vh auto;
    box-shadow: rgba(0, 0, 0, 0.39) 10px 20px 30px, rgba(0, 0, 0, 0.43) 10px 16px 16px;
    transition: all 0.3s;
    .contentTitle {
      z-index: 9999;
      // margin: 0px 0 60px 80px;
      margin: 8vh 2vw 4vh 2vw;
      text-align: left;
      font-weight: 600;
      font-size: 18px;
    }
    .createTime {
      z-index: 9999;
      font-size: 14px;
      text-align: left;
      margin-left: 2vw;
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
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
}



</style>
