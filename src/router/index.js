import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Heroes from '../views/Heroes.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Logout from '../views/Logout.vue'
import MyHeroes from '../views/MyHeroes.vue'
import Selected from '../views/Selected.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/heroes',
      name: 'Heroes',
      component: Heroes
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/logout',
      name:'Logout',
      component:Logout
    },
    {
      path:'/myheroes',
      name:'MyHeroes',
      component:MyHeroes
    },
    {
      path:'/selected',
      name:'Selected',
      component:Selected
    }
    
  ]
})

export default router
