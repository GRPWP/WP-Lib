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
                },
                {
                    path: '/nwp/profil',
                    name: 'profil',
                    component: () => import('@/views/nwp/ProfilNegaraDoc.vue')
                },
                {
                    path: '/nwp/mamta',
                    name: 'mamta',
                    component: () => import('@/views/nwp/MamtaDoc.vue')
                },
                {
                    path: '/nwp/saireri',
                    name: 'saireri',
                    component: () => import('@/views/nwp/SaireriDoc.vue')
                },
                {
                    path: '/nwp/douberay',
                    name: 'douberay',
                    component: () => import('@/views/nwp/DouberayDoc.vue')
                },
                {
                    path: '/nwp/bomberay',
                    name: 'bomberay',
                    component: () => import('@/views/nwp/BomberayDoc.vue')
                },
                {
                    path: '/nwp/meepago',
                    name: 'meepago',
                    component: () => import('@/views/nwp/MeePagoDoc.vue')
                },
                {
                    path: '/nwp/lapago',
                    name: 'lapago',
                    component: () => import('@/views/nwp/LaPagoDoc.vue')
                },
                {
                    path: '/nwp/animha',
                    name: 'animha',
                    component: () => import('@/views/nwp/AnimHaDoc.vue')
                }
            ]
        }
    ]
});

export default router;
