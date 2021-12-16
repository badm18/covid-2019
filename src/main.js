import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import vuetify from "./plugins/vuetify";

import mixins from "./utils/mixins";

import "./styles/index.css";

const initApp = async () => {
  Vue.mixin({
    methods: {
      ...mixins,
    },
  });

  new Vue({
    router,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
};

initApp();
