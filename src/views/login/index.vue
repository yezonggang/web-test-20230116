<template>
  <div class="div1">
    <div class="loginDiv">
      <h3 class="title1">系统登陆</h3>
      <el-form :model="loginForm" class="demo-form-inline">
        <el-form-item label="登录账号" :inline="true" label-width="80px">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入登录名"
          ></el-input>
        </el-form-item>
        <el-form-item label="登录密码" :inline="true" label-width="80px">
          <el-input
            v-model="loginForm.passwd"
            placeholder="请输入登录密码"
          ></el-input>
        </el-form-item>
        <div class="last">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info">取消</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '../../api/login'
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        passwd: 'admin'
      }
    }
  },
  methods: {
    login() {
      login(this.loginForm).then(({ data: res }) => {
        console.log(res, 'res')
        if (res.code == 200) {
          this.$router.push({ name: 'home' })
        } else {
          this.$message.warning(res.data.message)
        }
      })
      console.log('xxxx')
    }
  }
}
</script>

<style lang="less" scoped>
.div1 {
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginDiv {
  height: 250px;
  width: 330px;
  border: 10px;
  border-radius: 5%;
  background-color: gainsboro;
}

.title1 {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 20px;
}
.el-input {
  width: 180px;
}

.last {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
