import { BabyGotchiPage } from './app.po';

describe('baby-gotchi App', () => {
  let page: BabyGotchiPage;

  beforeEach(() => {
    page = new BabyGotchiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
