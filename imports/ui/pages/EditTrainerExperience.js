import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MyAccountTrainerExperienceEditor from '../components/MyAccountTrainerExperienceEditor.js';

const EditTrainerExperience = ({ doc }) => (
  <div className="EditTrainerExperience">
    <h1 className="page-header">Welcome to Findatrainer…</h1>
    <Row>
      <Col xs={ 12 } sm={ 12 } md={ 8 }>

        asdfadsf
      </Col>
    </Row>
    <Row>
      <Col xs={ 12 } sm={ 12 } md={ 8 }>
        <MyAccountTrainerExperienceEditor doc={ doc }  />
      </Col>
    </Row>
  </div>
);

EditTrainerExperience.propTypes = {
  doc: React.PropTypes.object,
};

export default EditTrainerExperience;

