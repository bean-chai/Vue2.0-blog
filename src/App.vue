<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-03 15:33:01
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-05 15:02:41
 * @FilePath: \blog-demo\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <div id="app">
    <router-view/>
    <!-- <router-view /> -->
		<!-- <div class="star" style="width: 200px; height: 300px; background-color: red;"> -->

		<!-- </div> -->
  </div>
</template>
<script>
	export default {
		name: 'App',
		created() {
			window.L2Dwidget
				//此处是对点击人物时触发事件的监听
				.on('*', (name) => {

				})
				//对人物的属性配置
				.init({
					pluginRootPath: '../live2dw/', //人物文件夹的位置
					pluginJsPath: 'lib/',
					pluginModelPath: 'live2d-widget-model-koharu/assets/',
					model: {
						jsonPath: '../live2dw/live2d-widget-model-koharu/assets/koharu.model.json'
					},
					dialog: {
						enable: true, //是否开启对话框
						script: {
							//每20s，显示一言（调用一言Api返回的句子）
							'every idle 20s': '$hitokoto$',
							//触摸到class='star'对象,将会展示的文字
							'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
							//触摸到身体
							'tap body': '害羞⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
							//触摸到头部
							'tap face': '~~'
						}
					},
					display: { //人物的属性配置
						position: 'left',
						width: 250,
						height: 700,
						hOffset: 100, // 横向偏移
						vOffset: -220 // 纵向偏移
					}, 
					mobile: {
						show: true, //是否在移动端展示
						scale: 0.5 //t透明度
					}
				});
		}

	}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
	margin: 0;
	width: 100%;
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
