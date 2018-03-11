'use strict';

import {isEmailValid, required, email} from './../../../helpers/Validation';
import {ERROR_MESSAGES} from './../../../constants/request.constant';

describe('Test Validation',()=>{
    it('Test isEmailValid is valid', () => {
        let value = "raja.rathinam1@wipro.com";
        expect(isEmailValid(value)).toEqual(true);
    });
    it('Test isEmailValid is invalid', () => {
        let value = "raja.rathinam1wipro.com";
        expect(isEmailValid(value)).toEqual(false);
    });
    it('Test email return error message', () => {
        let value = "raja.rathinam1@wipro.com";
        expect(email(value)).toEqual(undefined);
    });
    it('Test email return undefined', () => {
        let value = "raja.rathinam1wipro.com";
        expect(email(value)).toEqual(ERROR_MESSAGES.USER_DEFINED);
    });
    it('Test required return error message', () => {
        let value;
        expect(required(value)).toEqual(ERROR_MESSAGES.REQUIRED);
    });
    it('Test required return undefined', () => {
        let value = "raja";
        expect(required(value)).toEqual(undefined);
    });
});
