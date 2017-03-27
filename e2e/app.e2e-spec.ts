import { MfshoppingsitePage } from './app.po';

describe('mfshoppingsite App', function() {
  let page: MfshoppingsitePage;

  beforeEach(() => {
    page = new MfshoppingsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
