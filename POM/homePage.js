// @ts-check
const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {


  constructor(page) {
    this.page = page;
    this.aboutLink = page.locator('li.header__nav__item > a:text("About")');
    this.contactLink = page.locator('a.footer__main__link:text("Contact")');
  }

  async navigate() {
    await this.page.goto("/");
  }

  async navigateToAbout() {
    await this.aboutLink.click()
    await expect(this.page).toHaveURL("about/");
  }

  async navigateToCookies() {

  }

  async navigateToContact() {
    await this.contactLink.click()
  }
}
