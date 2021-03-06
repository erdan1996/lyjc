import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScroller from "vue-scroller"
Vue.use(VueScroller);
import fastClick from "fastclick";
import api from "@/api/index";
import "css/base.css";
import {
  Dialog,
  Radio,
  RadioGroup,
  Cell,
  CellGroup,
  Toast,
  PullRefresh,
  List
} from "vant";
Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.prototype.$api = api;
// eslint-disable-next-line
Vue.use(Dialog)
Vue.use(Radio);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(RadioGroup);
Vue.use(Toast);
Vue.use(PullRefresh);
Vue.use(List);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
