
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'

import Vuex from 'vuex';

import axios from 'axios'

import VueQuillEditor from 'vue-quill-editor'

import routes from './routes'

import 'font-awesome/css/font-awesome.min.css'
import store from './views/vuex/store';

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueQuillEditor)
Vue.prototype.$store = store
Vue.prototype.$axios = axios;


Vue.prototype.$adminPath = 'http://stock.test/api/';
Vue.prototype.$apiPath = 'http://stock.test/api/';
Vue.prototype.$basePath = 'http://stock.test/';
// Vue.prototype.$adminPath = 'http://116.255.232.219:8082/api/';
// Vue.prototype.$apiPath = 'http://116.255.232.219:8082/api/';
// Vue.prototype.$basePath = 'http://116.255.232.219:8082/';

const router = new VueRouter({
mode:'history',
    routes
});



router.beforeEach((to, from, next) => {
    //NProgress.start();

    if (to.path == '/admin/login') {
        sessionStorage.removeItem('token');
    }
    let user = sessionStorage.getItem('token');
    if (!user && to.path != '/admin/login') {

        next({ path: '/admin/login' })
    } else {
        next();
    }

});

axios.interceptors.response.use(function (response) {
    // Do something with response data

    if(response.data.code == 4000){
        router.replace({
            path: '/admin/login'
        });
    }

    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

axios.interceptors.request.use(function (config) {

    //config.url +='?token='+sessionStorage.getItem('token');
    config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token');

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

/*new Vue({
    //el: '#app',
    //template: '<App/>',
    router,
    store,
    //components: { App }
    render: h => h(App)
}).$mount('#app');*/
var vue = new Vue(Vue.util.extend({router,store,}, App)).$mount('#app')
