import DropdownPage from '../support/pages/DropdownPage';

describe('Dropdown', () => {
  beforeEach(() => {
    DropdownPage.visit();
  });

  it('selects the first option', () => {
    DropdownPage.selectOption('Option 1');
    DropdownPage.selectedText().should('have.text', 'Option 1');
  });

  it('selects the second option', () => {
    DropdownPage.selectOption('Option 2');
    DropdownPage.selectedText().should('have.text', 'Option 2');
  });
});