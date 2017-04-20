import { AngularTwoExamplesPage } from './app.po';

describe('angular-two-examples App', () => {
  let page: AngularTwoExamplesPage;

  beforeEach(() => {
    page = new AngularTwoExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
