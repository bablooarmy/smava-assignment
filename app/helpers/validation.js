/**
 * @doc
 * Validation helpers
 */

'use strict';
import {ERROR_MESSAGES} from './../constants/request.constant';
/**
 * @param {String} email
 */
export const isEmailValid = email => {
    const reqExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    return reqExp.test(email);
};

/**
 * @param {String} value
 */
export const isOnlyAlphabetic = value => {
    const reqExp = /^[a-zA-Z]+$/;
    return reqExp.test(value);
};

export const required = (value) => {
  if(value){
    return undefined;
  }
  else{
    return ERROR_MESSAGES.REQUIRED;
  }
}

export const email = (value) =>{
  if(value && !isEmailValid(value)){
    return ERROR_MESSAGES.USER_DEFINED;
  }
  else{
    return undefined;
  }
};

export const alpha = (value) =>{
  if(value && !isOnlyAlphabetic(value)){
    return ERROR_MESSAGES.USER_DEFINED;
  }
  else{
    return undefined;
  }
};
