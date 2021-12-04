# Readme  
Lukasz Bartkowiak

## Overview and assumptions
This is a simple smoke test suite for happn.com/en site. The test cases were given beforehand, and the structure of the tests in ./tests directory  reflects them.  
Since the tests are run only against the English version of the app, user-facing attributes have been prioritized for the locator strategy and text-based locators are used in some cases. 
Behavior Driven Development strategies utilizing tools like Cucumber BDD have not been implemented, as the tests will be reviewed only by technical team members and not utilized in a business-facing context.

## Used technologies
The tests have been written in JavaScript with Playwright node package which enables running them on different browsers (Chromium, Firefox, Webkit) and emulating mobile devices.
The actual tests in ./tests catalogue utilize Page Object Model to enhance code maintainability and they are written in a way that should facilitate reading them and align with the steps given in the guidelines.

## How to run
- clone repo
- run `npm install`
- run `npm run test` or `npm run debug` to view tests in debug console


## Challenges
The form in the FAQ page in 'Access contact page' test contains additional CAPTCHA protection. The captcha can be bypassed, but it would cause safety alerts on the server, hence this part has been omitted and commented out. Instead validation of the filled form fields is performed. Automating in real-use conditions would require a testing environment, in which the CAPTCHA validation could be turned off.

