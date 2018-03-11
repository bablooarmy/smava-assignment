'use strict';

import React, { Component } from 'react';
import { intlShape, injectIntl, FormattedMessage, InjectedIntlProps } from "react-intl";

import RegistrationForm from './RegistrationForm';
import {Registration_Interface} from './../../helpers/interfaces';
import {showAlert, hideAlert} from './../../actions/alert';
import {TIMER} from './../../constants/timer.constant';

import store from './../../store';


class Registration extends Component<InjectedIntlProps, Registration_Interface> {
    static propTypes: React.ValidationMap<any> = {
        intl: intlShape.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
          firstNameLabel: props.intl.formatMessage({id: "registration.first_name"}),
          lastNameLabel: props.intl.formatMessage({id: "registration.last_name"}),
          emailLabel: props.intl.formatMessage({id:"registration.email"}),
          ibanLabel: props.intl.formatMessage({id:"registration.iban"}),
          submitLabel: props.intl.formatMessage({id:"registration.submit"}),
          formSubmitSucessfulMessage: props.intl.formatMessage({id: "notification.congratz_all_data_is_valid"}),
          emailValidationErrorMessage: props.intl.formatMessage({id: "validation.value_should_be_a_valid_email"}),
          nameValidationErrorMessage: props.intl.formatMessage({id: "validation.value_should_be_alphabetic"}),
          ibanValidationErrorMessage: props.intl.formatMessage({id: "validation.iban_should_be_valid"}),
          requiredValidationErrorMessage: props.intl.formatMessage({id: "validation.required"})
        };
    }
    submit = values => {
      store.dispatch(showAlert(this.state.formSubmitSucessfulMessage));
      setTimeout(() => {
        store.dispatch(hideAlert())
      }, TIMER.ALERT_AUTO_CLOSE_AFTER)
    }
    render() {
      return <RegistrationForm onSubmit={this.submit}
              firstNameLabel={this.state.firstNameLabel}
              lastNameLabel={this.state.lastNameLabel}
              emailLabel={this.state.emailLabel}
              ibanLabel={this.state.ibanLabel}
              submitLabel={this.state.submitLabel}
              requiredErrorMessage={this.state.requiredValidationErrorMessage}
              emailErrorMessage={this.state.emailValidationErrorMessage}
              nameErrorMessage={this.state.nameValidationErrorMessage}
              ibanErrorMessage={this.state.ibanValidationErrorMessage}/>
    }
}

export default injectIntl(Registration);
