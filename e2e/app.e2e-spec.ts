import { ProjectWinterPage } from './app.po';

describe('project-winter App', function() {
  let page: ProjectWinterPage;

  beforeEach(() => {
    page = new ProjectWinterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
