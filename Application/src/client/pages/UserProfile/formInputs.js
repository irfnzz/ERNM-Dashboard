import React, { useState } from 'react';
// REACT BOOTSTRAP COMPONENTS
import { Form, Button, Row, Col } from 'react-bootstrap';
// BOOTSTRAP LIBRARY
import 'bootstrap/dist/css/bootstrap.min.css';
//React select component
//import Select from 'react-select';
//Bootstrap select 
//import $ from 'jquery';
//import 'bootstrap-select/dist/js/bootstrap-select.min.js';
//import 'bootstrap-select/dist/css/bootstrap-select.min.css';


 
const App = () => {
 
  const [ form, setForm ] = useState({});
  const [ errors, setErrors ] = useState({});
 
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }
 
  const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Submit changes!');
    }
  }
 
  function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
 
function validatePassword(password) {
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
  return re.test(password);
}

function validatePhoneNumber(phonenumber) {
  var re = /[0-9]$/;
  return re.test(phonenumber);
}
 
  const findFormErrors = () => {
    const { firstName, lastName, email, phonenumber, password, employmentType, primarySkills, secondarySkills } = form;
    const newErrors = {};

    // firstName errors
    if ( !firstName || firstName === '' ) newErrors.firstName = 'First name is required';

    // lastName errors
    if ( !lastName || lastName === '' ) newErrors.lastName = 'Last name is required';

    // email errors
    if ( !email || email === '' ) newErrors.email = 'Email is required';
    else if ( ! validateEmail(email) ) newErrors.email = 'Email is invalid';

    // phonenumber errors
    if ( !phonenumber || phonenumber === '' ) newErrors.phonenumber = 'Phone number is required';
    else if ( ! validatePhoneNumber(phonenumber)) newErrors.phonenumber = 'Must be a number';

    // password errors
    if ( !password || password === '' ) newErrors.password = 'Password is required';
    else if ( ! validatePassword(password)) newErrors.password = 'Must have 10 characters and at least 1 lowercase, 1 uppercase, 1 symbol and 1 number';
    
    // employmentType errors
    if ( !employmentType || employmentType === '' ) newErrors.employmentType = 'Select your employment type';
    
    // primarySkills errors
    if ( !primarySkills || primarySkills === '' ) newErrors.primarySkills = 'Select your primary skills';

    // secondarySkills errors
    if ( !secondarySkills || secondarySkills === '' ) newErrors.secondarySkills = 'Select your secondary skills';
  
    return newErrors;
  }

  /*var primarySkills = [

      {
          value: "C#",
          label: "C#"
      },
      {
          value: ".Net",
          label: ".Net"
      },
      {
          value: "HTML",
          label: "HTML"
      },
      {
          value: "Javascript",
          label: "Javascript"
      },
      {
          value: "Node.js",
          label: "Node.js"
      },
      {
          value: "React.js",
          label: "React.js"
      },
      {
          value: "Visual Basic",
          label: "Visual Basic"
      },

  ];

  var secondarySkills = [

      {
          value: "C#",
          label: "C#"
      },
      {
          value: ".Net",
          label: ".Net"
      },
      {
          value: "HTML",
          label: "HTML"
      },
      {
          value: "Javascript",
          label: "Javascript"
      },
      {
          value: "Node.js",
          label: "Node.js"
      },
      {
          value: "React.js",
          label: "React.js"
      },
      {
          value: "Visual Basic",
          label: "Visual Basic"
      },

  ];*/
 
 
  return (
    
    
    <div className='d-flex flex-column align-items-center'>
      <h4 style={{  margin: '30px' }}>User Profile</h4>
      <Form style={{ width: '550px' }}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>*First Name</Form.Label>
              <Form.Control 
                type='text' 
                onChange={ e => setField('firstName', e.target.value) }
                isInvalid={ !!errors.firstName }
              />
              <Form.Control.Feedback type='invalid'>{ errors.firstName }</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>*Last Name</Form.Label>
              <Form.Control 
                type='text' 
                onChange={ e => setField('lastName', e.target.value) }
                isInvalid={ !!errors.lastName }
              />
              <Form.Control.Feedback type='invalid'>{ errors.lastName }</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
 
        <Form.Group>
              <Form.Label>*Email</Form.Label>
              <Form.Control 
                type='email' 
                onChange={ e => setField('email', e.target.value) }
                isInvalid={ !!errors.email }
              />
              <Form.Control.Feedback type='invalid'>{ errors.email }</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
              <Form.Label>*Phone Number</Form.Label>
              <Form.Control 
                type='tel' 
                onChange={ e => setField('phonenumber', e.target.value) }
                isInvalid={ !!errors.phonenumber }
              />
              <Form.Control.Feedback type='invalid'>{ errors.phonenumber }</Form.Control.Feedback>
        </Form.Group>
 
        <Form.Group>
              <Form.Label>*Password</Form.Label>
              <Form.Control 
                type='password' 
                onChange={ e => setField('password', e.target.value) }
                isInvalid={ !!errors.password }
              />
              <Form.Control.Feedback type='invalid'>{ errors.password }</Form.Control.Feedback>
        </Form.Group>
 
        <Form.Group>
          <Form.Label>*Employment Type</Form.Label>
          <Form.Control 
            as='select' 
            onChange={ e => setField('employmentType', e.target.value) }
            isInvalid={ !!errors.employmentType }
          >
            <option value=''>Select your employment type</option>
            <option value='CDH'>CDH (Contract Direct Hire)</option>
            <option value='MSA'>MSA</option>
            <option value='Permanent'>Permanent</option>
            
          </Form.Control>
          <Form.Control.Feedback type='invalid'>{ errors.employmentType }</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Primary Skills</Form.Label>
          <Form.Control 
            as='select' 
            multiple onChange={ e => setField('primarySkills', e.target.value) }
            isInvalid={ !!errors.primarySkills }
          >
            <option value=''>Select your employment type</option>
            <option value='c#'>C#</option>
            <option value='.net'>.Net</option>
            <option value='html'>HTML</option>
            <option value='javascript'>Javascript</option>
            <option value='nodejs'>Node.js</option>
            <option value='reactjs'>React.js</option>
            <option value='visualbasic'>Visual Basic</option>
            
          </Form.Control>
          <Form.Control.Feedback type='invalid'>{ errors.primarySkills }</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Secondary Skills</Form.Label>
          <Form.Control 
            as='select' 
            multiple onChange={ e => setField('secondarySkills', e.target.value) }
            isInvalid={ !!errors.secondarySkills }
          >
            <option value=''>Select your employment type</option>
            <option value='c#'>C#</option>
            <option value='.net'>.Net</option>
            <option value='html'>HTML</option>
            <option value='javascript'>Javascript</option>
            <option value='nodejs'>Node.js</option>
            <option value='reactjs'>React.js</option>
            <option value='visualbasic'>Visual Basic</option>
            
          </Form.Control>
          <Form.Control.Feedback type='invalid'>{ errors.secondarySkills }</Form.Control.Feedback>
        </Form.Group>


        <Button className= "mt-3 center" type='submit' onClick={ handleSubmit }>Submit</Button>
      </Form>
    </div>
  )
}
 
