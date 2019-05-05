import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Trainers from '../../api/trainers/trainers.js';
import ViewTrainer from '../pages/ViewTrainer.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('trainers.view', params._id);

  if (subscription.ready()) {
    const trainer = Trainers.findOne();

    var userSubscription = Meteor.subscribe('trainers.list.user', trainer.idUser);
    if (userSubscription.ready()) {
      var user = Meteor.users.find({ "_id": trainer.idUser }).fetch();
      trainer.firstName = user[0].profile.name.first;
      trainer.lastName = user[0].profile.name.last;
    }

    onData(null, { trainer });
  }
};

export default composeWithTracker(composer, Loading)(ViewTrainer);
