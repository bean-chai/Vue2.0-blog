<template>
  <div class="backBox">
    <NavigationBar></NavigationBar>
    <BackstageTitle></BackstageTitle>
    <TodayFlow></TodayFlow>
    <PostArticle v-show="false"></PostArticle>
  </div>
</template>

<script>
import NavigationBar from "./navigationBar/index.vue";
import BackstageTitle from "./backstageTitle/index.vue";
import TodayFlow from "./navigationContent/todayFlow.vue";
import PostArticle from "./navigationContent/postArticle.vue";
export default {
  component: {},
  components: {
    NavigationBar,
    BackstageTitle,
    TodayFlow,
    PostArticle,
  },
};
</script>

<style lang="scss">
body {
  background: #000;
  user-select: none;
}
.backBox {
  z-index: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border-radius: 3em 3em;
}
</style>
