import colors from 'vuetify/es5/util/colors';
import fa from 'vuetify/es5/locale/fa';
import {
  mdiPlus,
  mdiTrashCanOutline,
  mdiMenuDown,
  mdiCloseThick,
  mdiClose,
  mdiMagnify,
  mdiAccountCircle,
  mdiAccountCog,
  mdiLogoutVariant,
  mdiShopping,
  mdiMenu,
  mdiEmail,
  mdiLock,
  mdiAccount,
  mdiEye,
  mdiEyeOff,
} from '@mdi/js';
export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: '%s - shop',
    title: 'shop',
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.scss'],
  env: {
    baseUrl: 'http://localhost:1000/',
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/apiCaller'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    rtl: true,
    lang: {
      locales: { fa },
      current: 'fa',
    },
    icons: {
      iconfont: 'mdiSvg',
      values: {
        plus: mdiPlus,
        trashCan: mdiTrashCanOutline,
        menuDown: mdiMenuDown,
        closeThick: mdiCloseThick,
        close: mdiClose,
        search: mdiMagnify,
        account: mdiAccountCircle,
        profile: mdiAccountCog,
        logout: mdiLogoutVariant,
        basket: mdiShopping,
        menuBar: mdiMenu,
        email: mdiEmail,
        password: mdiLock,
        user: mdiAccount,
        eye: mdiEye,
        eyeClose: mdiEyeOff,
      },
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
