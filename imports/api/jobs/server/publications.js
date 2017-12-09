import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Jobs from '../jobs';


Meteor.publish('jobs.list.search', (searchTerm, skipCount, _id) => {

  check(skipCount, Number);
  check(_id, Number);
  check(searchTerm, Match.OneOf(String, null));
  check(searchTerm, Match.OneOf(String, null, undefined));
  console.log(searchTerm);

  let query = {};
  const projection = {limit: 10, sort: {title: 1}};

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



  /*
   const query = {};
   var jobsQuery = Jobs.find(
   query,
   {
   limit: 5,
   skip: skipCount,
   }
   );
   return jobsQuery;
   */



  /*
   check(searchTerm, Match.OneOf(String, null, undefined));

   let query = {};
   const projection = { limit: 10, sort: { title: 1 } };

   if (searchTerm) {
   const regex = new RegExp(searchTerm, 'i');

   query = {
   $or: [
   { title: regex },
   { year: regex },
   { rated: regex },
   { plot: regex },
   ],
   };

   projection.limit = 100;
   }

   return Clients.find(query, projection);
   */
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
