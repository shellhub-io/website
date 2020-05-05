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

(function(h, o, t, j, a, r) {
    h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments)
    };
    h._hjSettings = { hjid: 1786900, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(Buefy)

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            component: () =>
                import ("./pages/Index.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () =>
                import ("./pages/register.vue")
        },
    ]
});

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.component('About', About)
    Vue.component('Feature', Feature)
    Vue.component('More', More)
    Vue.component('Bottom', Bottom)
}

