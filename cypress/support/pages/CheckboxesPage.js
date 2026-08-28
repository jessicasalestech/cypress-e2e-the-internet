class CheckboxesPage {
  visit() {
    cy.visit('/checkboxes');
  }

  // checkbox 1-based
  checkbox(nth) {
    return cy.get('input[type="checkbox"]').eq(nth - 1);
  }

  check(nth) {
    this.checkbox(nth).check();
  }

  uncheck(nth) {
    this.checkbox(nth).uncheck();
  }

  shouldBeChecked(nth, checked) {
    this.checkbox(nth).should(checked ? 'be.checked' : 'not.be.checked');
  }
}

export default new CheckboxesPage();