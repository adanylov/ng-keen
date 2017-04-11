import { NgKeenPage } from './app.po';

describe('ng-keen App', () => {
  let page: NgKeenPage;

  beforeEach(() => {
    page = new NgKeenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
