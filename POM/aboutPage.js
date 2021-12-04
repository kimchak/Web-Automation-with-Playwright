// @ts-check
const { expect } = require('@playwright/test');

exports.AboutPage = class AboutPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.numbersContainer = page.locator('#number-title')
        this.numbers = page.locator('span.number')
        this.picturesContainer = page.locator('#team-people')
        this.pictures = page.locator('div.team__member__pic');


    }

    async numbersVisible() {
        await this.numbersContainer.hover();
        await expect(this.numbers).toHaveCount(3);
       await expect(this.numbers.nth(0)).toHaveText("100M");
       await expect(this.numbers.nth(1)).toHaveText("4.9M");
       await expect(this.numbers.nth(2)).toHaveText("1.5M");

    //    await expect(this.numbers).toBeVisible();
       
    }

    async picturesVisible() {
        // await expect(this.pictures).toBeVisible();
        await this.picturesContainer.hover();
        await expect(this.pictures).toHaveCount(83);
    }

}
