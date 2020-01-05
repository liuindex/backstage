<template>
  <el-container class="app">
    <el-aside width="200px">
      <app-nav></app-nav>
    </el-aside>
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import AppNav from "../components/app-nav";
import AppHeader from "../components/app-header";
export default {
  name: "home",
  components: { AppNav, AppHeader }
};
</script>
<style lang="scss" scoped>
.app {
  height: 100vh;
  overflow: auto;
  background-color: rgb(222, 226, 233);
}
.el-aside {
  background-image: linear-gradient(#9198e5, #e66465);
}
.el-header {
  padding: 0;
  margin: 0;
  background: #ffffff;
}
.el-main {
  background: #ffffff;
  margin: 10px;
  padding: 0;
  .app-main {
    background: #ffffff;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }
}
</style>
