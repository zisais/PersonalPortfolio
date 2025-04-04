import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { cardData } from './strings.js';

import pwGen from './images/pwGen.png';
import vaca from './images/vaca.png';
import volumizer from './images/volumizer.png';
import volBase from './images/volBase.png';
import volZk from './images/volZk.png';
import hodlr from './images/hodlr.png';
import portfolio from './images/portfolio.png';
import tokenSweeper from './images/tokenSweeper.png';
import jobapptracker from './images/jobapptracker.png';

function Portfolio() {
    return (
        langTabs()
    )
}

function langTabs() {
    return (
        <Tabs className="mb-3" justify >
            <Tab eventKey="java" title="Java">
                {javaTab()}
            </Tab>
            <Tab eventKey="web" title="HTML/CSS/JS/PHP">
                {webTab()}
            </Tab>
            <Tab eventKey="cs" title="C#">
                {csTab()}
            </Tab>
            <Tab eventKey="solidity" title="Solidity">
                {solTab()}
            </Tab>
        </Tabs>
    );
}

function javaTab() {
    return (
        <Container>
            <Row>
                <Col>{projCard(pwGen, cardData.ttlPwGen, cardData.txtPwGen, cardData.linkPwGen)}</Col>
            </Row>
        </Container>
    )
}

function webTab() {
    return (
        <Container>
            <Row>
                <Col>{projCard(volumizer, cardData.ttlVol, cardData.txtVolWeb, cardData.linkVolWeb)}</Col>
                <Col>{projCard(portfolio, cardData.ttlPortfolio, cardData.txtPortfolio, cardData.linkPortfolio)}</Col>
                <Col>{projCard(jobapptracker, cardData.ttlJobAppTracker, cardData.txtJobAppTracker, cardData.linkJobAppTracker)}</Col>
            </Row>
        </Container>
    )
}

function csTab() {
    return (
        <Container>
            <Row>
                <Col>{projCard(vaca, cardData.ttlVaca, cardData.txtVaca, cardData.linkVaca)}</Col>
            </Row>
        </Container>
    )
}

function solTab() {
    return (
        <Container>
            <Row>
                <Col>{projCard(tokenSweeper, cardData.ttlTokenSweeper, cardData.txtTokenSweeper, cardData.linkTokenSweeper)}</Col>
                <Col>{projCard(volBase, cardData.ttlVolUni, cardData.txtVolUni, cardData.linkVolUni)}</Col>
                <Col>{projCard(volZk, cardData.ttlVolCake, cardData.txtVolCake, cardData.linkVolCake)}</Col>
            </Row>
            <Row>
                <Col>{projCard(hodlr, cardData.ttlHodlr, cardData.txtHodlr, cardData.linkHodlr)}</Col>
            </Row>
        </Container>
    )

}

function projCard(img, title, text, link) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} fluid/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button href={link} target="_blank" variant="primary">View Project</Button>
            </Card.Body>
        </Card>
    )
}

export default Portfolio