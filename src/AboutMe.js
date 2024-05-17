import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Row, Table, thead, tr, td } from 'react-bootstrap';
import { overviewBodies, contact } from './strings.js';

function AboutMe() {
    return (
        <Accordion defaultActiveKey='bio' alwaysOpen>
            <AccordionItem eventKey='bio'>
                <AccordionHeader>Overview</AccordionHeader>
                <AccordionBody>
                    {overviewBodies.overviewBody1} <br/><br/> 
                    {overviewBodies.overviewBody2} <br/><br/> 
                    {overviewBodies.overviewBody3} <br/><br/> 
                    {overviewBodies.overviewBody4}
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey='education'>
                <AccordionHeader>Education</AccordionHeader>
                <AccordionBody>
                    <Container>
                        <Table striped bordered hovered>
                            <thead>
                                <tr>
                                    <th>LEVEL</th>
                                    <th>SCHOOL</th>
                                    <th>MAJOR</th>
                                    <th>TIME ENROLLED</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>High School</td>
                                    <td>Gulf Breeze High School</td>
                                    <td>N/A</td>
                                    <td>2013-2017</td>
                                    <td>Graduated</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>University</td>
                                    <td>University of Denver</td>
                                    <td>B.S. Physics</td>
                                    <td>2017-2018</td>
                                    <td>Transferred</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>University</td>
                                    <td>University of West Florida</td>
                                    <td>B.S. Mathematics</td>
                                    <td>2019-2020</td>
                                    <td>Transferred</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>University</td>
                                    <td>Pensacola State College</td>
                                    <td>A.S. Computer Programming and Analysis</td>
                                    <td>2022-2024</td>
                                    <td>Graduated</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey='contact'>
                <AccordionHeader>Contact</AccordionHeader>
                <AccordionBody>
                    <Row className="contact-info-row">
                        <Col className='rowColTitle'>Email</Col>
                        <Col className='contact-info'>
                            <a href={contact.email}>ztisais0110@gmail.com</a>
                        </Col>
                    </Row>
                    <Row className="contact-info-row">
                        <Col className='rowColTitle'>Phone</Col>
                        <Col className='contact-info'>
                            <a href={contact.phone}>(850) 377-0609</a>
                        </Col>
                    </Row>
                    <Row className="contact-info-row">
                        <Col className='rowColTitle'>Location</Col>
                        <Col className='contact-info'>{contact.location}</Col>
                    </Row>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
}

export default AboutMe