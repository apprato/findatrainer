import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Clients from '../../api/clients/clients.js';
import ClientsList from '../components/ClientsList.js';
import Loading from '../components/Loading.js';

const searchQuery = new ReactiveVar(null);

const composer = ({ params }, onData) => {

  // Get total count
  Meteor.apply('getClientsCount', [], true, function (err, result) {
    Session.set('clientCount', result);
  });

  // Fliters
  const currentPage = parseInt(params._id) || 1;
  const search = params.search;
  const skipCount = (currentPage - 1) * 5;
  const pageCount = Math.ceil(Session.get('clientCount') / 5);

  const subscription = Meteor.subscribe('clients.list', skipCount, parseInt(currentPage));
  if (subscription.ready()) {
    const clients = Clients.find().fetch(); // Converts MongoDB data into an array rather than cursor

    // Get the users details (firstname, lastname etc from users collection.O
    _.forEach(clients, function (item) {
      var userSubscription = Meteor.subscribe('clients.list.user', item.idUser);
      if (userSubscription.ready()) {
        var user = Meteor.users.find({ "_id": item.idUser }).fetch();
        item.firstName = user[0].profile.name.first;
        item.lastName = user[0].profile.name.last;
      }
    });
    onData(null, { clients, searchQuery, pageCount, currentPage });
  }
};

export default composeWithTracker(composer, Loading)(ClientsList); // The wrap of the containers
