//@ts-check
const { test, expect } = require("@playwright/test");
const { AboutPage } = require("../POM/aboutPage");
const { ContactPage } = require("../POM/contactPage");
const { CookiesPage } = require("../POM/cookiesPage");
const { HomePage } = require('../POM/homePage')

test.describe('Happn tech assignment test', async () => {


  test.beforeEach(async ({page}) =>{
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.closeCookiePopup();

  })

  test("Access contact page", async ({ page, context }) => {
    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page);
    await homePage.navigateToContact();
    const faqPage = 
    await contactPage.navigateToFirstStep();
    await faqPage.navigateToSignInInfo();
    await faqPage.validateSignInInfo();
    await faqPage.fillReport();
    await faqPage.vaidateReport();
  });

  test('Access About page', async ({page}) => {
    const homePage = new HomePage(page);
    const aboutPage = new AboutPage(page);
    await homePage.navigateToAbout();
    await aboutPage.numbersVisible();
    await aboutPage.picturesVisible();

  })

  test('Access Cookies page', async ({page}) => {
    const homePage = new HomePage(page);
    const cookiesPage = new CookiesPage(page);
    await homePage.navigateToCookies();
    await cookiesPage.validateNavigationMenu();
    await cookiesPage.emailsAreCorrect();
  })

})



