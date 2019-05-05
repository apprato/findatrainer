// Imports
import { Meteor } from 'meteor/meteor';

// All users
Meteor.publish('users-all-publication', () => {
    return Meteor.users.find({}, { fields: { _id: 1, username: 1, createdAt: 1 } });
});

Meteor.publish("directory", function () {
    return Meteor.users.find({}, { fields: { emails: 1, profile: 1 } });
});
