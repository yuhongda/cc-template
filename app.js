import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routerConfig } from './router-config'
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx'
import store from './src/store/store.js'
import App from './app.vue'
import VueCookie from 'vue-cookie'
// import { Observable } from 'rxjs/Observable'
// import { Subscription } from 'rxjs/Subscription'
// import { Subject } from 'rxjs/Subject'
// import 'element-ui/lib/theme-default/index.css'
import { 
    Button, 
    Input,
    Select, 
    Option,
    Row, 
    Col, 
    Cascader, 
    Switch,
    Alert,
    Message,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup
} from 'element-ui'

import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)


Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueRx, Rx)

Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.use(Cascader)
Vue.use(Switch)
Vue.use(Alert)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.prototype.$message = Message


Vue.use(VueCookie);

store.dispatch('getUserinfo');
store.dispatch('getSystemMenu');

var router;
routerConfig(router, store).then((router) => {

    new Vue({
        el: '#app',
        components:{
            App
        },
        store,
        router
    });

})





// new Vue({
//     render(h) {
//       return h(App)
//     }
// }).$mount('#app')
