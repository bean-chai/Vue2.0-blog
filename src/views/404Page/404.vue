<template>
<div align="center" style='font-family:"微软雅黑"'>
    <img src="https://s1.ax1x.com/2022/08/17/vBaHcF.jpg" border="0" height="" style="margin:10vh 0 0 0"/>
    <br>
    找不到这个页面啊！是不是打错啦!<br><br>
    <el-button @click="handleBack">返回首页</el-button>
    <br><br> &copy; chaichaisocute.top
</div>
</template>

<script>
export default{
    methods:{
        handleBack() {
            this.$router.push("/")
        }
    }
}
</script>