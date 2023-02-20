<template>
  <el-container class="myContainer">
    <el-header>
      <div class="myDiv">
        <h2>后台管理系统</h2>
        <el-dropdown trigger="click" szie="mini" class="myDrop">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu>个人中心</el-dropdown-menu>
          <el-dropdown-menu>退出</el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-submenu index="1" default-active="1-1">
            <template slot="title"
              ><i class="el-icon-message"></i>用户管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="clickMenu()"
                >用户设置</el-menu-item
              >
              <el-menu-item index="1-2" @click="clickMenu2()"
                >角色设置</el-menu-item
              >
              <el-menu-item index="1-3" @click="clickMenu()"
                >用户角色</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1" default-active="1-1">
            <template slot="title"
              ><i class="el-icon-message"></i>商品管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1">测试</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      userImg: require('../../assets/logo.png')
    }
  },
  methods: {
    clickMenu() {
      this.$router.push({
        name: 'user'
      })
    },
    clickMenu2() {
      this.$router.push({
        name: 'role'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.myContainer {
  height: 100%;
}
.myDiv {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}

.myDrop {
  margin-left: auto;
}
</style>