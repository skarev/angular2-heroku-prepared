import { FourWalletsUiPage } from './app.po';

describe('four-wallets-ui App', function() {
  let page: FourWalletsUiPage;

  beforeEach(() => {
    page = new FourWalletsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
