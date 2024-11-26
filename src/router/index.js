import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/pages/ipwp',
                    name: 'ipwp',
                    component: () => import('@/views/pages/IPWPDoc.vue')
                },
                {
                    path: '/pages/ilwp',
                    name: 'ilwp',
                    component: () => import('@/views/pages/ILWPDoc.vue')
                },
                {
                    path: '/pages/ulmwp',
                    name: 'ulmwp',
                    component: () => import('@/views/pages/ULMWPDoc.vue')
                },
                {
                    path: '/pages/melanesia',
                    name: 'melanesia',
                    component: () => import('@/views/pages/MelanesiaDoc.vue')
                },
                {
                    path: '/pages/unikab',
                    name: 'unikab',
                    component: () => import('@/views/pages/UnikabDoc.vue')
                },
                {
                    path: '/pages/westpapua',
                    name: 'westpapua',
                    component: () => import('@/views/pages/WestPapuaDoc.vue')
                }
            ]
        }
    ]
});

export default router;
