import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Clients } from '../clients.js';

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
