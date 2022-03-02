const supertest = require('supertest')
let api_test_url = "";

if (process.env.ENV === "test") {
    api_test_url = "https://localhost"
}
else {
    api_test_url = "https://localhost1"
}

let baseURL = supertest(api_test_url);

module.exports = { baseURL, api_test_url }
