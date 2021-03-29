import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Layout from 'components/Layout';
//import './styles.scss';
import MdViewer from 'components/MdViewer';
import {Form, FormControl, Button, Row, Col} from 'react-bootstrap'
 
const source = `
# User Profile
`;
 
const UserProfile = ({ route: { title } }) => (
  
    <Layout title={title} needLogin={true}>
        <MdViewer source={source} />
 
        <Form>
        <Row>
            <Col>
            <Form.Group className="ml-5 mt-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mr-5 mt-3" controlId="secondName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            </Col>
        </Row>   
            <Form.Group className="ml-5 mr-5 mt-2" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
 
            <Form.Group className="ml-5 mr-5 mt-2" controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Phone Number" />
            </Form.Group>
 
            <Form.Group className="ml-5 mr-5 mt-2" controlId="employmentType">
                <Form.Label>Employment Type</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>CDH (Contract Direct Hire)</option>
                    <option>MSA</option>
                    <option>Permanent</option>
                </Form.Control>
            </Form.Group>
 
            <Form.Group className="ml-5 mr-5 mt-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="ml-5 mr-5 mt-2" controlId="primarySkills">
                <Form.Label>Primary Skills</Form.Label>
                <Form.Control type="text" placeholder="Primary skills" />
            </Form.Group>

            <Form.Group className="ml-5 mr-5 mt-2" controlId="secondarySkills">
                <Form.Label>Secondary Skills</Form.Label>
                <Form.Control type="text" placeholder="Secondary skills" />
            </Form.Group>
 
             <Button className="ml-5 mt-3 mb-3" variant="primary" type="submit">
                Submit
            </Button>
 
        </Form>
    </Layout>
      
);
 
export default UserProfile;


/*import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}*/
