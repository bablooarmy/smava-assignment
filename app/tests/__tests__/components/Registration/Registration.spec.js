'use strict';

import setupTests from './../../configurations/setupTests';
import {shallowWithIntl} from './../../configurations/helperTest';
import React from 'react';
import Registration from './../../../../components/Registration/Registration';
import { isValidIBAN } from './../../../../resources/Registration.resource';
import { ERROR_MESSAGES } from './../../../../constants/request.constant';


describe('Registration', () => {
  test('Registration should be rendered', () => {
    const wrapper = shallowWithIntl(<Registration/>);
    expect(wrapper).toMatchSnapshot();
  });

});
