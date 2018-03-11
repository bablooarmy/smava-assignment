'use strict';

jest.mock('./../../../helpers/asyncValidate', () => ({
    asyncValidate: jest.fn(() => {
        return Promise.resolve({
            iban: 'user defined'
        });
    })
}));

import {asyncValidate} from './../../../helpers/asyncValidate';
import {ERROR_MESSAGES} from './../../../constants/request.constant';

describe('Test Async Validation',()=>{
    it('Test asyncValidate is valid', () => {
        let values = {iban:'ga3344455'};
        asyncValidate(values).then(response=>{
          expect(response).toEqual({iban: ERROR_MESSAGES.USER_DEFINED});
        });
    });
});
