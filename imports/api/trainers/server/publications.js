import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Trainers from '../trainers';

Meteor.publish('trainers.list', (skipCount, _id) => {

  check(skipCount, Number);
  check(_id, Number);

  const query = {};
  const trainersTotal = Trainers.find().count();
  var trainersQuery = Trainers.find(
    query,
    {
      limit: 10,
      skip: skipCount,
    }
  );

  return trainersQuery;
});


Meteor.publish('trainers.list.area', (skipCount, _id, area) => {

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
  const trainersTotal = Trainers.find().count();
  var trainersQuery = Trainers.find(
    query,
    {
      limit: 10,
      skip: skipCount,
    }
  );

  return trainersQuery;

});


Meteor.publish('trainers.edit', () => Trainers.find());
Meteor.publish('trainers.edit.experience', () => Trainers.find());
Meteor.publish('trainers.list.education', () => Trainers.find());
Meteor.publish('trainers.list.employment', () => Trainers.find());
Meteor.publish('trainers.view', (_id) => {
  check(_id, String);
  return Trainers.find(_id);
});
