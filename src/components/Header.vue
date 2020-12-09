<template>
<div class="header">
  <div class="nav">
    <div class="logo">
      <img src="../assets/img/index/log.png"/>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#333"
      active-text-color="#005bc2" router>
      <el-menu-item index="/">网站首页</el-menu-item>
      <el-menu-item index="/page/about">关于我们</el-menu-item>
      <el-menu-item index="/page/service">服务项目</el-menu-item>
      <el-menu-item index="/page/production">生产实力</el-menu-item>
      <el-menu-item index="/page/develop">人才招聘</el-menu-item>
      <el-menu-item index="/page/contact">联系我们</el-menu-item>
    </el-menu>

  </div>
</div>
</template>

<script>
    export default {
        components: {
            // Logo,
            name:"Header"
        },
        data() {
            return {
                activeIndex: '1',

            };

        },

    }
</script>

<style lang="scss" scoped>

</style>
