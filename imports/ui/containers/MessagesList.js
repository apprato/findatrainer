import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Messages  from '../../api/messages/messages.js';
import MessagesList from '../components/MessagesList.js';
import Loading from '../components/Loading.js';

const searchQuery = new ReactiveVar(null);

const composer = ({ params }, onData) => {

  // Get total count
  Meteor.apply('getMessagesCount', [], true, function(err, result){
    Session.set('messageCount', result);
  });

  // Fliters
  const currentPage = parseInt(params._id) || 1;
  const search = params.search;
  const skipCount = ( currentPage - 1)   * 5;
  const pageCount = Math.ceil(Session.get('messageCount') / 5);

  const subscription = Meteor.subscribe('message.list', skipCount, parseInt(currentPage));
  if (subscription.ready()) {
    const messages = Messages.find().fetch(); // Converts MongoDB data into an array rather than cursor

    // Get the users details (firstname, lastname etc from users collection.O
    _.forEach(messages, function(item){
      var userSubscription = Meteor.subscribe('messages.list.user', item.idUser);
      if (userSubscription.ready()) {
        var user = Meteor.users.find({ "_id" : item.idUser }).fetch();
        item.firstName = user[0].profile.name.first;
        item.lastName= user[0].profile.name.last;
      }
    });
    onData(null, { messages, searchQuery, pageCount, currentPage });
  }
};

export default composeWithTracker(composer, Loading)(MessagesList); // The wrap of the containers
