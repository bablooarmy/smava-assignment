'use strict';

import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { intlShape, injectIntl, FormattedMessage, InjectedIntlProps } from "react-intl";
import store from './../store';

import noInternet from 'no-internet';
import isEmpty from 'lodash/isEmpty';

import { pushNotification, removeNotification } from './../actions/notification';

// Services
import Alert from './../services/Alert';
import Notification from './../services/Notification';

// Pages
import Home from './Home/Home';

function mapStateToProps(store, props) {
    return {
        alert: store.alert,
        weather: store.weather,
        weatherCities: store.weatherCities,
        notification: store.notification
    }
}

class App extends Component<InjectedIntlProps, {}> {
    static propTypes: React.ValidationMap<any> = {
        intl: intlShape.isRequired
    };

    constructor() {
        super();
    }

    componentDidMount() {
        noInternet({callback: (offline) => {
            const offlineMessage = this.props.intl.formatMessage({id:'notification.you_are_offline'});
            if (offline && (isEmpty(this.props.notification.message) || this.props.notification.message !== offlineMessage)) {
                store.dispatch(pushNotification(offlineMessage));
            } else if (!offline && (!isEmpty(this.props.notification.message) && this.props.notification.message === offlineMessage )) {
                store.dispatch(removeNotification());
            }
        }});
    }

    render() {
        let alertStore = this.props.alert;
        let notificationStore = this.props.notification;

        return (
            <div className="app h-100">
                <Alert alert={alertStore} />
                <Route exact path="/" render={() => <Home {...this.props} /> } />
                <Notification notification={notificationStore} />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(injectIntl(App)));
