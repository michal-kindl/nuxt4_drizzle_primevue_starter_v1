// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import { baseURL } from 'process';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module', 
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],    
  css: [
    'primeicons/primeicons.css'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  auth: {
    baseURL: '/api/auth',
    isEnabled: true,
    globalAppMiddleware: true, // register auth middleware globally
    provider: {
      type: 'local',
      endpoints: {
        signIn:  { path: '/login',  method: 'post' },
        signOut: { path: '/logout', method: 'post' },        
        getSession: { path: '/session', method: 'get' },
        refresh:  { path: '/refresh', method: 'post' },
        signUp: false, // disable registration endpoint
      },

      pages: {
        login: '/login',
        default: '/'  
      },

      token: {
        signInResponseTokenPointer: '/token',
        type: 'Bearer'
      },

      refresh: {
        isEnabled: true,          // refresh support on local provider
        endpoint: { path: '/refresh', method: 'post' },

        token: {
          signInResponseRefreshTokenPointer: '/refreshToken',
          refreshResponseTokenPointer: '',
          refreshRequestTokenPointer: '/refreshToken'
        }
      }
    }
  }
})