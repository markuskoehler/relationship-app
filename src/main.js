// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navigation from './components/Navigation'
import BootstrapVue from 'bootstrap-vue'
import FullCalendar from 'vue-full-calendar'
import FBSignInButton from 'vue-facebook-signin-button'

import '@ionic/pwa-elements'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/open-iconic/font/css/open-iconic-bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(FullCalendar)
Vue.use(FBSignInButton)
Vue.component('navigation', navigation)

window.$ = require('jquery')
window.jQuery = require('jquery')

window.fbAsyncInit = function() {
  FB.init({
    appId: '527245817778068',
    cookie: true,  // enable cookies to allow the server to access the session
    xfbml: true,  // parse social plugins on this page
    version: 'v2.8' // use graph api version 2.8
  })
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
