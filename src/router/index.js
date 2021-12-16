import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";
import Preloader from "../components/Preloader";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: Preloader,
  },
  {
    // /covid-cert/verify/9760000032456653?lang=en&ck=9ae02b4edfb0f39a2e6ac9b5056d2da5
    path: '/covid-cert/verify/9760000032456653',
    name: 'Myself',
    component: MainPage
  }
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
