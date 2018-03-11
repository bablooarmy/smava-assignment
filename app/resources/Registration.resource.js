'use strict';

import { GET_URL_FOR_IBAN_VALIDATION } from '../constants/components/Registration.constant';
import ajax from './../resources/ajax';

/**
 * @param {String} iban
 * @return {Promise}
 */
export const isValidIBAN = function (iban) {
    let URL = GET_URL_FOR_IBAN_VALIDATION();
    let data = {iban: iban};
    return ajax('POST', URL, JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
