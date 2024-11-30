import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        noDiscovery: true
    },
    plugins: [
        vue(),
        Components({
            resolvers: [PrimeVueResolver()]
        }),
        VitePWA({
            registerType: 'prompt',
            workbox: {
                maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // Maksimum ukuran file 4 MB
                runtimeCaching: [
                    {
                        urlPattern: /.(?:png|jpg|jpeg|svg|gif|webp)$/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 hari
                            }
                        }
                    }
                ]
            },
            manifest: {
                name: 'West Papua Library by GRPWP',
                short_name: 'WP Lib',
                description: 'West Papua Library by GRPWP',
                theme_color: '#0A831C',
                background_color: '#0A831C',
                display: 'standalone',
                icons: [
                    {
                        src: 'demo/img/grpwp-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'demo/img/grpwp-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    server: {
        host: true, // Membuka server ke host publik
        port: 3000 // Port yang digunakan (opsional)
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        },
        terserOptions: {
            compress: {
                drop_console: true // Menghapus console.log pada hasil build
            }
        }
    }
});
