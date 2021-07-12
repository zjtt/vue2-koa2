import Vue from 'vue'
import App from './views/app.vue'
import routes from './router'
import VueRouter from 'vue-router'
const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(VueRouter)
new Vue({
    el: '#app',
    router,
    render: h => h(App),
})