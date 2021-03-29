import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./maincss.scss"; 

import { Container, Row, Col } from 'react-bootstrap';

const Maindashboard = () => {
    return (
        <Container>
                <Row className="rows">
                    <Col className="columns" sm={3}><center>Content</center></Col>
                    <Col className="columns" sm={6}><center>Content</center></Col>
                    <Col className="columns" sm={3}><center>
                        <p>Team Member List</p>
                            Example 1, example 2, example 3
                            Example 4, example 5, example 6
                            example 7, example 8, example 9
                            Example 10, example 11, example 12,
                            example 13, example 14, example 15
                        </center></Col>
                </Row>
                <Col className="columns "></Col>
                <Row className="rows">
                    <Col className="columns" sm={6}><center>Content</center></Col>
                    <Col className="columns" sm={3}><center>
                        <p>WIDGET 2</p>
                            Example 1, example 2, example 3
                            Example 4, example 5, example 6
                            example 7, example 8, example 9
                            Example 10, example 11, example 12,
                            example 13, example 14, example 15
                        </center></Col> 
                    <Col className="columns" sm={3}><center>
                        <p>WIDGET 3</p>
                            Example 1, example 2, example 3
                            Example 4, example 5, example 6
                            example 7, example 8, example 9
                            Example 10, example 11, example 12,
                            example 13, example 14, example 15
                        </center></Col> 
                </Row>
            </Container>
    );
  }
  
  export default Maindashboard