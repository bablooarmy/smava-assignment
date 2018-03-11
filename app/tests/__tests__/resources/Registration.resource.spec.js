'use strict';

jest.mock('./../../../resources/Registration.resource', () => ({
    isValidIBAN: jest.fn(() => {
        return Promise.resolve({
            valid: true,
        });
    })
}));

import {isValidIBAN} from './../../../resources/Registration.resource';

describe('Test registration resource',()=>{
    it('resource for isValidIBAN', () => {
        let iban = 'ga234556666';
        isValidIBAN(iban).then(response=>{
          expect(response).toEqual({valid:true});
        });
    });
});
