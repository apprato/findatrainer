import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import TrainerProductsList from '../containers/TrainerProductsList.js';

const Jobs = () => (
  <div className="Trainers">
    <Row>
      <Col className="col-centered" xs={12} sm={8} md={8}>
        <div className="page-header clearfix">
          <h2 className="pull-left">My Products</h2>
          <Link to="/trainer/new/product">
            <Button
              bsStyle="success"
              className="pull-right"
            >Add a product</Button>
          </Link>
        </div>
        <TrainerProductsList />
      </Col>
    </Row>
  </div>
);

export default Jobs;
