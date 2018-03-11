'use strict';

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import store from './../../store';

import Registration from './../../components/Registration/Registration';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {

        return (
              <div className="row ml-0 mr-0 align-items-center h-100">
                  <div className="col-10 mx-auto">
                    <div className="card">
                      <div className="card-title mt-3 mb-0">
                          <h3 className="text-center"><FormattedMessage id="pages.registration"/></h3>
                      </div>
                      <div className="card-body pt-0 pb-5 pl-5 pr-5">
                          <Registration/>
                      </div>
                    </div>
                  </div>
              </div>
        )
    }
}
