const cucumber = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  await cucumber.addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', createBundler({
    plugins: [createEsbuildPlugin.default(config)]
  }));
  return config;

}

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
     // on('file:preprocessor', cucumber())
    },
    specPattern : "cypress/e2e/cucumber-test/*.feature",
    supportFile : false,
    setupNodeEvents,
  },
});
