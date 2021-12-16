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
    // /covid-cert/verify/9760000032456653?lang=en&ck=9ae02b4edfb0f39a2e6ac9b5056d2da5
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
