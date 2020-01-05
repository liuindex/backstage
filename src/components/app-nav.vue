<template>
  <div>
    <el-col>
      <h5>Index</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="rgb(145, 152, 229,0)"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <template v-for="(item,index) in routes" v-if="item.meta">
          <el-submenu v-if="item && item.children" :index="item.name || item.path" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.meta.title}}</span>
            </template>
            <el-menu-item
              v-for="(click,on) in item.children"
              :key="on"
              :index="click.path"
            >{{click.meta.title}}</el-menu-item>
          </el-submenu>
        </template>
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/one">账号信息</el-menu-item>
            <el-menu-item index="/home/two">修改密码</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>公司信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/company/userManager">用户管理</el-menu-item>
            <el-menu-item index="/company/editUser">添加/编辑用户</el-menu-item>
          </el-menu-item-group>
        </el-submenu>-->
      </el-menu>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: []
    };
  },
  mounted() {
    this.routes = this.$router.options.routes;
    console.log(this.routes);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-col {
  h5 {
    color: #ffffff;
    text-align: center;
    font-size: 20px;
  }
}
</style>