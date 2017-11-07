import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Jobs from '../../api/jobs/jobs.js';
import ClientJobsList from '../components/ClientJobsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('jobs.client.list', String(Meteor.userId()));
  if (subscription.ready()) {
    const jobs = Jobs.find().fetch();
    onData(null, { jobs });
  }
};

export default composeWithTracker(composer, Loading)(ClientJobsList);
