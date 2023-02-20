import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/index.vue'
import home from '../views/home/index.vue'
import user from '../views/user/index.vue'
import role from '../views/role/index.vue'

Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/user',
          name: 'user',
          component: user
        },
        {
          path: '/home/role',
          name: 'role',
          component: role
        },
        {
          path: '/home/user',
          name: 'user',
          component: user
        }
      ]
    }
  ]
})
