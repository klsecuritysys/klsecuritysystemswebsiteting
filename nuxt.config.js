import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color' , content: '#2e004f' },
      { name: 'msapplication-navbutton-color' , content: '#2e004f' },
      { name: 'apple-mobile-web-app-capable' , content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style'  , content: '#2e004f' },
      {name: 'monetization' , content:'$ilp.uphold.com/KeZqRj2YkFGf'},

      {name:'google-signin-client_id' , content: '458126264490-7cakna6471hf9s9gdij499cugn142eje.apps.googleusercontent.com' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'description', name: 'keywords', content: '' },
      {name:'google-site-verification',content:'fWnwiREUVfCnIVa-5Y-Nv2p5TUDkLYxUvLO5SGnxReQ'},
      { property:'og:locale' , content:'af-ZA' },
      { property:'og:type' ,content:'website' },
      
      { property:'og:site_name' ,content:'bihogo' },
      { property:'og:url' ,content: 'https://bihogo.com/'},
      { name:'twitter:image', content:''},
    ],
    link: [

      {rel: 'canonical',href:'https://bihogoo.com'},
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,300;1,300&family=Grenze+Gotisch&display=swap'}
    ],
    script: [
      { src: 'https://apis.google.com/js/platform.js' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3b8070",throttle: 0 },

  generate: {
routes: function () {
return [
  '/blog/1',
  '/blog/2',
  '/blog/3',

];
}
},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css',
    '~/assets/styles.css',
    'vue-plyr/dist/vue-plyr.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      {src:'~/plugins/vue-plyr.js',ssr:false},
       { src: "~/plugins/aos", ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    //'@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
     '@nuxtjs/firebase'

  ],

    firebase: {
// options

config: {
        apiKey: 'AIzaSyCzp4J4cu_-_kPKRcbpsUvyyAjZ37Y_xSU',
        authDomain: 'bihogoo.firebaseapp.com',
        databaseURL: 'https://bihogoo.firebaseio.com',
        projectId: 'bihogoo',
        storageBucket: 'bihogoo.appspot.com',
        messagingSenderId: '1029288820283',
        appId: '1:1029288820283:web:c3f1274576c45af756a61e',
        measurementId: 'G-GSH2TDLPBW'
      },
services: {
        auth: true ,
        messaging: true,
        performance: true,
        analytics: true// Just as example. Can be any other service.
      }

},

  sitemap: {
    hostname: 'https://bihogoo.com/',
    lastmod: '2020-07-28',
    sitemaps: [
      {
        path: '/sitemap.xml',
        routes: [
          'bplan',
          



        ],
        gzip: true
      },
    ]
  },

  manifest: {
      short_name: 'bihogoo',
    name: 'bihogo',
    lang: 'en',
    start_url: '/',
  background_color: '#2e004f',
  display: 'standalone',
  scope: '/audio/',
  theme_color: '#2e004f'

  },
   icon: {
    /* icon options */
    iconSrc:'/assets/icon.png',
  },
   workbox: {
    /* workbox options */
    runtimeCaching:[
        {
            urlPattern:'https://fonts.googleapis.com/.*',
            handler:'cacheFirst',
            method:'GET',
            strategyOptions:{ cacheableResponse:{statuses:[0,200]}}

        },
        ]
  },





  auth: {
  // Options
},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
