import React from 'react';
import { Form, Row, Card, Col, Dropdown } from 'react-bootstrap';
import './styles.scss';

const Userdetails = (props) => {

    const { currentClickedRow } = props;

    return (

        <div >
            <Card style={{ width: '30rem' }} className="userform">
                <Card.Body>

                    <Form >

                        <h5>User Details</h5>
                        <Dropdown.Divider />
                        <Form.Group as={Row} className="col col-sm-12" controlId="fname">
                            <Form.Label column sm="5">First Name</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.fname ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="col col-md-12" controlId="lname">
                            <Form.Label column sm="5" size="sm">Last Name</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.lname ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="col col-md-12" controlId="role">
                            <Form.Label column sm="5">Roles</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.role ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="col col-md-12" controlId="employment">
                            <Form.Label column sm="5">Employment Type</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.employment ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="col col-md-12" controlId="pskills">
                            <Form.Label column sm="5">Primary Skills</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.pskills ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="col col-md-12" controlId="sskills">
                            <Form.Label column sm="5">Secondary Skills</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.sskills ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="col col-md-12" controlId="allocation">
                            <Form.Label column sm="5">Allocation</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.allocation ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="col col-md-12" controlId="startdate">
                            <Form.Label column sm="5">Contract Start Date</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.startdate ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="col col-md-12" controlId="enddate">
                            <Form.Label column sm="5">Contract End Date</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.enddate ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="col col-md-12" controlId="rate">
                            <Form.Label column sm="5">Daily Rate</Form.Label>
                            <Col sm="7">
                                <Form.Control readOnly value={currentClickedRow.rate ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Dropdown.Divider />

                        <Form.Group as={Row} className="col col-md-12" controlId="historyallocate">
                            <Form.Label column sm="6">Previous Allocation</Form.Label>
                            <Col sm="12">
                                <Form.Control readOnly value={currentClickedRow.historyallocate ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="col col-md-12" controlId="historyemployment">
                            <Form.Label column sm="6">Employment History</Form.Label>
                            <Col sm="12">
                                <Form.Control readOnly value={currentClickedRow.historyemployment ?? ""}></Form.Control>
                            </Col>
                        </Form.Group>

                    </Form>

                </Card.Body>
            </Card>
        </div>

    );
};


export default Userdetails;