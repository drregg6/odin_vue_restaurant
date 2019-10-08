import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Menu from "./views/Menu.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu
    }
  ]
});
