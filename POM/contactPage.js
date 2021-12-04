// @ts-check
const { expect } = require('@playwright/test');
const { FaqPage } = require('./faqPage');

exports.ContactPage = class ContactPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.signupInfoLink = 'text = How can I sign up and log in';

    }

    async navigateToFirstStep() {
        const [newTab] = await Promise.all([
              this.page.waitForEvent('popup'),
              this.page.click('text=First steps')
            ]) 
            await newTab.waitForLoadState();
            return new FaqPage(newTab)
    }

}
