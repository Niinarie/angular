import { Angular5Page } from './app.po';

describe('angular5 App', function() {
  let page: Angular5Page;

  beforeEach(() => {
    page = new Angular5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
