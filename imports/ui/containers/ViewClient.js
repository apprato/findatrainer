import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Documents from '../../api/documents/documents.js';
import viewClient from '../pages/viewClient.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('documents.view', params._id);

  if (subscription.ready()) {
    const doc = Clients.findOne();
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(ViewDocument);
