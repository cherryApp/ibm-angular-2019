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
}
