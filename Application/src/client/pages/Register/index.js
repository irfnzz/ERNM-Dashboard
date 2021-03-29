import React from 'react';
import { RedirectWithoutLastLocation } from 'react-router-last-location';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { useState } from "react";
import Axios from "axios"; //make request thru api
 
import Layout from 'components/Layout';
 
import * as action from './action';
 
let Register = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [userList, setUserList] = useState([]);
  
  const addUser = () => {
    Axios.post("http://localhost:3003/create", {
      email: email,
      password: password,
    }).then(() => {
      console.log("success");
      setUserList([
        ...userList,
        {
          email: email,
          password: password,
        },
      ]);
    });
  };
 
  return (
    <Layout title="Register"  showSidebar={false} needLogin={false}>
      <h1 className='text-center'>Register</h1>
 
      <div className='row'>
        <div className='col col-md-6 offset-md-3'>
          <form>
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
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
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
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
 
            <button onClick={addUser} className='btn btn-primary btn-block'>
              Register
            </button>
 
            <p className='login text-right btn__signup'>
              Already have an account? <a className='btn__link ' href='/Login'> Sign in </a>
            </p>
 
          </form>
        </div>
      </div>
    </Layout>
  );
};
 
Register = reduxForm({
  form: 'Register',
})(Register);
 
export default Register;