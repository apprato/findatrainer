import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Jobs = new Mongo.Collection('Jobs');
export default Jobs;

// Security measure to stops the client browser calling Disabling Allow and Deny Rules like Movies.insert() or Movies.remove()
Jobs.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Jobs.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


Jobs.schema = new SimpleSchema({
  idUser: {
    type: String,
    label: 'The userid of the document the training profile belongs to.',
    optional: true
  },
  category: {
    type: String,
    label: 'The category of the document the training profile belongs to.',
    optional: true
  },
  jobTitle: {
    type: String,
    label: 'The jobTitle of the document the training profile belongs to.',
    optional: true
  },
  overview: {
    type: String,
    label: 'The overview of the document.',
    optional: true
  },
  typeProject: {
    type: [String],
    label: 'The typeProject of the document.',
    optional: true
  },
  payType: {
    type: String,
    label: 'The payType of the document.',
    optional: true
  },
  jobLength: {
    type: String,
    label: 'The experienceLevel title of the document.',
    optional: true
  },
  experienceLevel: {
    type: String,
    label: 'The experienceLevel title of the document.',
    optional: true
  },
  typeProject: {
    type: String,
    label: 'The typeProject of the document.',
    optional: true
  },
  screenQuestions: {
    type: String,
    label: 'The screenQuestions of the document.',
    optional: true
  },
});

Jobs.attachSchema(Jobs.schema);


Factory.define('job', Jobs, {
  category: () => 'Factory category',
  skills: () => 'Factory skillTags',
  experienceLevel: () => 'Factory experienceLevel',
});


