'use strict';

import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import store from './../store';
import { hideAlert } from './../actions/alert';

export default class Alert extends Component {
    static closeAlert() {
        store.dispatch(hideAlert());
    }

    render() {
        if (this.props.alert && isEmpty(this.props.alert.message)) {
            return null;
        }

        return <div className="alert alert-primary fade show" role="alert">
          <strong>{this.props.alert.message}</strong>
          <button type="button" className="close" aria-label="Close" onClick={Alert.closeAlert}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
    }
}
