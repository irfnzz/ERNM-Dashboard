import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./maincss.scss";
import { Grid } from 'gridjs-react';

import { Container, Row, Col } from 'react-bootstrap';

const Maindashboard = () => {
    return (
        <Container>
            <Row className="row1">
                <Col className="col1" xs={3}>
                    Content
                </Col>
                <Col className="col2">
                    Content
                </Col>
                <Col className="col3" xs={3}>
                <center><p>Ongoing Application </p></center>
                    <Grid
                            data={[
                                ['Luqman', 'Petronas Dashboard'],
                                ['Irfan', 'Petronas Dashboard'],
                                ['Widad', 'Petronas Dashboard'],
                            ]}
                                columns={['Name', 'Ongoing Application Development']}
                                search={true}
                            />
                </Col>
            </Row>
            <Row className="row2">
                <Col className="col4" xs={6}>
                    Content
                </Col>
                <Col className="col5">
                <center><p>List of Members </p></center>
                    <Grid
                            data={[
                                ['Luqman', 'Intern'],
                                ['Irfan', 'Intern'],
                                ['Widad', 'Intern'],
                            ]}
                                columns={['Name', 'Position']}
                                search={true}
                            />
                </Col>
                <Col className="col6">
                    <Grid
                            data={[
                                ['Luqman', 'Application 1'],
                                ['Irfan', 'Application 2'],
                                ['Widad', 'Application 3'],
                            ]}
                                columns={['Name', 'Future Plan']}
                                search={true}
                            />
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default Maindashboard