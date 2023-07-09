import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Book from '../views/Book.vue'
import layout from '../layout/layout.vue'
import User from '../views/User.vue'



const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/layout',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '',
        name: 'Book',
        component: () => import("../views/Book")
      },
      {
        path: '/Home',
        name: 'home',
        component: () => import("../views/Message")
      },
      {
        path: '/User',
        name: 'User',
        component: () => import("../views/User")
      },
      {
        path: '/UpdateUser',
        name: 'UpdateUser',
        component: () => import("../views/UpdateUser")
      },
      {
        path: '/AddBook',
        name: 'AddBook',
        component: () => import("../views/AddBook")
      },
      {
        path: '/UpdateBook',
        name: 'UpdateBook',
        component: () => import("../views/UpdateBook")
      },
      {
        path: '/User',
        name: 'User',
        component: User
      }


    ]
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
