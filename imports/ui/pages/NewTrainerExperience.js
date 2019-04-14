import React from 'react';
import MyAccountTrainerExperienceEditor from '../components/MyAccountTrainerExperienceEditor.js';
import {
  Row,
  Col
} from 'react-bootstrap';


const NewTrainerExperience = () => (
  <div className="trainerExperienceEditor">
    <Row>
      <Col className="col-centered" xs={12} sm={8} md={8}>
        <h1 className="page-header">Welcome to Findatrainer…</h1>
      </Col>
    </Row>
    <MyAccountTrainerExperienceEditor />
  </div>
);

export default NewTrainerExperience;
