import React from "react";
import {  Link } from 'react-router-dom';

//Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function MenuLogOut() {
 


return(
   
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
      <Navbar.Brand >Would you rather?</Navbar.Brand>
      <Nav>
      <Nav.Link as={Link} to="/">Login</Nav.Link>
      </Nav>
     
      </Container>
    </Navbar>
  );
}

export default MenuLogOut;
