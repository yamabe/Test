import { Ag2Page } from './app.po';

describe('ag2 App', () => {
  let page: Ag2Page;

  beforeEach(() => {
    page = new Ag2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
