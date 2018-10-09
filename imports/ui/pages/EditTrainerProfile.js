import React from 'react';
import TrainerProfileEditor from '../components/TrainerProfileEditor.js';
import {
  Row,
  Col
} from 'react-bootstrap';

const EditTrainerProfile = ({ doc }) => (
  <div className="EditTrainerExperience">
    <Row>
      <Col className="col-centered" xs={12} sm={8} md={8}>
        <h1 className="page-header">Enter your Profile</h1>
      </Col>
    </Row>
    <TrainerProfileEditor doc={doc} />
  </div>
);

EditTrainerProfile.propTypes = {
  doc: React.PropTypes.object,
};

export default EditTrainerProfile;

