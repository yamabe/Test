import { Ag1Page } from './app.po';

describe('ag1 App', () => {
  let page: Ag1Page;

  beforeEach(() => {
    page = new Ag1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
