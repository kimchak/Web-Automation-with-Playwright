//@ts-check
const { test, expect } = require("@playwright/test");
const { AboutPage } = require("../POM/aboutPage");
const { CookiesPage } = require("../POM/cookiesPage");
const { HomePage } = require('../POM/homePage')

test.describe('Happn tech assignment test', async () => {

  test.skip("Access contact page", async ({ page }) => {
    await page.goto("/faq/articles/209413689");
    await page.fill('input[name=name]', "test");
    await page.fill('input[name=mail]', "test@test.fr");
    await page.selectOption('select[name="reason"]', "other");
    await page.fill('textarea[name="message"]', "test");
    await page.pause();
  
  
    // const captchaFrame = await page
    //   .$("iframe[title=reCAPTCHA]")
    //   .then((frameHandler) => frameHandler.contentFrame());
    // await captchaFrame.click('span[role="checkbox"]');
    // await captchaFrame.click('button.faq\_\_contact\_\_form-submit');
  });

  test('Access About page', async ({page}) => {
    const homePage = new HomePage(page);
    const aboutPage = new AboutPage(page);
    await homePage.navigate();
    await homePage.navigateToAbout();
    await aboutPage.numbersVisible();
    await aboutPage.picturesVisible();

  })

  test('Access Cookies page', async ({page}) => {
    const homePage = new HomePage(page);
    const cookiesPage = new CookiesPage(page);
    await homePage.navigateToCookies();
    await cookiesPage.navigationMenuTitleIsCorrect();
    await cookiesPage.emailsAreCorrect();
  })

})


