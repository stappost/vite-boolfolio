import { createRouter, createWebHistory } from 'vue-router';

import HomeApp from './pages/HomeApp.vue';
import AppProjects from './pages/AppProjects.vue';
import NotFoundApp from './pages/NotFoundApp.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeApp,
        },
        {
            path: '/',
            name: 'projects',
            component: AppProjects,
        },
        {
            path: '/',
            name: 'contactUs',
            component: AppProjects,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundApp
        },
    ]
});
export { router }