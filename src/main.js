// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import DefaultLayout from '~/layouts/Default.vue'
import About from '~/components/About.vue'
import Feature from '~/components/Feature.vue'
import More from '~/components/More.vue'
import Bottom from '~/components/Bottom.vue'

import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./vee-validate";
import VueAnalytics from 'vue-analytics';
 
Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(Buefy)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () =>
        import("./pages/Index.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import("./pages/register.vue")
    },
  ]
});

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('About', About)
  Vue.component('Feature', Feature)
  Vue.component('More', More)
  Vue.component('Bottom', Bottom)
}