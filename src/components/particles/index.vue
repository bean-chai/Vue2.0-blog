<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-09 08:54:47
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-09 10:55:06
 * @FilePath: \blog-demo\src\components\particles\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
    <div class="particles-js-box">
        <div id="particles-js"></div>
    </div>
</template>

<script>
    /* eslint-disable */
    import particlesJs from "particles.js";
    import particlesConfig from "./particles.json";
    export default {
        data() {
            return {};
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                particlesJS("particles-js", particlesConfig);
                document.body.style.overflow = "hidden";
            }
        }
  } ;
</script>

<style scoped>
    .particles-js-box{
        position:fixed;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        z-index:0; 
    }
    #particles-js{
        background-size: 100% 100%;
        filter: blur(0.5px);
        width: 100%;
        height: 100%;
    }
 
</style>