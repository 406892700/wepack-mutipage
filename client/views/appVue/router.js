import Vue from 'vue';
import Router from 'vue-router';


import Index from './pages/Index';
import List from './pages/List';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'userManage',
            meta: { title: 'index' },
            component: resolve => require(['./pages/Index'], resolve),
        },
        {
            path: '/list',
            name: '33dd',
            meta: { title: 'list' },
            component: resolve => require(['./pages/List'], resolve),
        },
    ],
});

