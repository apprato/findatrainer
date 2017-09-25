import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Trainers  from '../../api/trainers/trainers.js';
import TrainersList from '../components/TrainersList.js';
import Loading from '../components/Loading.js';

const searchQuery = new ReactiveVar(null);

const composer = ({ params }, onData) => {

  // Get total count
  Meteor.apply('getTrainersCount', [], true, function(err, result){
    Session.set('trainerCount', result);
  });

  // Fliters
  const currentPage = parseInt(params._id) || 1;
  const search = params.search;
  const skipCount = ( currentPage - 1)   * 5;
  const pageCount = Math.ceil(Session.get('trainerCount') / 5);

  const subscription = Meteor.subscribe('trainers.list', skipCount, parseInt(currentPage));
  if (subscription.ready()) {
    const trainers = Trainers.find().fetch(); // Converts MongoDB data into an array rather than cursor

    // Get the users details (firstname, lastname etc from users collection.O
    _.forEach(trainers, function(item){
      var userSubscription = Meteor.subscribe('trainers.list.user', item.idUser);
      if (userSubscription.ready()) {
        var user = Meteor.users.find({ "_id" : item.idUser }).fetch();
        item.firstName = user[0].profile.name.first;
        item.lastName= user[0].profile.name.last;
        console.log(user);
      }
    });
    onData(null, { trainers, searchQuery, pageCount, currentPage });
  }
};

export default composeWithTracker(composer, Loading)(TrainersList); // The wrap of the containers
