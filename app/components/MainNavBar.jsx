import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'; 


const MainNavBar = () => {
  return (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Meus Testes</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">React</NavItem>
      <NavItem eventKey={2} href="#">Angular</NavItem>
      <NavDropdown eventKey={3} title="Outros" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
  );
};

export default MainNavBar;