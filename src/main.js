import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import {routes} from './routes'
import 'izitoast/dist/css/iziToast.min.css'

window.iziToast = require('izitoast');
window.database = firebase.database();

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
