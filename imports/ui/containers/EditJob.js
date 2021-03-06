import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Jobs from '../../api/jobs/jobs.js';
import EditJob from '../pages/EditJob.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('jobs.view', params._id);

  if (subscription.ready()) {
    const doc = Jobs.findOne();
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(EditJob);
