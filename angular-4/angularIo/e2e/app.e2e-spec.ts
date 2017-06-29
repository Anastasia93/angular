import { AngularIoPage } from './app.po';

describe('angular-io App', () => {
  let page: AngularIoPage;

  beforeEach(() => {
    page = new AngularIoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
