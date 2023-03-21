import { createRouter, createWebHistory } from 'vue-router'
import PaginaHome from '../views/Home.vue'
import PaginaLogin from '../views/Login.vue'
import PaginaLogout from '../views/Logout.vue'
import PaginaDashboard from '../views/PaginaDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PaginaHome
  },
  /*****************************
   * Login / Logout
   *****************************/
  {
    path: '/login',
    name: 'login',
    component: PaginaLogin,
  },
  {
    path: '/logout',
    name: 'logout',
    component: PaginaLogout,
  },
  /*****************************
   * Dashboard 
   *****************************/
  {
    path: '/dashboard',
    name: 'dashboard',
    component: PaginaDashboard, 
    meta: { authOnly: true }
  },
]

function isLoggedIn() {
  return localStorage.getItem("authOnly")
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLoggedIn()) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router