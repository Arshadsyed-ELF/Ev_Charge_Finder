import React from 'react';
import {  Navbar,Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"


const NavBar = () => {

  return (

    <div>
      <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"teal"}}>
<Container>
  <Navbar.Brand ><Link to='/' style={{color:'white',textDecoration:"none"}}>Ev-Charge</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" >
      <Link to="/login" style={{padding:"10px",color:"white",textDecoration:"none"}}>User</Link>
      <Link to="/alogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Admin</Link>   
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    </div>

   
);
};
  
export default NavBar;
