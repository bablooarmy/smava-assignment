'use strict';

import alertReducer from './../../../reducers/alert';
import {SHOW_ALERT, HIDE_ALERT} from './../../../actions/alert';
describe('Test alertReducer',()=>{
    it('reducer for SHOW_ALERT', () => {
        let state = {};
        let showMessage = "Hello";
        state = alertReducer(state, {type:SHOW_ALERT,message:showMessage});
        expect(state).toEqual({message:showMessage})
    });
    it('reducer for HIDE_ALERT', () => {
        let state = {};
        let showMessage = "Hello";
        state = alertReducer(state,{type:HIDE_ALERT,message:showMessage});
        expect(state).toEqual({message:''})
    });
});
