/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertJob} from '../api/jobs/methods';
import './validation.js';

let component;

const handleUpsert = () => {
  const { job } = component.props;
  const confirmation = job && job._id ? 'Job updated!' : 'Job added!';
  const upsert = {
    idUser: Meteor.userId(),
    category: document.querySelector('[name="category"]').value,
    jobTitle: document.querySelector('[name="jobTitle"]').value,
    overview: document.querySelector('[name="overview"]').value,
    typeProject: document.querySelector('[name="typeProject"]').value,
    payType: document.querySelector('[name="payType"]').value,
    experienceLevel: document.querySelector('[name="experienceLevel"]').value,
    jobLength: document.querySelector('[name="jobLength"]').value,
    screenQuestions: document.querySelector('[name="screenQuestions"]').value,
  };

  if (job && job._id) upsert._id = job._id;

  upsertJob.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.clientJobEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push('/client/jobs');
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
        required: false
      },
      typeProject: {
        required: false
      },
      payType: {
        required: false
      },
      experienceLevel: {
        required: false
      },
      jobLength: {
        required: false
      },
      screenQuestions: {
        required: false
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
        required: 'Please add some screening questions',
      }
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function clientJobEditor(options) {
  component = options.component;
  validate();
}
