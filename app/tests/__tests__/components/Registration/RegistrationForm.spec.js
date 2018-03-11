'use strict';

import setupTests from './../../configurations/setupTests';
import React from 'react';
import RegistrationForm from './../../../../components/Registration/RegistrationForm';


describe('Test RegistrationForm', () => {
  test('RegistrationForm should be rendered', () => {
    const wrapper = global.shallow(<RegistrationForm/>);
    expect(wrapper).toMatchSnapshot();
  });

});
