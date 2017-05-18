import { HaufePage } from './app.po';

describe('haufe App', () => {
  let page: HaufePage;

  beforeEach(() => {
    page = new HaufePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
