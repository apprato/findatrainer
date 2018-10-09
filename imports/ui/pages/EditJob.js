import React from 'react';
import ClientJobEditor from '../components/ClientJobEditor.js';
import {
  Row,
  Col
} from 'react-bootstrap';

const EditJob = ({ doc }) => (
  <div className="EditJob">
    <Row>
      <Col className="col-centered" xs={12} sm={8} md={8}>
        <h1 className="page-header">Editing a Job</h1>
      </Col>
    </Row>
    <ClientJobEditor doc={doc} />
  </div>
);

EditJob.propTypes = {
  doc: React.PropTypes.object,
};

export default EditJob;
