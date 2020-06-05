import auth from "./auth.js";

/* Routes */
export default (Vue, store) => {

  const authenticate = auth(Vue, store);

  return [
    {
      path: "/",
      name: "Home",
      redirect: "/site",
    },
    {
      path: "/login",
      component: Vue.component("k-login-route"),
    },
    {
      path: "/settings",
      name: "Settings",
      component: Vue.component("k-settings-route"),
      beforeEnter: authenticate,
    },
    {
      path: "/site",
      name: "Site",
      component: Vue.component("k-site-route"),
      beforeEnter: authenticate,
    },
    {
      path: "/:parentType/:parentId/files/:filename",
      name: "File",
      component: Vue.component("k-file-route"),
      beforeEnter: authenticate,
      props: route => ({
        filename: route.params.filename,
        parent: route.params.parentType + "/" + route.params.parentId,
        type: route.params.parentType,
      })
    },
    {
      path: "/pages/:id",
      name: "Page",
      component: Vue.component("k-page-route"),
      beforeEnter: authenticate,
      props: (route) => ({
        id: route.params.id,
      }),
    },
    {
      path: "/users",
      name: "Users",
      component: Vue.component("k-users-route"),
      beforeEnter: authenticate,
    },
    {
      path: "/users/role/:role",
      name: "UsersByRole",
      component: Vue.component("k-users-route"),
      props: (route) => ({
        role: route.params.role,
      }),
      beforeEnter: authenticate,
    },
    {
      path: "/users/:id",
      name: "User",
      component: Vue.component("k-user-route"),
      props: (route) => ({
        id: route.params.id,
      }),
      beforeEnter: authenticate,
    },
    {
      path: "*",
      name: "NotFound",
      beforeEnter: (to, from, next) => {
        next("/");
      },
    },
  ];
};