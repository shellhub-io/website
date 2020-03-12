// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import DefaultLayout from '~/layouts/Default.vue'

// export default function (Vue, { router, head, isClient }) {
//   // Set default layout as a global component
//   Vue.component('Layout', DefaultLayout)
// }


// v2.0
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import DefaultLayout from '~/layouts/Default.vue'

// export default function (Vue, { appOptions, head }) {
//   head.link.push({
//     rel: 'stylesheet',
//     href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
//   })
  
//   head.link.push({
//     rel: 'stylesheet',
//     href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
//   });
  
//   // const opts = { ... } //opts includes, vuetify themes, icons, etc.
//   Vue.use(Vuetify)
  
//   // appOptions.vuetify = new Vuetify(opts);
  
//   // Set default layout as a global component
//   Vue.component('Layout', DefaultLayout)
// }

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import DefaultLayout from '~/layouts/Default.vue'
import About from '~/components/About.vue'
import Feature from '~/components/Feature.vue'
import More from '~/components/More.vue'
import Bottom from '~/components/Bottom.vue'



Vue.use(Buefy)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('About', About)
  Vue.component('Feature', Feature)
  Vue.component('More', More)
  Vue.component('Bottom', Bottom)

}