import React from 'react';
import { Alert, Row, Col, Panel, Image } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';

const ViewClient = ({ client }) => (
  <div className="ViewClient">
    <Row>
      <Col xs={12}>
        <h1>{client.title}</h1>
      </Col>
      <Col xs={12} sm={8}>
        <h2>Description</h2>
        <p>{client.description}</p>
      </Col>
      <Col xs={12} sm={4}>
        <h2>Metrics</h2>
        <p>{client.height}</p>
        <p>{client.weight}</p>
        <p>{client.sex}</p>
      </Col>
    </Row>
  </div >
);

ViewClient.propTypes = {
  client: React.PropTypes.object,
};

export default ViewClient;
