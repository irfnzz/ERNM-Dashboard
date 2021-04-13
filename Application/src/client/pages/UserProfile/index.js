import React from 'react';
//import Layout from 'components/Layout';
//import MdViewer from 'components/MdViewer';

import App from './formInputs';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';

//import "bootstrap/dist/css/bootstrap.min.css";
//import { connect , Provider } from 'react-redux';
//import { createStore } from 'redux';
//import reducer from './reducer';
 
//const store = createStore(reducer);

const source = `# User Profile`;

const UserProfile = () => (
  

    <div className='d-flex flex-column align-items-center' style={{  margin: '50px' }}>
        <Card style={{ width: '750px'}} body>
            <App/>
        </Card>
    </div> 
      
);

export default UserProfile;