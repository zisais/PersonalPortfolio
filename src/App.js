import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';

function App() {

  const [key, setKey] = useState('about');
  const [onAboutPage, setOnAboutPage] = useState(true);

  useEffect(() => {
    if (key === 'about') {
      setOnAboutPage(true);
    }
    else if (key === 'portfolio') {
      setOnAboutPage(false);
    }
  }, [key]);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand disabled >Zachary Isais</Navbar.Brand>
          <Nav onSelect={(k) => setKey(k)}>
            <Nav.Link eventKey="about">About Me</Nav.Link>
            <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <body className='App-body'>
        <br/>
        <Container>{onAboutPage === true ? AboutMe() : Portfolio()}</Container>
        <br/>
      </body>
    </div>
  );
}

export default App;
