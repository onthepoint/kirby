import auth from "./auth.js";

/* Routes */
export default (Vue, store) => {

  const authenticate = auth(Vue, store);

  return [
    {
      path: "/",
      name: "Home",
      redirect: "/site"
    },
    {
      path: "/browser",
      name: "Browser",
      component: Vue.component("k-browser-route"),
    },
    {
      path: "/login",
      component: Vue.component("k-login-route"),
    },
    {
      path: "/logout",
      beforeEnter() {
        // remove all form changes from localStorage
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith("kirby$content$")) {
            localStorage.removeItem(key);
          }
        });

        Vue.$model.users.logout();
      }
    },
    {
      path: "/installation",
      component: Vue.component("k-installation-route"),
    },
    {
      path: "/site",
      name: "Site",
      meta: {
        view: "site"
      },
      component: Vue.component("k-site-route"),
      beforeEnter: authenticate
    },
    {
      path: "/site/files/:filename",
      name: "SiteFile",
      meta: {
        view: "site"
      },
      component: Vue.component("k-file-route"),
      beforeEnter: authenticate,
      props: route => ({
        path: "site",
        filename: route.params.filename
      })
    },
    {
      path: "/pages/:path/files/:filename",
      name: "PageFile",
      meta: {
        view: "site"
      },
      component: Vue.component("k-file-route"),
      beforeEnter: authenticate,
      props: route => ({
        path: "pages/" + route.params.path,
        filename: route.params.filename
      })
    },
    {
      path: "/users/:path/files/:filename",
      name: "UserFile",
      meta: {
        view: "users"
      },
      component: Vue.component("k-file-route"),
      beforeEnter: authenticate,
      props: route => ({
        path: "users/" + route.params.path,
        filename: route.params.filename
      })
    },
    {
      path: "/pages/:path",
      name: "Page",
      meta: {
        view: "site"
      },
      component: Vue.component("k-page-route"),
      beforeEnter: authenticate,
      props: route => ({
        path: route.params.path
      })
    },
    {
      path: "/settings",
      name: "Settings",
      meta: {
        view: "settings"
      },
      component: Vue.component("k-settings-route"),
      beforeEnter: authenticate
    },
    {
      path: "/users/role/:role",
      name: "UsersByRole",
      meta: {
        view: "users"
      },
      component: Vue.component("k-users-route"),
      beforeEnter: authenticate,
      props: route => ({
        role: route.params.role
      })
    },
    {
      path: "/users",
      name: "Users",
      meta: {
        view: "users"
      },
      beforeEnter: authenticate,
      component: Vue.component("k-users-route")
    },
    {
      path: "/users/:id",
      name: "User",
      meta: {
        view: "users"
      },
      component: Vue.component("k-user-route"),
      beforeEnter: authenticate,
      props: route => ({
        id: route.params.id
      })
    },
    {
      path: "/account",
      name: "Account",
      meta: {
        view: "account"
      },
      component: Vue.component("k-user-route"),
      beforeEnter: authenticate,
      props: () => ({
        id: store.state.user.current ? store.state.user.current.id : null
      })
    },
    {
      path: "/plugins/:id",
      name: "Plugin",
      meta: {
        view: "plugin"
      },
      props: route => ({
        plugin: route.params.id
      }),
      beforeEnter: authenticate,
      component: Vue.component("k-custom-route")
    },
    {
      path: "*",
      name: "NotFound",
      beforeEnter: (to, from, next) => {
        next("/");
      }
    }
  ];
};
