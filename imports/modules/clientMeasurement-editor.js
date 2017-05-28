/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertClient} from '../api/clients/methods';
import './validation.js';

let component;

const handleUpsert = () => {
  const { client } = component.props;
  const confirmation = client && client._id ? 'Client Measurements updated!' : 'Client Measurement added!';
  const upsert = {
    idUser: Meteor.userId(),
    dob: document.querySelector('[name="dob"]').value,
    gender: document.querySelector('[name="gender"]').value,
    weight: document.querySelector('[name="weight"]').value,
    height: document.querySelector('[name="height"]').value,
    //skillTags: document.querySelector('[name="skillTags"]').value,
  };

  if (client && client._id) upsert._id = client._id;

  upsertClient.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.clientMeasurementEditorForm.reset();
      browserHistory.push('/');
      Bert.alert(confirmation, 'success');
    }
  });
};

const validate = () => {
  $(component.clientMeasurementEditorForm).validate({
    rules: {
      dob: {
        required: false,
      },
      gender: {
        required: false,
      },
      weight: {
        required: false,
      },
      height: {
        required: false,
      }
    },
    messages: {
      dob: {
        required: 'Please select a dob.',
      },
      gender: {
        required: 'Please add a skill tag.',
      },
      weight: {
        required: 'Please select weight.',
      },
      height: {
        required: 'Please select height.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function clientMeasurementEditor(options) {
  component = options.component;
  validate();
}
