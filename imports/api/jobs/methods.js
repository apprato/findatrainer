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
    typeProject: {type: String, optional: true},
    payType: {type: String, optional: true},
    experienceLevel: {type: String, optional: true},
    jobLength: {type: String, optional: true},
    screenQuestions: {type: String, optional: true}
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
      Jobs.update({idUser: Meteor.userId()}, {$set: job} );
      return true;
    }
    else {
      Jobs.upsert({_id: job._id}, {$set: job} );
      return false
    }
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
