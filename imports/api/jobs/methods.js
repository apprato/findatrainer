import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import Jobs from './jobs';
import rateLimit from '../../modules/rate-limit.js';


export const upsertJob = new ValidatedMethod({
  name: 'jobs.upsert',
  validate: new SimpleSchema({

    // experience form - part 2
    _id: {type: String, optional: true},
    idUser: {type: String, optional: true},
    category: {type: String, optional: true},
    jobTitle: {type: String, optional: true},
    overview: {type: String, optional: true},
    budget: {type: String, optional: true},
    typeProject: {type: String, optional: true},
    payType: {type: String, optional: true},
    experienceLevel: {type: String, optional: true},
    jobLength: {type: String, optional: true},
    screenQuestions: {type: String, optional: true}
  }).validator(),
  run(job) {
    return Jobs.upsert({ _id: job._id }, { $set: job });

  },
});


export const upsertEducationJob = new ValidatedMethod({
  name: 'jobs.education.upsert',
  validate: new SimpleSchema({
    // Educational Modal (Array of objects)
    'education.$.school': {type: String, optional: true},
    'education.$.dateFrom': {type: String, optional: true},
    'education.$.dateTo': {type: String, optional: true},
    'education.$.title': {type: String, optional: true},
    'education.$.tertiaryEducation': {type: String, optional: true},
    'education.$.areaOfStudy': {type: String, optional: true},
    'education.$.description': {type: String, optional: true},
  }).validator(),
  run(job) {
    var userFound;
    var userJob = Jobs.find({"idUser": String(Meteor.userId())}).fetch();

    userJob.every(function (elem) {
      if (typeof(elem) !== 'undefined') {
        userFound = true;
        return false;
      }
      return true;
    });

    if (typeof(userFound) !== 'undefined') {
      Jobs.update({idUser: Meteor.userId()}, {$push: { education: job.education[0] } } );
      return true;
    }
    else {
      browserHistory.push(`/job/edit/experience`);
      return false;
    }
  },
});


export const upsertEmploymentJob = new ValidatedMethod({
  name: 'jobs.employment.upsert',
  validate: new SimpleSchema({
    // Educational Modal (Array of objects)
    'employment.$.company': {type: String, optional: true},
    'employment.$.location': {type: String, optional: true},
    'employment.$.title': {type: String, optional: true},
    'employment.$.fromMonth': {type: String, optional: true},
    'employment.$.fromYear': {type: String, optional: true},
    'employment.$.toMonth': {type: String, optional: true},
    'employment.$.toYear': {type: String, optional: true},
    'employment.$.description': {type: String, optional: true},
  }).validator(),
    run(job) {
    var userFound;
    var userJob = Jobs.find({"idUser": String(Meteor.userId())}).fetch();

    userJob.every(function (elem) {
      if (typeof(elem) !== 'undefined') {
        userFound = true;
        return false;
      }
      return true;
    });

    if (typeof(userFound) !== 'undefined') {
      Jobs.update({idUser: Meteor.userId()}, {$push: { employment: job.employment[0] } } );
      return true;
    }
    else {
      browserHistory.push(`/job/edit/experience`);
      return false;
    }
  },
});


export const removeJob = new ValidatedMethod({
  name: 'jobs.remove',
  validate: new SimpleSchema({
    _id: {type: String},
  }).validator(),
  run({_id}) {
    Jobs.remove(_id);
  },
});


export const removeJobEducation = new ValidatedMethod({
  name: 'jobs.education.remove',
  validate: new SimpleSchema({
    schoolToDelete: {type: String},
  }).validator(),
  run({schoolToDelete}) {
    Jobs.update( { "idUser" : String(Meteor.userId()) },
      {
        $pull :
          { "education" :
            { "school" : schoolToDelete }
          }
      });
  }
});


export const removeJobEmployment = new ValidatedMethod({
  name: 'jobs.employment.remove',
  validate: new SimpleSchema({
    companyToDelete: {type: String},
  }).validator(),
  run({companyToDelete}) {
    Jobs.update( { "idUser" : String(Meteor.userId()) },
    {
      $pull :
        { "employment" :
          { "company" : companyToDelete }
        }
    });
  }
});


Meteor.methods({
  getJobsCountSearch(searchTerm, stateTerm, categoryTerm, skipCount, _id) {
    return Jobs.find(query).count();

    check(skipCount, Number);
    check(_id, Number);
    check(searchTerm, Match.OneOf(String, null, undefined));
    check(stateTerm, Match.OneOf(String, null, undefined));
    check(categoryTerm, Match.OneOf(String, null, undefined));

    let query = {};
    const projection = {limit: 5, sort: {title: 1}, skip: skipCount};

    if (searchTerm) {
      const regex = new RegExp(searchTerm, 'i');

      query = {
        $or: [
          {jobTitle: regex},
          {year: regex},
          {rated: regex},
          {plot: regex},
        ],
      };
      projection.limit = 100;
    }
    return Jobs.find(query, projection);
  },


  getJobsCountList(skipCount, _search, _category, jobsPerPage) {
    check(skipCount, Match.OneOf(Number, null, undefined));
    check(_search, Match.OneOf(String, null, undefined));
    check(_category, Match.OneOf(String, null, undefined));
    check(jobsPerPage, Match.Maybe(Number, null, undefined));

    if (_category) {
      const query = {
        $and: [
          {
            category: _category
          },
        ],
      };
      // query, projection
      var jobsQuery = Jobs.find(
        {
          category: _category
        },
        {
          limit: jobsPerPage,
          skip: skipCount,
        }
      );
    }
    else if (_search) {
      const regex = new RegExp(_search, 'i');
      const query = {
        $or: [
          {jobTitle: regex},
          {overview: regex},
        ],
      };
      var jobsQuery = Jobs.find(
        query,
        {
          limit: jobsPerPage,
          skip: skipCount,
        }
      );
    }
    else {
      const query = {};
      var jobsQuery = Jobs.find(
        query,
        {
          limit: jobsPerPage,
          skip: skipCount,
        }
      );
    }

    return jobsQuery.count();
  },



  getJobsCount() {
    return Jobs.find().count();
  },


  getJobsAreaCount() {
    const query = {
      $and: [
        {
          state: area.toUpperCase()
        },
      ],
    };
    return Jobs.find(query).count();
  },
});


rateLimit({
  methods: [
    upsertJob,
    upsertEducationJob,
    upsertEmploymentJob,
    removeJob,
    removeJobEducation,
    removeJobEmployment
  ],
  limit: 5,
  timeRange: 1000,
});
