import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NewTrainerProductEditor from '../components/TrainerProductEditor.js';

const NewTrainerProduct = () => (
  <div className="NewTrainerProduct">
    <Row>
      <Col className="col-centered" xs={12} sm={8} md={8}>
        <h1 className="page-header">Create a Product</h1>
      </Col>
    </Row>
    <NewTrainerProductEditor />
  </div>
);

export default NewTrainerProduct;
