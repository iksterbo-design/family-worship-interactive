import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(2000);
  const rootHtml = await page.evaluate(() => {
    const el = document.getElementById('root');
    return el ? el.outerHTML : 'null';
  });
  console.log('=== ROOT HTML (first 3000 chars) ===');
  console.log(rootHtml.substring(0, 3000));
  const hasCardTag = rootHtml.includes('<Card');
  console.log('Has raw <Card tag:', hasCardTag);
  const hasCardClass = rootHtml.includes('card');
  console.log('Has card class:', hasCardClass);
  await browser.close();
})();
