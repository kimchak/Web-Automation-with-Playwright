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

    async navigateToSignInInfo() {
        await this.page.click(this.signupInfoLink);

    }

    async fillReport() {
        await this.page.fill('input[name=name]', "test");
        await this.page.fill('input[name=mail]', "test@test.fr");
        await this.page.selectOption('select[name="reason"]', "other");
        await this.page.fill('textarea[name="message"]', "test");
    }

}
