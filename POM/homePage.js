// @ts-check
const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {


  constructor(page) {
    this.page = page;
    this.cookieButton = page.locator('button[aria-label="Accept cookies"]');
    this.aboutLink = page.locator('li.header__nav__item > a:text("About")');
    this.contactLink = page.locator('a.footer__main__link:text("Contact")');
    this.cookiesLink = page.locator('a:has-text("Cookies")');
  }

  async navigate() {
    await this.page.goto("/");
  }

  async closeCookiePopup(){
    await this.cookieButton.click()
  }

  async navigateToAbout() {
    await this.aboutLink.click()
    await expect(this.page).toHaveURL("about/");
  }

  async navigateToCookies() {
    await this.cookiesLink.click()
  }

  async navigateToContact() {
    await this.contactLink.click()
  }
}
