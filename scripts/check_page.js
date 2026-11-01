const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(2000);
  const content = await page.content();
  console.log('=== PAGE CONTENT (first 2000 chars) ===');
  console.log(content.substring(0, 2000));
  const h1s = await page.locator('h1').count();
  console.log('H1 count:', h1s);
  const tabs = await page.locator('.tab-bar button').count();
  console.log('Tab buttons:', tabs);
  const texts = await page.locator('body').textContent();
  console.log('=== BODY TEXT (first 1500 chars) ===');
  console.log(texts.substring(0, 1500));
  await browser.close();
})();
