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
  const jobsPerPage = 1;
  const currentPage = parseInt(params._id) || 1;
  const skipCount = ( currentPage - 1)   * jobsPerPage;
  const pageCount = Math.ceil(Session.get('jobCount') / jobsPerPage);
  const category = params._category;
  const search = params._search;

  // Get jobs total count (/jobs, /jobs/category, /jobs/category/search
  Meteor.apply('getJobsCountList',[skipCount, search, category, jobsPerPage],true,function(err,result){
    Session.set('jobCount', result);
  });
  var subscription = Meteor.subscribe('jobs.list.filter', skipCount, search, params._category, jobsPerPage);


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
    onData(null, { jobs, search, category, pageCount, currentPage }); // Props to pass to JobsList component
  }
};

export default composeWithTracker(composer, Loading)(JobsList); // The wrap of the containers

