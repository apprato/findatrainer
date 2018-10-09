import React from 'react';
import NewTrainerProfileEditor from '../components/TrainerProfileEditor.js';
import {
  Row,
  Col
} from 'react-bootstrap';

const NewTrainerProfile = () => (
  <div className="NewTrainerProfile">
    <Row>
      <Col className="col-centered" xs={12} sm={8} md={8}>
        <h1 className="page-header">Tell us more about you?</h1>
      </Col>
    </Row>
    <NewTrainerProfileEditor />
  </div>
);

export default NewTrainerProfile;
