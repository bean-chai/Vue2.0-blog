<template>
  <div class="login">
    <div class="loginBox">
      <div class="loginText">
        <router-link to="/" class="backBtn">返回</router-link>
        <div class="loginName">LOGIN</div>
        <div class="inputBox">
          <input
            type="text"
            :placeholder="this.placeholder1"
            class="Input"
            v-model.trim="Username"
            @focus="handleFoucus1"
            @blur="handleFoucusout1"
          />
        </div>
        <div class="inputBox">
          <input
            type="password"
            :placeholder="this.placeholder2"
            class="Input"
            v-model.trim="Password"
            @focus="handleFoucus2"
            @blur="handleFoucusout2"
          />
        </div>
        <button class="submitBtn" @click="loginClick">登录</button>
      </div>
      <div class="loginimgBox">
        <div class="title">chaichai-后台</div>
        <div class="shadowbox"></div>
      </div>
    </div>
    <Particles class="bgBox"></Particles>
  </div>
</template>
<script>
import Particles from "@/components/particles/index.vue";
export default {
  components: { Particles },
  data() {
    return {
      placeholder1: "Username",
      placeholder2: "Password",
      Username: "",
      Password: "",
    };
  },
  methods: {
    handleFoucus1() {
      this.placeholder1 = "";
    },
    handleFoucus2() {
      this.placeholder2 = "";
    },
    handleFoucusout1() {
      this.placeholder1 = "Username";
    },
    handleFoucusout2() {
      this.placeholder2 = "Password";
    },
    loginClick() {
      if (this.Username === "chaichai" && this.Password === "111111") {
        //存token
        localStorage.setItem("token", "Bearer xxx");
        //跳转到后台主页
        this.$router.push("/backstage");
      } else {
        localStorage.removeItem("token");
      }
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
input {
  resize: none;
}
a {
  text-decoration: none;
}
body {
  font-family: arial, sans-serif;
  background-image: linear-gradient(125deg, #258dc9, #0093e9, #80d0c7, #65fdf0);
  background-size: 400%;
  animation: bganimation 40s infinite;
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
*:focus {
  outline: none;
}
input::input-placeholder {
  color: #ccc !important;
  letter-spacing: 2px !important;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #ccc !important;
  letter-spacing: 2px !important;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #ccc !important;
  letter-spacing: 2px !important;
}
::-moz-placeholder {
  /* Mozilla Firefox 19  */
  color: #ccc !important;
  letter-spacing: 2px !important;
}
:-ms-input-placeholder {
  /* Internet Explorer 10  */
  color: #ccc !important;
  letter-spacing: 2px !important;
}

.bgBox {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 0;
}
.backBtn {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  color: #fff;
}
.loginBox {
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  z-index: 999;
  width: 70vw;
  height: 60vh;
  overflow: hidden;
  background-color: rgba(110, 110, 110, 0.4);
  box-shadow: rgba(0, 0, 0, 0.15) 12.4px 12.4px 13.2px;
}
.loginName {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 8px;
  color: #fff;
  background-clip: text;
}
.inputBox {
  margin: 50px auto;
}
.Input {
  display: inline-block;
  width: 20vw;
  height: 5vh;
  font-size: 20px;
  text-align: center;
  border: 0;
  margin: 20px auto;
  background-color: transparent;
  color: #fff;
  transition: 1s ease-out;
  position: relative;
  border-bottom: 3px solid #fff;
}
.submitBtn {
  width: 10vw;
  height: 5vh;
  border-radius: 25px;
  font-size: 20px;
  color: #fff;
  border: 3px solid #fff;
  background-image: linear-gradient(
    to right,
    #258dc9 0%,
    #00abd5 51%,
    #34deab 100%
  );
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
}
.submitBtn:hover {
  background-position: center center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
.loginText {
  position: relative;
  flex: 1;
  width: 30vw;
  padding: 60px;
}
.shadowbox {
  width: 30vw;
  height: 60vh;
  background-color: rgba(110, 110, 110, 0.1);
}
.loginimgBox {
  flex: 1;
  width: 30vw;
  height: 60vh;
  overflow: hidden;
  background: url("https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/517dfb9446bd453a3e93eb2dfe0437dc.jpeg")
    no-repeat center center;
  background-size: 100% 100%;
  flex: 0 0 auto;
}
.title {
  background-color: rgba(110, 110, 110, 0.3);
  text-shadow: 0 0 3px skyblue;
  letter-spacing: 5px;
  font-size: 40px;
  color: #fff;
  font-weight: 600;
  height: 60vh;
  line-height: 60vh;
  animation: titlemation 3s linear 1;
}
@keyframes titlemation {
  0% {
    font-size: 20px;
  }
  100% {
    font-size: 40px;
  }
}

@media (max-width: 1440px) {
  * {
    margin: 0;
    padding: 0;
  }
  input {
    resize: none;
  }
  a {
    text-decoration: none;
  }
  *:focus {
    outline: none;
  }
  input::input-placeholder {
    color: #ccc !important;
    letter-spacing: 2px !important;
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #ccc !important;
    letter-spacing: 2px !important;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ccc !important;
    letter-spacing: 2px !important;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19  */
    color: #ccc !important;
    letter-spacing: 2px !important;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10  */
    color: #ccc !important;
    letter-spacing: 2px !important;
  }
  body {
    font-family: arial, sans-serif;
    background-image: linear-gradient(
      125deg,
      #258dc9,
      #0093e9,
      #80d0c7,
      #65fdf0
    );
    background-size: 400%;
    animation: bganimation 40s infinite;
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
  .bgBox {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .backBtn {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 20px;
    color: #fff;
  }
  .loginBox {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    border-radius: 25px;
    z-index: 999;
    width: 70vw;
    height: 60vh;
    overflow: hidden;
    background-color: rgba(110, 110, 110, 0.4);
    box-shadow: rgba(0, 0, 0, 0.15) 12.4px 12.4px 13.2px;
  }
  .loginName {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 8px;
    color: #fff;
    background-clip: text;
  }
  .inputBox {
    margin: 10px auto;
  }
  .Input {
    display: inline-block;
    width: 40vw;
    height: 5vh;
    font-size: 12px;
    text-align: center;
    border: 0;
    margin: 20px auto;
    background-color: transparent;
    color: #fff;
    transition: 1s ease-out;
    position: relative;
    border-bottom: 3px solid #fff;
  }
  .submitBtn {
    width: 40vw;
    height: 5vh;
    border-radius: 25px;
    font-size: 20px;
    color: #fff;
    border: 3px solid #fff;
    background: #258dc9;
    cursor: pointer;
    margin-top: 30px;
  }
  .loginText {
    position: relative;
    flex: 1;
    width: 30vw;
    padding: 60px;
  }
  .shadowbox {
    width: 30vw;
    height: 60vh;
    background-color: rgba(110, 110, 110, 0.4);
  }
  .loginimgBox {
    flex: 0;
    overflow: hidden;
  }
}
</style>