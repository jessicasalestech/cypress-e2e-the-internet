class DropdownPage {
  visit() {
    cy.visit('/dropdown');
  }

  selectOption(label) {
    cy.get('#dropdown').select(label);
  }

  selectedText() {
    return cy.get('#dropdown option:selected');
  }
}

export default new DropdownPage();