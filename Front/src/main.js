// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'
import VueCookie from 'vue-cookie'

Vue.use(VueLocalStorage)
Vue.use(VueCookie);


Vue.use(VueResource)
Vue.http.options.root = 'https://rusobral.herokuapp.com/api'

Vue.http.interceptors.push(function(request, next) {

    // modify headers
    request.headers.set('X-Auth-Token', this.$cookie.get('token'));

    next();
});

Vue.use(Vuetify)
Vue.config.productionTip = false

router.beforeEach(function(to, from, next) {
    let token = Vue.cookie.get('token');
    let logged = !!token;
    console.log(logged)
    if (!logged && to.name !== 'Login') {
        if(to.name === 'Register'){
            next()
        }else{
            next('/login');
        }
    }else{
        next();
    }
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    localStorage: {
        token: {
            type: String
        }
    }
})