export default App;


/*import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router';
 
//import Layout from 'components/Layout';
import "react-widgets/styles.css"; 
import Multiselect from "react-widgets/Multiselect";
import DropdownList from "react-widgets/DropdownList";
 
//import { Form, Button, Row, Col } from 'react-bootstrap';
//import {TextField, FormControlLabel, FormControl, Select, InputLabel, FormHelperText} from '@material-ui/core';
 
    const required = value => value ? undefined : 'Required';
 
    const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
 
    const maxLength15 = maxLength(15);
 
    const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
 
    const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
 
    const minValue18 = minValue(18);
 
    const emailrule = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;
 
    const passwordrule = value =>
    value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/i.test(value) ?
    'Must have 10 characters and at least 1 lowercase, 1 uppercase, 1 symbol and 1 number' : undefined;
 
    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="mt-3">{label}</label>
        <div>
        <input {...input} placeholder={label} type={type}/>
        <div><small>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</small></div>
        </div>
    </div>
    )
 
    const renderMultiselect = ({ input, data, valueField, textField }) =>
    <Multiselect {...input}
        onBlur={() => input.onBlur()}
        value={input.value || []} // requires value to be an array
        data={data}
        valueField={valueField}
        textField={textField}/>
 
    const renderDropdownList = ({ input, data, valueField, textField }) =>
    <DropdownList {...input}
        data={data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange} />
 
    const FormInputs = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
 
            <div >
                <form className="ml-5 mr-5 mt-2"  onSubmit={handleSubmit} >
                    
                    <Field className="custom" name="firstName" type="text"
                        component= {renderField} label="*First Name"
                        validate={[ required ]}
                    />
 
                    <Field name="lastName" type="text"
                        component={renderField} label="*Last Name"
                        validate={[ required ]}
                    />
 
                    <Field name="email" type="email"
                        component={renderField} label="*Email"
                        validate={[ required, emailrule]}
                    />
                    <Field name="phonenumber" type="tel"
                        component={renderField} label="Phone number"
                        validate={[ required, number ]}
                    />
                    <Field name="password" type="password"
                        component={renderField} label="Password"
                        validate={[ required, passwordrule ]}
                    />
 
                    <div className="ml-5 mr-5">
                        <label className="mt-3">Employment Type</label>
                        <Field
                        name="employmentType"
                        component={renderDropdownList}
                        onBlur={() => props.onBlur()}
                        data={[ 'Permanent', 'Contract Dire Hire', 'MSA']}
                        valueField="value"
                        textField="color"/>
                    </div>
 
 
                    <div className="ml-5 mr-5">
                        <label className="mt-3">Primary Skills</label>
                        <Field
                        name="primarySkills"
                        placeholder="Select your primary Skills"
                        component={renderMultiselect}
                        validate={[ required ]}
                        defaultValue={[]}
                        onBlur={() => props.onBlur()}
                        data={[ 'C#', '.Net', 'HTML', 'Javascript', 'Node.js', 'React.js', 'Visual Basic']} />
                    </div>
 
                    <div className="ml-5 mr-5">
                        <label className="mt-3">Secondary Skills</label>
                        <Field
                        name="secondarySkills"
                        placeholder="Select your secondary skills"
                        component={renderMultiselect}
                        validate={[ required ]}
                        defaultValue={[]}
                        onBlur={() => props.onBlur()}
                        data={[ 'C#', '.Net', 'HTML', 'Javascript', 'Node.js', 'React.js', 'Visual Basic']} />
                    </div>
 
                    <button className="ml-5 mt-4 mb-3 btn btn-primary custom"  type="submit"  disabled={submitting}>Submit</button>
 
                </form>
            </div>
        )
    }
//}
 
 
export default reduxForm({
    form: 'profileForm',
})(FormInputs);*/
