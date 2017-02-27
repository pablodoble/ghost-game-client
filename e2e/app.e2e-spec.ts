import { GhostGameClientPage } from './app.po';

describe('ghost-game-client App', () => {
  let page: GhostGameClientPage;

  beforeEach(() => {
    page = new GhostGameClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
