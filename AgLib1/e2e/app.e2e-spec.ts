import { AgLib1Page } from './app.po';

describe('ag-lib1 App', () => {
  let page: AgLib1Page;

  beforeEach(() => {
    page = new AgLib1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
