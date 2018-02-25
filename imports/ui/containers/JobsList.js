import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Jobs  from '../../api/jobs/jobs.js';
import JobsList from '../components/JobsList.js';
import Loading from '../components/Loading.js';

const searchQuery = new ReactiveVar(null);
const stateQuery = new ReactiveVar(null);
const categoryQuery = new ReactiveVar(null);

const composer = ({ params }, onData) => {


  // Fliters
  const currentPage = parseInt(params._id) || 1;
  const search = params.search;
  const skipCount = ( currentPage - 1)   * 5;
  const pageCount = Math.ceil(Session.get('jobCount') / 5);

  // Get total count
  Meteor.apply('getJobsCount',[], true, function(err, result){
    Session.set('jobCount', result);
  });

  if (params._category)
    var subscription = Meteor.subscribe('jobs.list.category', skipCount, params._category);
  else
    var subscription = Meteor.subscribe('jobs.list.search', searchQuery.get(), stateQuery.get(), categoryQuery.get(), skipCount, parseInt(currentPage));
    //const subscription = Meteor.subscribe('jobs.list', skipCount, parseInt(currentPage));


  if (subscription.ready()) {
    const jobs = Jobs.find().fetch(); // Converts MongoDB data into an array rather than cursor

    // Get the users details (firstname, lastname etc from users collection.O
    _.forEach(jobs, function(item){
      var userSubscription = Meteor.subscribe('jobs.list.user', item.idUser);
      if (userSubscription.ready()) {
        var user = Meteor.users.find({ "_id" : item.idUser }).fetch();
        if (typeof user[0].profile.name.first !== 'undefined') { item.firstName = user[0].profile.name.first; }
        if (typeof user[0].profile.name.last !== 'undefined') { item.lastName= user[0].profile.name.last; }
      }
    });
    onData(null, { jobs, searchQuery,  pageCount, currentPage });
  }
};

export default composeWithTracker(composer, Loading)(JobsList); // The wrap of the containers

