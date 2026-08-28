import LoginPage from '../support/pages/LoginPage';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('realiza login com credenciais válidas', () => {
    LoginPage.fillCredentials(Cypress.env('usuarioValido'), Cypress.env('senhaValida'));
    LoginPage.submit();
    LoginPage.successFlash()
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area');
  });

  it('exibe mensagem de erro com credenciais inválidas', () => {
    LoginPage.fillCredentials('usuario_invalido', 'senha_errada');
    LoginPage.submit();
    LoginPage.errorFlash()
      .should('be.visible')
      .and('contain.text', 'Your username is invalid');
  });
});