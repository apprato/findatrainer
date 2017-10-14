/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertTrainer} from '../api/trainers/methods';
import './validation.js';

let component;

const handleUpsert = () => {
  const { trainer } = component.props;
  const confirmation = trainer && trainer._id ? 'Trainer Profile updated!' : 'Trainer Profile added!';
  const upsert = {
    category: document.querySelector('[name="category"]').value,
    jobTitle: document.querySelector('[name="jobTitle"]').value,
    overview: document.querySelector('[name="overview"]').value,
    typeProject: document.querySelector('[name="typeProject"]').value,
    payType: document.querySelector('[name="payType"]').value,
    experienceLevel: document.querySelector('[name="experienceLevel"]').value,
    jobLength: document.querySelector('[name="jobLength"]').value,
    screenQuestions: document.querySelector('[name="screenQuestions"]').value,
  };

  if (trainer && trainer._id) upsert._id = trainer._id;

  upsertTrainer.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.clientJobEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push('/');
    }
  });
};

const validate = () => {
  $(component.clientJobEditorForm).validate({
    rules: {
      category: {
        required: true
      },
      jobTitle: {
        required: true
      },
      overview: {
        required: true
      },
      typeProject: {
        required: true
      },
      payType: {
        required: true
      },
      experienceLevel: {
        required: true
      },
      jobLength: {
        required: true
      },
      screenQuestions: {
        required: true
      }
    },
    messages: {
      category: {
        required: 'Please select your category.',
      },
      jobTitle: {
        required: 'Please add a job title.',
      },
      overview: {
        required: 'Please add a job overview.',
      },
      typeProject: {
        required: 'Please select the type of project.',
      },
      payType: {
        required: 'Please select how you would like to pay.'
      },
      experienceLevel: {
        required: 'Please select desired experience level.',
      },
      jobLength: {
        required: 'Please select the job length.',
      },
      screenQuestions: {
        required: 'Please add some screening questions.',
      }
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function trainerExperienceEditor(options) {
  component = options.component;
  validate();
}
