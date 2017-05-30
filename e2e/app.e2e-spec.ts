import { NgTestProjPage } from './app.po';

describe('ng-test-proj App', () => {
  let page: NgTestProjPage;

  beforeEach(() => {
    page = new NgTestProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
