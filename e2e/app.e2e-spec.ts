import { OzewaiPage } from './app.po';

describe('ozewai App', function() {
  let page: OzewaiPage;

  beforeEach(() => {
    page = new OzewaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
