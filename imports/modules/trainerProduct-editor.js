/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertProduct } from '../api/products/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Product updated!' : 'Product added!';
  const upsert = {
    idUser: Meteor.userId(),
    name: document.querySelector('[name="name"]').value,
    description: document.querySelector('[name="description"]').value,
    price: document.querySelector('[name="price"]').value,
    image: document.querySelector('[name="image"]').value,
    upload: document.querySelector('[name="upload"]').value,
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertProduct.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/trainer/products`);
    }
  });
};

const validate = () => {
  $(component.trainerProductEditorForm).validate({
    rules: {
      name: {
        required: true
      },
      description: {
        required: true
      },
      price: {
        required: true
      },
      image: {
        required: false
      },
      upload: {
        required: false
      }
    },
    messages: {
      name: {
        required: 'Please add a name.',
      },
      description: {
        required: 'Please add a description.',
      },
      price: {
        required: 'Please add a price.',
      },
      image: {
        required: 'Please add an image from your product.',
      },
      upload: {
        required: 'Please upload your file.'
      }
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function trainerProductEditor(options) {
  component = options.component;
  validate();
}