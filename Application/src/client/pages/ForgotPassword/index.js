import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import { isEmail } from 'validator';
import './style.scss';
import Layout from 'components/Layout';

import * as action from './action';

let ForgotPasswordRequest = ({ handleSubmit, forgotPasswordRequestAction, route: { title } }) => {
  const onSubmit = async (value) => {
    forgotPasswordRequestAction(value);
  };

  return (
    <Layout title={title} returnPath='/' showSidebar={false}>

     <div className='row  shadow-lg p-3 mb-5 bg-white rounded card__login'>

        <div className='col col-md-6 offset-md-3'>
        <h1 className='text-center sign__typo'>Forgot Your Password?</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <b>
                <label htmlFor='email'>Email</label>
              </b>
              <Field
                id='email'
                name='email'
                type='email'
                component='input'
                placeholder='Email'
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <b>
                <label htmlFor='phonenumber'>Phone Number</label>
              </b>
              <Field
                id='phonenumber'
                name='phonenumber'
                type='phonenumber'
                component='input'
                placeholder='Phone Number'
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary btn-block'>
              Send Reset Link
            </button>
          </form>
        </div>
     </div>
    </Layout>
  );
};

ForgotPasswordRequest = reduxForm({
  form: 'ForgotPasswordRequest',
})(ForgotPasswordRequest);

const mapStateToProps = ({ global, forgotPasswordRequest }) => ({
  global,
  forgotPasswordRequest,
});

const mapDispatchToProps = {
  forgotPasswordRequestAction: action.forgotPasswordRequestAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordRequest);