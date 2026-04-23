const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 20000,

  e2e: {
    baseUrl: 'https://ebac-agenda-contatos-tan.vercel.app',
    setupNodeEvents(on, config) {
    },
  },
});