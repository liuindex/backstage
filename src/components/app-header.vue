<template>
  <div class="app-header">
    <el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    <el-dropdown size="mini" trigger="click">
      <span class="el-dropdown-link">
        用户名
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu  slot="dropdown">
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.app-header {
    float: right;
    margin-right: 5%;
    display: flex;
    height: 85%;
    align-items: flex-end;
    padding-bottom: 8%;
    font-size: 12px;
    .el-dropdown{
        font-size: 13px;
        margin-bottom: 5%;
    }
}
</style>