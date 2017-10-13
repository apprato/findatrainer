import React from 'react';
import {browserHistory} from 'react-router';
import {Row, Col, Nav, NavItem} from 'react-bootstrap';
import MyAccountTrainerExperienceEditor from '../components/MyAccountTrainerExperienceEditor.js';

function handleNavSelect(selectedKey) {
  switch(selectedKey) {
    case 1:
      //alert('Experience ' + selectedKey);
      //browserHistory.push(`/clients/${_id}`);
      browserHistory.push(`/myaccount/trainer/edit/experience`);
      break;
    case 2:
      //alert('Profile ' + selectedKey);
      browserHistory.push(`/myaccount/trainer/edit/profile`);
      break;
    case 3:
      //alert('Messages ' + selectedKey);
      browserHistory.push(`/myaccount/messages`);
      break;
  }
}

const EditTrainerExperience = ({ doc }) => (
  <div className="EditTrainerExperience">
    <Row>
    <Col xs={ 12 } sm={ 12 } md={ 12 }>
      <Nav bsStyle="pills" activeKey={1} onSelect={handleNavSelect}>
        <NavItem eventKey={1} href="/home">Edit Experience</NavItem>
        <NavItem eventKey={2} href="/home">Edit Profile</NavItem>
      </Nav>
    </Col>
    </Row>
    <Row>
      <Col xs={ 12 } sm={ 12 } md={ 12 }>
        <h1 className="page-header">Welcome to…</h1>
        <MyAccountTrainerExperienceEditor doc={ doc }  />
      </Col>
    </Row>
  </div>
);

EditTrainerExperience.propTypes = {
  doc: React.PropTypes.object,
};

export default EditTrainerExperience;

