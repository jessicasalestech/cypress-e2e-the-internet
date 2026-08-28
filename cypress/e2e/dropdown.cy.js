import DropdownPage from '../support/pages/DropdownPage';

describe('Dropdown', () => {
  beforeEach(() => {
    DropdownPage.visit();
  });

  it('seleciona a primeira opção', () => {
    DropdownPage.selectOption('Option 1');
    DropdownPage.selectedText().should('have.text', 'Option 1');
  });

  it('seleciona a segunda opção', () => {
    DropdownPage.selectOption('Option 2');
    DropdownPage.selectedText().should('have.text', 'Option 2');
  });
});