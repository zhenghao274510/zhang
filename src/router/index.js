import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import Home from '@/views/home/home.vue'
// import Sidebar from '@/views/sidebar/sidebar.vue'
import Index from '@/views/nav1/index.vue'                    //1.主页
import Shishijiankong from '@/views/nav2/shishijiankong.vue'  //2.车辆管理
import Xianluguanli from '@/views/nav2/xianluguanli.vue'
import Zhaopianguanli from '@/views/nav2/zhaopianguanli.vue'
import Diaoduchaxun from '@/views/nav2/diaoduchaxun.vue'
import Chaosutongji from '@/views/nav3/chaosu.vue'      //3.统计查询  
import Pilao from '@/views/nav3/pilaojiashi.vue' 
import Shangxian from '@/views/nav3/shangxian.vue' 
import Yichang from '@/views/nav3/yichang.vue' 
import AZ_weishangxian from '@/views/nav3/az_weishangxian.vue' 
import JR_weishangxian from '@/views/nav3/jr_weishangxian.vue' 
import Guijiwanzheng from '@/views/nav3/guijiwanzheng.vue' 
import Shujvhege from '@/views/nav3/shujvhege.vue' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/home',
      name: 'Home',
      component: Home, 
      children:[
        { //1.
          path: '/',
          name: 'Index',
          component: Index
        },
        { //2.
          path: '/shishijiankong',
          name: 'Shishijiankong',
          component: Shishijiankong
        },
        {
          path: '/xianluguanli',
          name: 'Xianluguanli',
          component: Xianluguanli
        },
        {
          path: '/zhaopianguanli',
          name: 'Zhaopianguanli',
          component: Zhaopianguanli
        },
        {
          path: '/diaoduchaxun',
          name: 'Diaoduchaxun',
          component: Diaoduchaxun
        },
        {//3
          path: '/chaosutongji',
          name: 'Chaosutongji',
          component: Chaosutongji
        },
        {
          path: '/pilao',
          name: 'Pilao',
          component: Pilao
        },
        {
          path: '/shangxian',
          name: 'Shangxian',
          component: Shangxian
        },
        {
          path: '/yichang',
          name: 'Yichang',
          component: Yichang
        },
        {
          path: '/az_weishangxian',
          name: 'AZ_weishangxian',
          component: AZ_weishangxian
        },
        {
          path: '/jr_weishangxian',
          name: 'JR_weishangxian',
          component: JR_weishangxian
        },
        {
          path: '/guijiwanzheng',
          name: 'Guijiwanzheng',
          component: Guijiwanzheng
        },
        {
          path: '/shujvhege',
          name: 'Shujvhege',
          component: Shujvhege
        }
      ]
    }
  ]
})
