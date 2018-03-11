'use strict';

import { URL } from '../request.constant';

/**
 * @return {String}
 */
export const GET_URL_FOR_IBAN_VALIDATION = function () {
    return `${URL.IBAN_VALIDATION}`;
};
