<template class="mouseHover">
  <div class="home">
    <header>
      <div class="addressName">chaichai.top</div>
      <div class="routerBox">
        <router-link to="/" class="routerLink">首页</router-link>
        <router-link to="/article" class="routerLink">文章</router-link>
        <router-link to="/login" class="routerLink">后台</router-link>
        <a href="https://marrydream.top" class="routerLink">友链</a>
      </div>
    </header>
    <div id="hello">
        <h1>welecome to chaichai.top</h1>
    </div>
    <div class="homeBtn">
      <img src="@/assets/homeBtn.webp" class="btnPic" />
      <div class="shadowBox">
        <div>
          <span class="shadowText">柴柴万岁</span>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span style="color: #fff; font-size: 19px">© 2022 Chai chai</span>
      <span
        ><a
          style="color: #fff; font-size: 19px"
          >滇ICP备2022000365号</a
        ></span
      >
    </div>
  </div>
</template>
<script  type="text/javascript">
!(function (e, t, a) {
  function r() {
    for (var e = 0; e < s.length; e++)
      s[e].alpha <= 0
        ? (t.body.removeChild(s[e].el), s.splice(e, 1))
        : (s[e].y--,
          (s[e].scale += 0.004),
          (s[e].alpha -= 0.013),
          (s[e].el.style.cssText =
            "left:" +
            s[e].x +
            "px;top:" +
            s[e].y +
            "px;opacity:" +
            s[e].alpha +
            ";transform:scale(" +
            s[e].scale +
            "," +
            s[e].scale +
            ") rotate(45deg);background:" +
            s[e].color +
            ";z-index:99999"));
    requestAnimationFrame(r);
  }
  function n() {
    var t = "function" == typeof e.onclick && e.onclick;
    e.onclick = function (e) {
      t && t(), o(e);
    };
  }
  function o(e) {
    var a = t.createElement("div");
    (a.className = "heart"),
      s.push({
        el: a,
        x: e.clientX - 5,
        y: e.clientY - 5,
        scale: 1,
        alpha: 1,
        color: c(),
      }),
      t.body.appendChild(a);
  }
  function i(e) {
    var a = t.createElement("style");
    a.type = "text/css";
    try {
      a.appendChild(t.createTextNode(e));
    } catch (t) {
      a.styleSheet.cssText = e;
    }
    t.getElementsByTagName("head")[0].appendChild(a);
  }
  function c() {
    return (
      "rgb(" +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      ")"
    );
  }
  var s = [];
  (e.requestAnimationFrame =
    e.requestAnimationFrame ||
    e.webkitRequestAnimationFrame ||
    e.mozRequestAnimationFrame ||
    e.oRequestAnimationFrame ||
    e.msRequestAnimationFrame ||
    function (e) {
      setTimeout(e, 1e3 / 60);
    }),
    i(
      ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
    ),
    n(),
    r();
})(window, document);
export default {
  name: "HomeView",
};
</script>

<style scoped lang="scss">
  * {
          // href="https://beian.miit.gov.cn/#/Integrated/index"备案
  margin: 0;
  padding: 0;
  user-select: none;
}

 #hello h1 {
  font-size: 100px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-clip: text;
  text-shadow: 15px 15px 15px rgb(158, 158, 158,0.8)
}
html {
  width: 100%;
  height: 100%;
  cursor: url("@/assets/22.cur"), default;
}
a {
  text-decoration: none;
}
.home {
  position: relative;
  background: url("@/assets/bgc.jpeg") no-repeat;
  background-size: 100% 122vh;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  header {
    display: flex;
    justify-content: space-between;
    height: 95px;
    width: 100%;
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
  .welecomeText {
    line-height: calc(100vh - 180px);
    text-align: center;
    font-weight: 600;
    color: #fff;
    font-size: 50px;
  }
  .homeBtn {
    z-index: 9;
    border: 0;
    position: absolute;
    cursor: pointer;
    right: 5px;
    bottom: 5px;
    width: 100px;
    height: 100px;
    transition: width 2s;
    border-radius: 50%;
    text-align: bottom;
  }
  .btnPic {
    position: absolute;
    width: 100px;
    height: 100px;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 30px solid #fff;
  }
  .shadowBox {
    z-index: -1;
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: 100px;
    height: 100px;
    font-size: 1px;
    color: rgba(40, 44, 52, 0);
    background-color: rgba(40, 44, 52, 0.6);
    border-radius: 50%;
    transition: all 0.6s;
    transition-timing-function: ease-in-out;
  }
  .btnPic:hover {
    border: 30px solid #fff;
  }
  .btnPic:hover + .shadowBox {
    transform: scale(10.5);
  }
  .shadowBox:hover {
    transform: scale(10.5);
    font-size: 1px;
    color: white;
  }
  .shadowText {
    display: block;
    height: 30px;
    font-size: 1px;
    padding: 20px 35px 0 0;
  }
  .copyright {
    position: absolute;
    height: 40px;
    width: 100%;
    bottom: 8px;
    text-align: center;
    span {
      height: 20px;
      display: block;
    }
  }
}

@media (max-width:1440px){
  * {
  margin: 0;
  padding: 0;
  user-select: none;
}
 #hello h1 {
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-clip: text;
  text-shadow: 5px 5px 5px rgb(158, 158, 158,0.8)
}
a {
  text-decoration: none;
}
.home {
  position: relative;
  background: url("@/assets/bgc.jpeg") no-repeat;
  background-position: 50% 10%;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
  .homeBtn {
    z-index: 9;
    border: 0;
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 0;
    height: 0;
    border-radius: 50%;
  }
  .btnPic {
    position: absolute;
    width: 5vw;
    height: 5vw;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 1vw solid #fff;
  }
  .copyright {
    position: absolute;
    height: 40px;
    width: 100%;
    bottom: 8px;
    text-align: center;
    span {
      height: 20px;
      display: block;
    }
  }
}
}



</style>
