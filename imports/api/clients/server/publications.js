import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Clients } from '../clients.js';


Meteor.publish('clients.list', (skipCount, _id) => {

  check(skipCount, Number);
  check(_id, Number);

  const query = {};
  const clientsTotal = Clients.find().count();
  var clientsQuery = Clients.find(
    query,
    {
      limit: 5,
      skip: skipCount,
    }
  );
  return clientsQuery;
});


Meteor.publish('clients.list.user', (idUser) => {
  check(idUser, String);
  var usersQuery = Meteor.users.find( { _id: idUser}  );

  return usersQuery;
});


Meteor.publish('clients.search', (searchTerm) => {
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
});

Meteor.publish('clients.view', (_id) => {
  check(_id, String);
  return Clients.find(_id);
});

Meteor.publish('clients.edit.measurement', () => Clients.find());
Meteor.publish('clients.edit.profile', () => Clients.find());


