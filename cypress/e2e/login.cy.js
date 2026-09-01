import LoginPage from '../support/pages/LoginPage';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('logs in with valid credentials', () => {
    LoginPage.fillCredentials(Cypress.env('usuarioValido'), Cypress.env('senhaValida'));
    LoginPage.submit();
    LoginPage.successFlash()
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area');
  });

  it('shows an error message with invalid credentials', () => {
    LoginPage.fillCredentials('usuario_invalido', 'senha_errada');
    LoginPage.submit();
    LoginPage.errorFlash()
      .should('be.visible')
      .and('contain.text', 'Your username is invalid');
  });
});