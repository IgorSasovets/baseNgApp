import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should check base page screenshot', () => {
  	return browser.protractorImageComparison.saveScreen('basePageScreen')
  		.then(() => browser.protractorImageComparison.checkScreen('basePageScreen', {saveAboveTolerance: 0}))
  		.then(mismatchPercentage => {
  			console.log('MISMATCH:' + mismatchPercentage);
  			expect(mismatchPercentage).not.toBeGreaterThan(0);
  		});
  });
});
