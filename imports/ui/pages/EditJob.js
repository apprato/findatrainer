import React from 'react';
import ClientJobEditor from '../components/ClientJobEditor.js';


const EditJob = ({ doc }) => (
  <div className="EditJob">
    <h1 className="page-header">Editing a Job</h1>
    <ClientJobEditor doc={ doc } />
  </div>
);

EditJob.propTypes = {
  doc: React.PropTypes.object,
};

export default EditJob;
