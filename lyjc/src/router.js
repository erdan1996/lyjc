import Vue from "vue";
import Router from "vue-router";
import onlineQuery from "./views/onlineQuery.vue";
// import about from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "onlineQuery",
      component: onlineQuery
    },
    {
      path: "/feedback",
      name: "feedback",
      component: () =>
        import(/* webpackChunkName: "onlineQuery" */ "./views/feedback.vue")
    },
    {
      path: "/projectCost",
      name: "projectCost",
      component: () =>
        import(/* webpackChunkName: "onlineQuery" */ "./views/projectCost.vue")
    },
    {
      path: "/question",
      name: "question",
      component: () =>
        import(/* webpackChunkName: "onlineQuery" */ "./views/question.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "onlineQuery" */ "./views/contact.vue")
    },
    {
      path: "/schedule",
      name: "schedule",
      component: () =>
        import(/* webpackChunkName: "onlineQuery" */ "./views/schedule.vue")
    },
    {
      path: "/download",
      name: "download",
      component: () =>
        import(/* webpackChunkName: "onlineQuery" */ "./views/download.vue")
    },
    {
      path: "/position",
      name: "position",
      component: () =>
        import(/* webpackChunkName: "onlineQuery" */ "./views/position.vue")
    }
  ]
});
