export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'iYlP0GsGISGDqj5N1JQcqgtt',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
