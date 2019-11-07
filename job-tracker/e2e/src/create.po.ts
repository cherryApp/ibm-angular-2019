import { browser, by, element, ElementFinder, Key } from 'protractor';

export class CreatePage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/employee/create`) as Promise<any>;
  }

  getFormField(fieldName: string) {
    return element(by.css(`form [ng-reflect-name=${fieldName}]`));
  }

  async fillField(fieldName: string, content: string): Promise<ElementFinder> {
    const field = this.getFormField(fieldName);
    await field.clear();
    await field.sendKeys(content);
    await field.sendKeys(Key.TAB);
    return field;
  }

  async checkAlertShown(nth: number): Promise<boolean> {
    return element.all(by.css(`form .alert.alert-danger`)).get(nth).isDisplayed();
  }

  async checkFieldAlert(fieldName: string, content: string, nth: number): Promise<boolean> {
    const field = await this.fillField(fieldName, content);
    return this.checkAlertShown(nth);
  }

  async testBadAndRightValues(fieldName: string, contents: [string, string], nth: number) {
    const badTest = await this.checkFieldAlert(fieldName, contents[0], nth);
    await browser.sleep(500);
    const rightTest = await this.checkFieldAlert(fieldName, contents[1], nth);
    await browser.sleep(500);
    return [badTest, rightTest];
  }

  async testRequiredField(fieldName: string, nth: number) {
    const field = this.getFormField(fieldName);
    await field.sendKeys('a');
    await field.sendKeys(Key.BACK_SPACE);
    const badTest = await this.checkFieldAlert(fieldName, '', nth);
    await browser.sleep(500);
    const rightTest = await this.checkFieldAlert(fieldName, 'a', nth);
    await browser.sleep(500);
    return [badTest, rightTest];
  }
}
