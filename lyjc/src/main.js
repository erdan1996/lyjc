import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import "css/base.css";
import { Dialog, Radio, RadioGroup, Cell, CellGroup } from "vant";
Vue.config.productionTip = false;
fastClick.attach(document.body);
// eslint-disable-next-line
Vue.use(Dialog)
Vue.use(Radio);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(RadioGroup);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");