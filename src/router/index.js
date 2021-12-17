import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";

const routes = [
  {
    path: "*",
    name: "MainPage",
    beforeEnter() {
      window.location.replace("https://www.gosuslugi.ru/");
    },
  },
  {
    path: "/covid-cert/verify/:id/",
    name: "Myself",
    component: MainPage,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
