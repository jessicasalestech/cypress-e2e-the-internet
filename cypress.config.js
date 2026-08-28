const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    defaultCommandTimeout: 10_000,
    env: {
      // credenciais válidas do app demo The Internet
      usuarioValido: 'tomsmith',
      senhaValida: 'SuperSecretPassword!',
    },
    video: true,
    screenshotOnRunFailure: true,
  },
});