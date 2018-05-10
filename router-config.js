import App from './app.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'


export function routerConfig(router, store){

    let promise = new Promise(function(resolve, reject) {
        
        const Page1 = resolve => require.ensure(['./src/pages/Page1.vue'], () => resolve(require('./src/pages/Page1.vue')), 'page1')
        const Page2 = resolve => require.ensure(['./src/pages/Page2.vue'], () => resolve(require('./src/pages/Page2.vue')), 'page2')
        //{importPage}//

        const routes = [
            { path: '/', component: Page1, name: 'page1' },
            { path: '/page1', component: Page1, name: 'page1' },
            { path: '/page2', component: Page2, name: 'page2' },
            //{importRoute}//
            { path: '*', redirect: '/' }
        ]

        router = new VueRouter({
            routes
        })
        
        router.beforeEach((to, from, next) => {
            // window.scrollTo(0, 0)
            // document.title = to.meta.title

            // store.dispatch('setUserPermission', Vue.cookie.get('__YDept_user_login') == 'true');
            // store.dispatch('setUserPermission', true);

            // if(/\/login/.test(to.path)){
            //     next()
            // }else{
            //     if(store.state.permission){
            //         next()
            //     }else{
            //         next({path: '/login'})
            //     }
            // }
            
            store.dispatch('setCurrentPage', to.path)

            next()
            
        })

        resolve(router);
    });

    return promise
}

