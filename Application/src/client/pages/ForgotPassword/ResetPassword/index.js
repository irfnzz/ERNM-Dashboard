import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Layout from 'components/Layout';

import * as action from './action';

let ResetPassword = ({ handleSubmit, resetPasswordAction, route: { title } }) => {
  const onSubmit = async (value) => {
    resetPasswordAction(value);
  };

  return (
    <Layout title={title} returnPath='/' showSidebar={false}>

     <div className='row  shadow-lg p-3 mb-5 bg-white rounded card__login'>

        <div className='col col-md-6 offset-md-3'>
        <h1 className='text-center sign__typo'>Reset Password</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <b>
                <label htmlFor='password'>New Password</label>
              </b>
              <Field
                id='password'
                name='password'
                type='password'
                component='input'
                placeholder='New Password'
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <b>
                <label htmlFor='password'>Confirmation Password</label>
              </b>
              <Field
                id='password'
                name='password1'
                type='password'
                component='input'
                placeholder='Confirmation Password'
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary btn-block'>
              Save New Password!
            </button>
          </form>
        </div>
     </div>
    </Layout>
  );
};

ResetPassword = reduxForm({
  form: 'ResetPassword',
})(ResetPassword);

const mapStateToProps = ({ global, resetPassword }) => ({
  global,
  resetPassword,
});

const mapDispatchToProps = {
  resetPasswordAction: action.resetPasswordAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);