import auth from "../auth";
import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home-page";
import Profile from "../views/profile-page";
import Tasks from "../views/tasks-page";
import defaultLayout from "../layouts/side-nav-inner-toolbar";
import simpleLayout from "../layouts/single-card";

function loadView(view) {
  return () => import(`../views/${view}.vue`);
}

const router = new createRouter({
  routes: [
    {
      path: "/home",
      name: "home",
      meta: {
        requiresAuth: true,
        layout: defaultLayout
      },
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        requiresAuth: true,
        layout: defaultLayout
      },
      component: Profile
    },
    {
      path: "/masterdetail",
      name: "masterdetail",
      meta: {
        requiresAuth: true,
        layout: defaultLayout
      },
      component: () => import("@/views/master-detail/master-detail.vue")
    },

    {
      path: "/notify-view",
      name: "notify-view",
      meta: {
        requiresAuth: true,
        layout: defaultLayout
      },
      component: () => import("@/views/notify/notify-view.vue")
    },

    {
      path: "/tags",
      name: "tags",
      meta: {
        requiresAuth: true,
        layout: defaultLayout
      },
      component: () => import("@/views/tags/tags-view.vue")
    },

    {
      path: "/kanban",
      name: "kanban",
      meta: {
        requiresAuth: true,
        layout: defaultLayout
      },
      component: () => import("@/views/kanban/kanban-view.vue")
    },
    {
      path: "/toolbar",
      name: "toolbar",
      meta: {
        requiresAuth: true,
        layout: defaultLayout
      },
      component: () => import("@/views/toolbar-custom/tool-bar.vue")
    },
    {
      path: "/tasks",
      name: "tasks",
      meta: {
        requiresAuth: true,
        layout: defaultLayout
      },
      component: Tasks
    },
    {
      path: "/login-form",
      name: "login-form",
      meta: {
        requiresAuth: false,
        layout: simpleLayout,
        title: "Sign In"
      },
      component: loadView("login-form")
    },
    {
      path: "/reset-password",
      name: "reset-password",
      meta: {
        requiresAuth: false,
        layout: simpleLayout,
        title: "Reset Password",
        description:
          "Please enter the email address that you used to register, and we will send you a link to reset your password via Email."
      },
      component: loadView("reset-password-form")
    },
    {
      path: "/create-account",
      name: "create-account",
      meta: {
        requiresAuth: false,
        layout: simpleLayout,
        title: "Sign Up"
      },
      component: loadView("create-account-form")
    },
    {
      path: "/change-password/:recoveryCode",
      name: "change-password",
      meta: {
        requiresAuth: false,
        layout: simpleLayout,
        title: "Change Password"
      },
      component: loadView("change-password-form")
    },
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/recovery",
      redirect: "/home"
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/home"
    }
  ],
  history: createWebHistory()
});

router.beforeEach((to, from, next) => {
  if (to.name === "login-form" && auth.loggedIn()) {
    next({ name: "home" });
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        name: "login-form",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
