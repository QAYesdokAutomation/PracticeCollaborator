const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern : "cypress/support/E2E",
    supportFile : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //cypress configuration
    baseUrl : 'https://magento.softwaretestingboard.com/',
  },
});
