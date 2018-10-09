import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NewClientJobEditor from '../components/ClientJobEditor.js';

const NewClientJob = () => (
  <div className="NewClientJob">
    <Row>
      <Col className="col-centered" xs={12} sm={8} md={8}>
        <h1 className="page-header">Post a Job</h1>
      </Col>
    </Row>
    <NewClientJobEditor />
  </div>
);

export default NewClientJob;
