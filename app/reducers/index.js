'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import alertReducer from './alert';
import notificationReducer from './notification';

export default combineReducers({
    alert: alertReducer,
    notification: notificationReducer,
    form: formReducer
});
