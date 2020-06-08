import Router from "vue-router";
import Routes from "./routes.js";

export default (Vue, store) => {

  Vue.use(Router);

  const config = Vue.$config;
  const router = new Router({
    mode: "history",
    routes: Routes(Vue, store),
    url: config.url === '/' ? '' : config.url,
  });

  Vue.$router = router;

  return router;
};
