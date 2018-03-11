'use strict';

import {GET_URL_FOR_IBAN_VALIDATION} from './../../../../constants/components/Registration.constant';

describe('Registration constants',()=>{
    it('GET_URL_FOR_IBAN_VALIDATION return url', () => {
        let url = "validateIBAN/"
        expect(GET_URL_FOR_IBAN_VALIDATION()).toEqual(url)
    });

});
