import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Clients from './clients';
import rateLimit from '../../modules/rate-limit.js';

export const upsertClient = new ValidatedMethod({
  name: 'clients.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    idUser: { type: String, optional: true },
    title: { type: String, optional: true },
    description: { type: String, optional: true},
    dob: { type: String, optional: true },
    height: { type: String, optional: true },
    weight: { type: String, optional: true },
    gender: { type: String, optional: true },
  }).validator(),
  run(client) {
    var userFound;
    var userClient = Clients.find({"idUser": String(Meteor.userId())}).fetch();

    userClient.every(function (elem) {
      if (typeof(elem) !== 'undefined') {
        userFound = true;
        return false;
      }
      return true;
    });

    if (typeof(userFound) !== 'undefined') {
      Clients.update({idUser: Meteor.userId()}, {$set: client} );
      return true;
    }
    else {
      Clients.upsert({_id: client._id}, {$set: client} );
      return false
    }
  },
});

export const removeClient= new ValidatedMethod({
  name: 'clients.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Clients.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertClient,
    removeClient,
  ],
  limit: 5,
  timeRange: 1000,
});
