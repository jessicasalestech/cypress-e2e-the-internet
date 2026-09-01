const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    defaultCommandTimeout: 10_000,
    env: {
      // valid credentials for the The Internet demo app
      usuarioValido: 'tomsmith',
      senhaValida: 'SuperSecretPassword!',
    },
    video: true,
    screenshotOnRunFailure: true,
  },
});