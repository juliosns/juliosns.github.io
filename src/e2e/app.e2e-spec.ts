import { BenoitPage } from './app.po';

describe('benoit App', () => {
  let page: BenoitPage;

  beforeEach(() => {
    page = new BenoitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
