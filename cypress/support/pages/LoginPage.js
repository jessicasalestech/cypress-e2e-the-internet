class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillUsername(username) {
    cy.get('#username').clear().type(username);
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password);
  }

  fillCredentials(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  successFlash() {
    return cy.get('.flash.success');
  }

  errorFlash() {
    return cy.get('.flash.error');
  }
}

export default new LoginPage();