import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Channels from '../../api/channels/channels.js';
import ViewClient from '../pages/ViewChannel.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('channels.view', params._id);

  if (subscription.ready()) {
    const client = Channels.findOne();
    onData(null, { client });
  }
};

export default composeWithTracker(composer, Loading)(ViewClient);
