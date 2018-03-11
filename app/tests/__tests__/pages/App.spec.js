'use strict';

import setupTests from './../configurations/setupTests';
import {shallowWithIntl} from './../configurations/helperTest';
import React from 'react';
import App from './../../../pages/App';


describe('App', () => {
  test('App should be rendered', () => {
    const wrapper = shallowWithIntl(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

});
