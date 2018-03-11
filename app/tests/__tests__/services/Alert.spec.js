'use strict';

import setupTests from './../configurations/setupTests';
import React from 'react';
import Alert from './../../../services/Alert';
import {SHOW_ALERT, HIDE_ALERT} from './../../../actions/alert';


describe('Alert', () => {
  test('Alert should be rendered', () => {
    let alertStore = {};
    const wrapper = global.shallow(<Alert alert={alertStore}/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('Alert should render with message', () => {
    let alertStore = {message:'successful'};
    const wrapper = global.shallow(<Alert alert={alertStore}/>);
    expect(wrapper.find('.alert').children('strong').text()).toEqual(alertStore.message);
  });
  test('Alert should close when close link clicked', () => {
     const spy = jest.spyOn(Alert, 'closeAlert');
     let alertStore = {message:'successful'};
     const wrapper = global.shallow(<Alert alert={alertStore}/>);
     wrapper.find('.close').simulate('click');
     expect(spy).toHaveBeenCalled();
  });
});
