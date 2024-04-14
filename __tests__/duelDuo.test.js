const { Builder, Browser, By, until, key } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  //test 1: Need to check that the draw button displays the choices
  test("clicking draw button displays choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.elementLocated(By.id("draw")), 5000); //this means wait for 5 seconds
    await driver.findElement(By.id("draw")).click();
    const choicesDiv = await driver.findElement(By.id("choices"));
    expect(await choicesDiv.isDisplayed()).not.toBe("");
});

//test 2: Need to check that the add to duo button displays player-duo
test("clicking add to Dua button displays player-duo", async () => {
  await driver.get("http://localhost:8000");
  await driver.wait(until.elementLocated(By.id("draw")), 5000); //this means wait for 5 seconds
  await driver.findElement(By.id("draw")).click();
  await driver.wait(until.elementLocated(driver.findElement(By.id("player-duo"))), 5000);
  const playerDuoDiv = await driver.findElement(By.id("player-duo"));
  expect(await playerDuoDiv.isDisplayed()).toBe(true);
});
});