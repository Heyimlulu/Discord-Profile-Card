// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      htmlAttrs: {
        lang: "en",
      }
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/style.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "nuxt-gtag"],

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-0FKE60WBZB',
    initCommands: [
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
      }]
    ],
    config: {
      page_title: 'Discord Profile Card',
      send_page_view: true,
      cookie_domain: 'auto',
      cookie_flags: 'SameSite=None;Secure'
    }
  },
});