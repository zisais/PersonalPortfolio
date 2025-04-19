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
                                    <th>DEGREE</th>
                                    <th>SCHOOL</th>
                                    <th>MAJOR</th>
                                    <th>TIME ENROLLED</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Associate in Science</td>
                                    <td>Pensacola State College</td>
                                    <td>Computer Programming and Analysis</td>
                                    <td>2022-2024</td>
                                    <td>Graduated</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Bachelor of Science</td>
                                    <td>Western Governors University</td>
                                    <td>Computer Science</td>
                                    <td>2024-Present</td>
                                    <td>Enrolled</td>
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
                        <Col className='rowColTitle'>Location</Col>
                        <Col className='contact-info'>{contact.location}</Col>
                    </Row>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
}

export default AboutMe