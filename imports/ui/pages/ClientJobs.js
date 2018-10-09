import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import ClientJobsList from '../containers/ClientJobsList.js';

const Jobs = () => (
  <div className="Jobs">
    <Row>
      <Col className="col-centered" xs={12} sm={8} md={8}>
        <div className="page-header clearfix">
          <h2 className="pull-left">My Jobs</h2>
          <Link to="/client/new/job">
            <Button
              bsStyle="success"
              className="pull-right"
            >Post a Job</Button>
          </Link>
        </div>
        <ClientJobsList />
      </Col>
    </Row>
  </div>
);

export default Jobs;
