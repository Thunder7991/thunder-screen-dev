import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/test',
    name: 'Test',
    component: Test
  },

  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
