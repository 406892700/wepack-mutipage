import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

const globalVm = new Vue({
    el: '#root',
    router,
    template: '<App/>',
    components: { App },
});

// hmr
if (module.hot) {
    module.hot.accept();
}