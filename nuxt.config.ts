// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import primevue from '@primevue/nuxt-module';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  css: [
    'primeicons/primeicons.css'
  ],
  primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    }
})