import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Store from './store'
import {routes} from './router'
import { Picker } from 'emoji-mart-vue'

import 'izitoast/dist/css/iziToast.min.css'

window.iziToast = require('izitoast');
window.database = firebase.database();

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    Store,
    el: '#app',
    render: h => h(App),
    methods: {},
});
