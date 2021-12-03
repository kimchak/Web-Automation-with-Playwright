/** @type {import('@playwright/test').PlaywrightTestConfig} */


const config = {
    use: {
    baseURL : 'https://www.happn.com/en',
      headless: true,
      ignoreHTTPSErrors: true,
    //   video: 'on-first-retry',
    },
  };
  
  module.exports = config;