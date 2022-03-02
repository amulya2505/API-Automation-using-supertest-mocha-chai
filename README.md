# API-Automation-using-supertest-mocha-chai


### Prerequisites:
Make sure you have npm and node installed.<br> 

To install nvm, follow these steps:

    Run `brew install nvm` <br>
    To check if nvm is successfully install, use `nvm -v` <br>

To install node.js, follow these steps: <br>

    To install node.js (stable version), use `nvm install <node_version>` <br>
    E.g., `nvm install 14` , this will install node.js version 14.X <br>
    To check if node.js is successfully install, use `node -v` <br>



### To install mocha, chai, supertest and mochawesome, follow these steps:
1. Navigate to folder <br> 
2. Run `npm install`<br> 

### To run API tests, follow these steps:
1. Navigate to the folder <br> 

2. To run specific test file, execute the following command.<br>
`ENV=<env-name> npx mocha <TestFile_name>`<br>

E.g., `ENV=test npx mocha ./test/api1.test.js`<br>

3. To run api test suite, execute the following command.<br>
`ENV=<env-name> npm run test`<br>
E.g., `ENV=test npm run test`<br>

Note: 
    - Environment related properties are in the `/config/config.js` file.<br>
