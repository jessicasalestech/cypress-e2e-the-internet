import CheckboxesPage from '../support/pages/CheckboxesPage';

describe('Checkboxes', () => {
  beforeEach(() => {
    CheckboxesPage.visit();
  });

  it('checks the first checkbox', () => {
    CheckboxesPage.check(1);
    CheckboxesPage.shouldBeChecked(1, true);
  });

  it('unchecks the second checkbox (which starts checked)', () => {
    CheckboxesPage.uncheck(2);
    CheckboxesPage.shouldBeChecked(2, false);
  });
});