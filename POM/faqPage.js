// @ts-check
const { expect } = require('@playwright/test');

exports.FaqPage = class FaqPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.signupInfoLink = 'text = How can I sign up and log in';
        this.nameInput = this.page.locator('input[name=name]');
        this.mailInput = this.page.locator('input[name=mail]');
        this.optionBox = this.page.locator('select[name="reason"]');
        this.messageInput = this.page.locator('textarea[name="message"]');



    }

    async navigateToSignInInfo() {
        await this.page.click(this.signupInfoLink);

    }

    async fillReport() {
        await this.nameInput.fill("test");
        await this.mailInput.fill("test@test.fr");
        await this.optionBox.selectOption("other");
        await this.messageInput.fill("test");
    }

    async vaidateReport(){
        await expect(this.nameInput).toHaveValue("test");
        await expect(this.mailInput).toHaveValue("test@test.fr");
        await expect(this.optionBox).toHaveValue("other");
        await expect(this.messageInput).toHaveValue("test");

    }

    // async submitReport() {
    // const captchaFrame = await page
    //   .$("iframe[title=reCAPTCHA]")
    //   .then((frameHandler) => frameHandler.contentFrame());
    // await captchaFrame.click('span[role="checkbox"]');
    // await captchaFrame.click('button.faq__contact__form-submit');
    // 
    // }

}