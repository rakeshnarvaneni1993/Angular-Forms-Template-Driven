import { FormSaiPage } from './app.po';

describe('form-sai App', () => {
  let page: FormSaiPage;

  beforeEach(() => {
    page = new FormSaiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
