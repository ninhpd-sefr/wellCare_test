export default {
  ssr: false,
  vue: {
    config: {
      devtools: true,
    },
  },
  server: {
    https: true,
  },

  // Add Vuetify configuration

  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    outDir: "dist",
    transpile: ["vuetify"],
    // rollupOptions: {
    //   external: [
    //     // Other external dependencies
    //     // "@capacitor/nuxt",
    //   ],
    // },
  },
  // plugins: [{ src: "@capacitor/nuxt" }],
};
