import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const PublicNavigation = () => (
  <div>
    <Nav pullLeft>
      <NavDropdown eventKey={1} title="Trainers" id="basic-nav-dropdown">
        <MenuItem eventKey={1.1} href="/trainers">Find Trainers</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullLeft>
      <NavDropdown eventKey={1} title="Clients" id="basic-nav-dropdown">
        <MenuItem eventKey={1.1} href="/clients">Find Clients</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullLeft>
      <LinkContainer to="marketplace">
        <NavItem eventKey={2} href="/marketplace">Marketplace</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="getstarted">
        <NavItem eventKey={1} href="/getstarted">Get Started</NavItem>
      </LinkContainer>
      <LinkContainer to="login">
        <NavItem eventKey={2} href="/login">Log In</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);

export default PublicNavigation;
