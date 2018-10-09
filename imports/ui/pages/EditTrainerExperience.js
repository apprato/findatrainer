import React from 'react';
import MyAccountTrainerExperienceEditor from '../components/MyAccountTrainerExperienceEditor.js';
import {
  Row,
  Col
} from 'react-bootstrap';

const EditTrainerExperience = ({ doc }) => (
  <div className="EditTrainerExperience">
    <Row>
      <Col className="col-centered" xs={12} sm={8} md={8}>
        <h1 className="page-header">Enter your Experience</h1>
      </Col>
    </Row>
    <MyAccountTrainerExperienceEditor doc={doc} />
  </div>
);

EditTrainerExperience.propTypes = {
  doc: React.PropTypes.object,
};

export default EditTrainerExperience;

