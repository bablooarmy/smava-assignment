'use strict';

jest.mock('./../../../resources/ajax', () => (
    jest.fn((method, url, data, config) => {
        return Promise.resolve({
            valid: true,
        });
    })
));

import ajax from './../../../resources/ajax';
import { GET_URL_FOR_IBAN_VALIDATION } from './../../../constants/components/Registration.constant';

describe('Test ajax resource',()=>{
    it('ajax resource should return response', () => {
      let URL = GET_URL_FOR_IBAN_VALIDATION();
      let data = {iban: '2345666777'};
      ajax('POST', URL, JSON.stringify(data), {
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(response=>{
          expect(response).toEqual({valid:true});
        });
    });
});
