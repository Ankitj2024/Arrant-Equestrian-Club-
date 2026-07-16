const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log(`[Browser Console] ${msg.type()}: ${msg.text()}`));
  page.on('pageerror', err => console.log(`[Browser Error] ${err.message}`));

  console.log('Navigating to http://localhost:3000');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  console.log('Clicking on Services link');
  await page.click('text=Services');
  
  console.log('Waiting for navigation and animations...');
  await page.waitForTimeout(3000);
  
  await browser.close();
})();
