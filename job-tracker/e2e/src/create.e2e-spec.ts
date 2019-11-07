import { CreatePage } from './create.po';
import { browser, logging, Key, element, by } from 'protractor';

describe('create employee page', () => {
  let page: CreatePage;

  beforeEach(() => {
    page = new CreatePage();
  });

  it('should validate firstname field', async () => {
    await page.navigateTo();
    const badData = await page.checkFieldAlert('firstName', 'aa', 0);
    const rightData = await page.checkFieldAlert('firstName', 'aaaa', 0);
    browser.sleep(2000);
    expect([badData, rightData]).toEqual([true, false], 'Firstname alert isn\'t show');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
