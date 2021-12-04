/** @type {import('@playwright/test').PlaywrightTestConfig} */


const config = {
    use: {
      headless: true,
    baseURL : 'https://www.happn.com/en/',
      ignoreHTTPSErrors: true,
    //   video: 'on-first-retry',
    },
  };
  
  module.exports = config;