import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import { isEmail } from 'validator';
import './styles.scss';
import Layout from 'components/Layout';

import * as action from './action';

let Login = ({ handleSubmit, loginAction, route: { title } }) => {
  const onSubmit = async (value) => {
    loginAction(value);
  };

  return (
    <Layout title={title} returnPath='/' showSidebar={false} >
      <p>
        <a href='/' className='btn btn-primary'>
          <i className='fa fa-home'></i>
        </a>
      </p>

      

      <div className='row  shadow-lg p-3 mb-5 bg-white rounded card__login'>

        <div className='col col-md-6 offset-md-3'>
        <h1 className='text-center sign__typo'>Account Login</h1>
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
                <label htmlFor='password'>Password</label>
              </b>
              <Field
                id='password'
                name='password'
                type='password'
                component='input'
                placeholder='Password'
                className='form-control'
              />
              <p className='forgot-password text-right'>
                <a href='/Register'>Forgot your password? </a>
              </p>

            </div>

            <button type='submit' className='btn btn-primary btn-block'>
              Login
            </button>
            <p className='register text-right btn__signup'>
              Don't have an account? <a className='btn__link ' href='/Register'> Sign up </a>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

Login = reduxForm({
  form: 'Login',
})(Login);

const mapStateToProps = ({ global, login }) => ({
  global,
  login,
});

const mapDispatchToProps = {
  loginAction: action.loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
