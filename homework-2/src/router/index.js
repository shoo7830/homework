import Vue from "vue";
import VueRouter from "vue-router";
import Regist from "../views/Regist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Regist",
    component: Regist
  },
  {
    path: "/guide",
    name: "ComponentGuide",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ComponentGuide.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
