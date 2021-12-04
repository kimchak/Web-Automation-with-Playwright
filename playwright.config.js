/** @type {import('@playwright/test').PlaywrightTestConfig} */


const config = {
    use: {
    baseURL : 'https://www.happn.com/en/',
      headless: false,
    },
  };
  
  module.exports = config;