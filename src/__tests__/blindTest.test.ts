import { PracticePage } from "./PracticePage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
import { isStringTextContainingNode } from "typescript";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new PracticePage(driver);
jest.setTimeout(150000)

test("can search stories", async () => {
 
  await page.navigate();
  await page.searchStories("batman");
  let titles = await page.getStoryTitles();
  expect(titles[0]).toContain('batman');
});
afterAll(async () => {
  await driver.quit();
});