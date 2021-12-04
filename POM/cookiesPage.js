// @ts-check
const { expect } = require('@playwright/test');

exports.CookiesPage = class CookiesPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.navigationMenu = page.locator('.submenu__content li')
        this.emails = page.locator('a[href^=mailto]');

    }

    async validatePageVisible() {

    }

    async validateNavigationMenu() {
        await expect(this.navigationMenu.nth(4)).toHaveText('Contact');
    }

    async emailsAreCorrect() {
        console.log(await this.emails);
        for (let i = 0; i < await this.emails.count(); i++) {
            await expect(this.emails.nth(i)).toContainText('@happn.fr');
        }
    }

}
