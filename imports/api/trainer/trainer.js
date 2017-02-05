import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Trainers = new Mongo.Collection('Trainers');
export default Trainers;

Trainers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Trainers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Trainers.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  first_name: {
    type: String,
    label: 'The title of the document.',
  },
  second_name: {
    type: String,
    label: 'The title of the document.',
  },
  subject: {
    type: String,
    label: 'The title of the document.',
  },
  dob: {
    type: String,
    label: 'The body of the document.',
  },
  height: {
    type: String,
    label: 'The body of the document.',
  },
  weight: {
    type: String,
    label: 'The body of the document.',
  },
});

Trainers.attachSchema(Trainers.schema);

Factory.define('document', Trainers, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
});
