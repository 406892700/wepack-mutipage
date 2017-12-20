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
            component: Index,
        },
        {
            path: '/list',
            name: '33dd',
            meta: { title: 'index' },
            component: List,
        },
    ],
});

