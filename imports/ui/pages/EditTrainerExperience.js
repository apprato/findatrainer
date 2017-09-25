import React from 'react';
import MyAccountTrainerExperienceEditor from '../components/MyAccountTrainerExperienceEditor.js';

const EditTrainerExperience = ({ doc }) => (
  <div className="EditTrainerExperience">
    <h1 className="page-header">Welcome to Findatrainer…</h1>
        <MyAccountTrainerExperienceEditor doc={ doc }  />
  </div>
);

EditTrainerExperience.propTypes = {
  doc: React.PropTypes.object,
};

export default EditTrainerExperience;

