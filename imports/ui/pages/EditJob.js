import React from 'react';
import JobEditor from '../components/JobEditor.js';

const EditJob = ({ doc }) => (
  <div className="EditJob">
    <h4 className="page-header">Editing "{ doc.jobTitle }"</h4>
    <JobEditor doc={ doc } />
  </div>
);

EditJob.propTypes = {
  doc: React.PropTypes.object,
};

export default EditJob;
