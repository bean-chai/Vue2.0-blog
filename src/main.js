/*
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-03 15:33:01
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-12 09:07:04
 * @FilePath: \blog-demo\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
 */
import App from './App.vue'
import Vue from 'vue';
import ElementUI from 'element-ui';
import { ElementTiptapPlugin } from 'element-tiptap';
// 引入 ElementUI 样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入 import element-tiptap 样式
import 'element-tiptap/lib/index.css';
import router from '@/router/index.js'

// 安装 ElementUI 插件
Vue.use(ElementUI);
// 安装 element-tiptap 插件
Vue.use(ElementTiptapPlugin, {
  lang: 'zh', // 设置语言为中文
});
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
