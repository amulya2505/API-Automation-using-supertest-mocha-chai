
const assert = require('assert');
const expect = require('chai').expect;

const { baseURL,api_test_url } = require('../config/config')
const {api1} = require('../constants/api_path');
const {successful,badRequest} = require('../constants/responseMessage');
const {successStatus, badRequestStatus} = require('../constants/responseStatus');
const {req} = require ('../constants/requestBody');



describe('POST /v1', function () {
// any common method here which you want to use in multiple tests
   
  it('check v1 ', async () => {
        const body = req;
              
     const resp = await baseURL.post(api1)
                .send(body)
                .set('Content-type', 'application/json')
                .set('Origin', api_test_url)
                .query('queryparams')
      
     
        expect(resp.status).to.equal(successStatus);
        expect(resp.body.message).to.equal(successful);
    });
});
