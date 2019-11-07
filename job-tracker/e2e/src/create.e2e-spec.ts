import { CreatePage } from './create.po';
import { browser, logging, Key, element, by } from 'protractor';

describe('create employee page', () => {
  let page: CreatePage;

  beforeEach(() => {
    page = new CreatePage();
  });

  it('should validate firstname field', async () => {
    await page.navigateTo();
    const result = await page.testBadAndRightValues('firstName', ['aa', 'aaaa'], 0);
    expect(result).toEqual([true, false]);
  });

  it('should validate lastName field', async () => {
    await page.navigateTo();
    const result = await page.testBadAndRightValues('lastName', ['aa', 'aaaaa'], 1);
    expect(result).toEqual([true, false]);
  });

  it('should validate email field', async () => {
    await page.navigateTo();
    const result = await page.testRequiredField('email', 2);
    expect(result).toEqual([true, false]);
  });
  
  it('should validate gender field', async () => {
    await page.navigateTo();
    const result = await page.testRequiredField('gender', 3);
    expect(result).toEqual([true, false]);
  });

  it('should validate ipAddress field', async () => {
    await page.navigateTo();
    const result = await page.testRequiredField('ipAddress', 4);
    expect(result).toEqual([true, false]);
  });

  it('should validate company field', async () => {
    await page.navigateTo();
    const result = await page.testRequiredField('company', 5);
    expect(result).toEqual([true, false]);
  });

  it('should validate jobTitle field', async () => {
    await page.navigateTo();
    const result = await page.testRequiredField('jobTitle', 6);
    expect(result).toEqual([true, false]);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
