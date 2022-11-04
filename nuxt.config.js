export default {
  components: true,
  head: {
    title: 'Powerful Questions',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Asking the right question, at the right time, can make all the difference.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },
  css: ['@/assets/css/main.scss'
  ],
  plugins: ['~/plugins/dataApi', '~/plugins/gs.client'],
  buildModules: [
  ],
  modules: ['nuxt-buefy', "~/modules/questions"],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    }
  }
}
