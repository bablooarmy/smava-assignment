'use strict';

import notificationReducer from './../../../reducers/notification';
import {SHOW_NOTIFICATION, REMOVE_NOTIFICATION} from './../../../actions/notification';
describe('>>>R E D U C E R --- Test notificationReducer',()=>{
    it('+++ reducer for SHOW_NOTIFICATION', () => {
        let state = {};
        let showMessage = "Hello";
        state = notificationReducer(state, {type:SHOW_NOTIFICATION,message:showMessage});
        expect(state).toEqual({message:showMessage})
    });
    it('+++ reducer for REMOVE_NOTIFICATION', () => {
        let state = {};
        let showMessage = "Hello";
        state = notificationReducer(state,{type:REMOVE_NOTIFICATION,message:showMessage});
        expect(state).toEqual({message:''})
    });
});
