import { Assing2ses3Page } from './app.po';

describe('assing2ses3 App', () => {
  let page: Assing2ses3Page;

  beforeEach(() => {
    page = new Assing2ses3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
