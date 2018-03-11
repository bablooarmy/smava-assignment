'use strict';

import React, { Component } from 'react';

const styles = {
    parent: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        zIndex: '2'
    }
};

export default class Notification extends Component {
    render() {
        const message = this.props.notification.message || '';

        return <div style={styles.parent}>
                  <span className="badge badge-danger">{message}</span>
              </div>
    }
}
