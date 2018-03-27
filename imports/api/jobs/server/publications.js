import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Jobs from '../jobs';


Meteor.publish('jobs.list.search', (searchTerm, stateTerm, categoryTerm, skipCount, _id) => {

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
      ],

    };
    //projection.limit = 100;
  }

  return Jobs.find(query, projection);

});


Meteor.publish('jobs.list.category', (skipCount, _category) => {
  check(skipCount, Match.OneOf(String, null, undefined));
  check(_category, Match.OneOf(Number, null, undefined));

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
      limit: 10,
      skip: skipCount,
    }
  );

  return jobsQuery;

});


Meteor.publish('jobs.list.filter', (skipCount, _category, jobsPerPage) => {

  check(skipCount, Match.Maybe(Number, null, undefined));
  check(_category, Match.Maybe(String, null, undefined));
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
  // /jobs/*
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
  console.log('skipCount' + skipCount);


  return jobsQuery;

});


Meteor.publish('jobs.list', (skipCount, _id) => {
  check(skipCount, Number);
  check(_id, Number);

  const query = {};
  var jobsQuery = Jobs.find(
    query,
    {
      limit: 5,
      skip: skipCount,
    }
  );
  return jobsQuery;
});

Meteor.publish('jobs.client.list', (idUser) => {
  check (idUser, String);
  var jobsQuery  = Jobs.find({"idUser": idUser});
  return jobsQuery;
});


Meteor.publish('jobs.list.user', (idUser) => {
  check(idUser, String);
  var usersQuery = Meteor.users.find( { _id: idUser}  );

  return usersQuery;
});


Meteor.publish('jobs.list.area', (skipCount, _id, area) => {

  check(area, String);
  check(skipCount, Number);
  check(_id, Number);

  const query = {
    $and: [
      {
        state: area.toUpperCase()
      },
    ],
  };
  // query, projection
  const jobsTotal = Jobs.find().count();
  var jobsQuery = Jobs.find(
    query,
    {
      limit: 10,
      skip: skipCount,
    }
  );

  return jobsQuery;

});


Meteor.publish('jobs.edit', () => Jobs.find());
Meteor.publish('jobs.edit.experience', () => Jobs.find());
Meteor.publish('jobs.list.education', () => Jobs.find());
Meteor.publish('jobs.list.employment', () => Jobs.find());
Meteor.publish('jobs.view', (_id) => {
  check(_id, String);
  return Jobs.find(_id);
});
