import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Products from '../../api/jobs/jobs.js';
import TrainerProductsList from '../components/TrainerProductsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('products.trainer.list', String(Meteor.userId()));
  if (subscription.ready()) {
    const products = Products.find().fetch();
    onData(null, { products });
  }
};

export default composeWithTracker(composer, Loading)(TrainerProductsList);
