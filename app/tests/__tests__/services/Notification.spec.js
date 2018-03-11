'use strict';

import setupTests from './../configurations/setupTests';
import React from 'react';
import Notification from './../../../services/Notification';


describe('Test Notification Service', () => {
  test('Notification should be rendered', () => {
    let notificationStore = {};
    const wrapper = global.shallow(<Notification notification={notificationStore} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Notification should render with message', () => {
    let notificationStore = {message:'successful'};
    const wrapper = global.shallow(<Notification notification={notificationStore}/>);
    expect(wrapper.find('.badge-danger').text()).toEqual(notificationStore.message);
  });
});
