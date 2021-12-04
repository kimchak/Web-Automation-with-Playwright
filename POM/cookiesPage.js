// @ts-check
const { expect } = require('@playwright/test');

exports.CookiesPage = class CookiesPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
    }

    async navigationMenuTitleIsCorrect() {     
    }

    async emailsAreCorrect() {
    }

}
