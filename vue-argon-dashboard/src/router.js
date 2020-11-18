import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
// Example pages
import UserProfile from "@/views/Examples/UserProfile.vue";
import ListUserPage from "@/views/Examples/UserManagement/ListUserPage.vue";

const PasswordReset = () =>
  import(/* webpackChunkName: "password" */ "@/views/Password/Reset.vue");
const PasswordEmail = () =>
  import(/* webpackChunkName: "password" */ "@/views/Password/Email.vue");
Vue.use(Router)

//import middleware
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
    
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue'),
          meta: { middleware: auth },
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue'),
           meta: { middleware: guest }
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue'),
          meta: { middleware: guest }
      },
      {
        path: "/password/reset",
        name: "PasswordReset",
        component:  PasswordReset,
        meta: { middleware: guest }
      },
      {
        path: "/password/email",
        name: "PasswordEmail",
        component: PasswordEmail,
        meta: { middleware: guest }
      },
      ]
    },
    {
      path: "/examples",
      component: DashboardLayout,
      name: "Examples",
      children: [
        {
          path: "user-profile",
          name: "User Profile",
          components: { default: UserProfile },
          meta: { middleware: auth }
        },
        {
          path: "user-management/list-users",
          name: "List Users",
          components: { default: ListUserPage },
          meta: { middleware: auth }
        }
      ]
    },
  ]
});
// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware)
    return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({...context, next: nextMiddleware});
  };
}

router.beforeEach((to, from, next) => {

  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const context = {from, next, to, router};
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({...context, next: nextMiddleware});
  }

  return next();
});

export default router;
