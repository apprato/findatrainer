import React from 'react';
import {Alert, Row, Col, Panel, Image} from 'react-bootstrap';
import {Bert} from 'meteor/themeteorchef:bert';

const ViewJob = ({job}) => (

  <div className="ViewJob">
    <h1>{ job.jobTitle }</h1>
    <Row>
      <Col xs={ 12 } sm={ 8 }>
        <h2>Overview</h2>
        <p>{ job.overview }</p>
        <p><strong>Type of Project: </strong>{ job.category }</p>
        <p><strong>Pay Type: </strong>{ job.experienceLevel }</p>
        <p><strong>Experience Level:</strong>{ job.englishProficiency }</p>
        <p><strong>Job Length:</strong>{ job.jobLength }</p>
        <p><strong>Budget:</strong>{ job.budget }</p>
        <p><strong>Screen Questions:</strong></p>
        <p>{ job.screenQuestions }</p>
        <br />
      </Col>
      <Col xs={ 12 } sm={ 4 }>
        <h2>Location</h2>
        <p>adfsdfsa</p>
      </Col>
    </Row>
  </div>
);

ViewJob.propTypes = {
  job: React.PropTypes.object,
};

export default ViewJob;
