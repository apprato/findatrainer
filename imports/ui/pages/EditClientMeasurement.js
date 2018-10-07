import React from 'react';
import ClientMeasurementEditor from '../components/ClientMeasurementEditor.js';
import {
  Row,
  Col
} from 'react-bootstrap';


const EditClientMeasurement = ({ doc }) => (
  <div className="clientMeasurementEditor">
    <Row>
      <Col className="col-centered" xs={8} sm={8} md={8}>
        <h1 className="page-header">Enter your Measurements</h1>
      </Col>
    </Row>
    <ClientMeasurementEditor doc={doc} />
  </div>
);

EditClientMeasurement.propTypes = {
  doc: React.PropTypes.object,
};

export default EditClientMeasurement;

