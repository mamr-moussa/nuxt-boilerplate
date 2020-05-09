export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@plugins/core'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        rootRedirect: 'en',
        vueI18nLoader: true,
        defaultLocale: 'en',
        strategy: 'prefix', // 'prefix_except_default',
        lazy: true,
        langDir: 'lang/',
        seo: true,
        // parsePages: false,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n',
          alwaysRedirect: false,
          fallbackLocale: 'en'
        },
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
            name: 'English',
            local: 'English',
            alignment: 'left'
          },
          {
            code: 'ar',
            iso: 'ar-EG',
            file: 'ar-EG.js',
            name: 'Arabic',
            local: 'العربية',
            alignment: 'right'
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
