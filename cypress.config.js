const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false, //- чтобы перезапускать тесть вручную
    // defaultCommandTimeout: 3000, - чтобы установить таймаут
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
