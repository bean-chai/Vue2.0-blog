/*
 * @Author: fengyuanyao fengyuanyao@fanyu.com 
 * @Date: 2022-08-03 15:33:01
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-08-16 15:51:52
 * @FilePath: \blog-demo\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/article',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/ArticleView/ArticleView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/LoginView/LoginView.vue'),
      // component: () => import(/* webpackChunkName: "about" */ '../views/BackstageView/BackstageView.vue'),
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: () => import('../views/BackstageView/BackstageView.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404Page/404.vue')
    },
    { path: '*', redirect: '/404', hidden: true }
  ],
  mode: 'history',
  base: process.env.BASE_URL,
})
router.beforeEach(function (to, from, next) {
  if (to.path === '/backstage') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
  if (from.path === '/backstage') {
    if (token) {
      localStorage.removeItem('token')
      next()
    } else {
      next()
    }
  }
})

export default router
