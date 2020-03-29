import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/Home"),
    },
    {
        path: "/movie/:id",
        component: () => import("@/MovieDetail"),
        props: true
      },
    {
      name: "login",
      path: "/login",
      component: () => import("@/Login")
    }
  ]
});