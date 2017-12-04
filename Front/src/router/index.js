import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        name: 'Login',
        component: require("@/components/Login")
    }, {
        path: '/',
        redirect: '/login'
    }, {
        path: '/cadastrar',
        name: 'Register',
        component: require("@/components/Register")
    }, {
        path: '/dashboard',
        name: 'Dashboard',
        component: require('@/components/dashboard/Dashboard')
    }]
})