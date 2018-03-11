/**
 * @doc
 * Validation helpers
 */

'use strict';
import {ERROR_MESSAGES} from './../constants/request.constant';
import {isValidIBAN} from './../resources/Registration.resource';

const asyncValidate = (values /*, dispatch */) => {
  return isValidIBAN(values.iban).then((response) => { // simulate server latency
    if (!response.valid) {
      throw {iban: ERROR_MESSAGES.USER_DEFINED}
    }
  });
};

export default asyncValidate;
