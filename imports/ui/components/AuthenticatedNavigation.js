import React from 'react';
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = () => (
  <div>
    <Nav pullLeft>
      <NavDropdown eventKey={ 1 } title="Jobs" id="basic-nav-dropdown">
        <MenuItem eventKey={ 2.3 } href="/client/browse/jobs">Find Jobs</MenuItem>
        <MenuItem eventKey={ 1.1 } href="/client/jobs">My Jobs</MenuItem>
        <MenuItem eventKey={ 2.2 } href="/client/new/job">Post a Job</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullLeft>
      <NavDropdown eventKey={ 1 } title="Trainers" id="basic-nav-dropdown">
        <MenuItem eventKey={ 1.1 } href="/trainers">Find Trainers</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullLeft>
      <NavDropdown eventKey={ 1 } title="Clients" id="basic-nav-dropdown">
        <MenuItem eventKey={ 1.1 } href="/trainers">Find Clients</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } href="/client/edit/measurement">Edit Measurements</MenuItem>
        <MenuItem eventKey={ 3.2 } href="/trainer/edit/experience">Edit Experience</MenuItem>
        <MenuItem eventKey={ 3.3 } href="/trainer/edit/profile">Edit Profile</MenuItem>
        <MenuItem eventKey={ 3.4 } href="/contactus">Contact Us</MenuItem>
        <MenuItem eventKey={ 3.5 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

export default AuthenticatedNavigation;
