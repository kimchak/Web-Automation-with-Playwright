//@ts-check
const { test, expect } = require("@playwright/test");

test("Access About page", async ({ page }) => {
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
