'use strict';

import setupTests from './../../configurations/setupTests';
import {shallowWithIntl} from './../../configurations/helperTest';
import React from 'react';
import Home from './../../../../pages/Home/Home';


describe('Home', () => {
  test('Home should be rendered', () => {
    const wrapper = global.shallow(<Home/>);
    expect(wrapper).toMatchSnapshot();
  });

});
