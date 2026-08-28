import CheckboxesPage from '../support/pages/CheckboxesPage';

describe('Checkboxes', () => {
  beforeEach(() => {
    CheckboxesPage.visit();
  });

  it('marca a primeira checkbox', () => {
    CheckboxesPage.check(1);
    CheckboxesPage.shouldBeChecked(1, true);
  });

  it('desmarca a segunda checkbox (que inicia marcada)', () => {
    CheckboxesPage.uncheck(2);
    CheckboxesPage.shouldBeChecked(2, false);
  });
});