const puppeteer = require('puppeteer-core');

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  console.log('Launching Edge...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });
  
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      console.log(`[Browser ${msg.type()}] ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    console.log(`[Browser PageError] ${err.message}`);
  });

  console.log('Navigating to http://localhost:3000');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await wait(5000); // Wait for preloader to finish
  
  console.log('Navigating to /services');
  await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle2' });
  await wait(3000);

  console.log('Clicking on Horses link');
  await page.goto('http://localhost:3000/horses', { waitUntil: 'networkidle2' });
  await wait(2000);

  console.log('Closing browser');
  await browser.close();
})();
