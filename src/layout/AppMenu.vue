<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Negara West Papua',
        items: [
            { label: 'Beranda', icon: 'pi pi-fw pi-home', to: '/' },
            { label: 'Profil Negara', icon: 'pi pi-fw pi-circle', class: 'rotated-icon' },

            {
                label: 'Wilayah Adat',
                icon: 'pi pi-fw pi-circle',
                items: [
                    { label: 'Mamta', icon: 'pi pi-fw pi-circle', class: 'rotated-icon' },
                    { label: 'Saireri', icon: 'pi pi-fw pi-circle' },
                    { label: 'Douberay', icon: 'pi pi-fw pi-circle' },
                    { label: 'Bomberay', icon: 'pi pi-fw pi-circle' },
                    { label: 'Mee Pago', icon: 'pi pi-fw pi-circle' },
                    { label: 'La Pago', icon: 'pi pi-fw pi-circle' },
                    { label: 'Anim Ha', icon: 'pi pi-fw pi-circle' }
                ]
            }
        ]
    },
    {
        label: 'Kategori Arsip',
        items: [
            { label: 'IPWP', icon: 'pi pi-fw pi-circle', to: '/pages/ipwp', class: 'rotated-icon' },
            { label: 'ILWP', icon: 'pi pi-fw pi-circle', to: '/pages/ilwp' },
            { label: 'ULMWP - Prov Gov', icon: 'pi pi-fw pi-circle', to: '/pages/ulmwp' },
            { label: 'Melanesia', icon: 'pi pi-fw pi-circle', to: '/pages/melanesia' },
            { label: 'West Papua', icon: 'pi pi-fw pi-circle', to: '/pages/westpapua' },
            { label: 'UNIKAB', icon: 'pi pi-fw pi-circle', to: '/pages/unikab' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped>
.custom-icon {
    width: 24px; /* Adjust the size as needed */
    height: 24px; /* Adjust the size as needed */
}
</style>
