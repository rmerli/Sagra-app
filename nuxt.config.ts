import SagreTheme from './sagre';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/style.css',
    '@/assets/css/base.css',
    'primeicons/primeicons.css',
    'material-icons/iconfont/material-icons.css',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sagre',
    }
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    autoImport: true,
    importTheme: { from: '@/sagre.ts' },
  }
})
