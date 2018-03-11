import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, email, alpha} from './../../helpers/validation';
import asyncValidate from './../../helpers/asyncValidate';
import {ERROR_MESSAGES} from './../../constants/request.constant';

const renderField = (
  props,
) => {
  const { input,
          label,
          type,
          meta: { asyncValidating, touched, error, warning },
          requiredMessage,
          errorMessage,
          validationFor
        } = props;
  return(
    <div className="form-row mb-3">
      <div className="col-12">
        <label className="mb-0"><strong>{label}</strong></label>
        <div className={asyncValidating?'input-group':''}>
          <input {...input} type={type} placeholder={label} className={error?'form-control is-invalid':'form-control is-valid'}/>
          {asyncValidating &&
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa fa-refresh fa-spin"></i>
              </span>
            </div>
          }
          {touched &&
            ((error && error==ERROR_MESSAGES.REQUIRED && <div className="invalid-feedback">{requiredMessage}</div>) ||
            (error && error==ERROR_MESSAGES.USER_DEFINED && <div className="invalid-feedback">{errorMessage}</div>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    </div>
  );
}

let RegistrationForm = props => {
  const { firstNameLabel,
          lastNameLabel,
          emailLabel,
          ibanLabel,
          submitLabel,
          requiredErrorMessage,
          emailErrorMessage,
          nameErrorMessage,
          ibanErrorMessage,
          handleSubmit,
          pristine,
          reset,
          submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName"
            validationFor="validationFirstName"
            label={firstNameLabel}
            component={renderField}
            type="text"
            requiredMessage={requiredErrorMessage}
            errorMessage={nameErrorMessage}
            validate={[required, alpha]} />
      <Field name="lastName"
              validationFor="validationLastName"
              label={lastNameLabel}
              component={renderField}
              type="text"
              requiredMessage={requiredErrorMessage}
              errorMessage={nameErrorMessage}
              validate={[required, alpha]} />
      <Field name="email"
              validationFor="validationEmail"
              label={emailLabel}
              component={renderField}
              type="email"
              requiredMessage={requiredErrorMessage}
              errorMessage={emailErrorMessage}
              validate={[required, email]} />
      <Field name="iban"
              validationFor="validationIban"
              label={ibanLabel}
              component={renderField}
              requiredMessage={requiredErrorMessage}
              errorMessage={ibanErrorMessage}
              validate={required}
              type="text" />
      <div className="form-row">
        <div className="col-3 offset-9 pt-5">
          <button type="submit" className="btn btn-warning text-white float-right">{submitLabel}</button>
        </div>
      </div>
    </form>
  )
}

RegistrationForm = reduxForm({
  // a unique name for the form
  form: 'registration',
  asyncValidate,
  asyncBlurFields: ['iban'],
})(RegistrationForm)

export default RegistrationForm
