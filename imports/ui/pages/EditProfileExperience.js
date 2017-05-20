import React from 'react';
import TrainerProfileEditor from '../components/TrainerProfileEditor.js';

const EditTrainerExperience = ({ doc }) => (
  <div className="EditTrainerExperience">
    <h1 className="page-header">Welcome to Findatrainer…</h1>
    <TrainerProfileEditor doc={ doc }  />
  </div>
);

EditTrainerExperience.propTypes = {
  doc: React.PropTypes.object,
};

export default EditTrainerExperience;

