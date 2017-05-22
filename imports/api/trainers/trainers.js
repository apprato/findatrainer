import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Trainers = new Mongo.Collection('Trainers');
export default Trainers;

// Security measure to stops the client browser calling Disabling Allow and Deny Rules like Movies.insert() or Movies.remove()
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
  idUser: {
    type: String,
    label: 'The userid of the document the training profile belongs to.',
    optional: true
  },
  wizardStep: {
    type: String,
    label: 'The wizardStep of the document the training profile belongs to.',
    optional: true
  },
  category: {
    type: String,
    label: 'The category of the document.',
    optional: true
  },
  skills: {
    type: [String],
    label: 'The skills of the document.',
    optional: true
  },
  experienceLevel: {
    type: String,
    label: 'The experience level of the document.',
    optional: true
  },
  professionalTitle: {
    type: String,
    label: 'The professional title of the document.',
    optional: true
  },
  overview: {
    type: String,
    label: 'The overview of the document.',
    optional: true
  },
  // Add Education Modal
  "education.$.school": {  type: String, optional: true },
  "education.$.dateFrom": {  type: String, optional: true },
  "education.$.dateTo": {  type: String, optional: true },
  "education.$.tertiaryEducation": {  type: String, optional: true },
  "education.$.areaOfStudy": {  type: String, optional: true },
  "education.$.description": {  type: String, optional: true },
  school: {
    type: String,
    label: 'The english proficiency of the document.',
    optional: true
  },
  dateFrom: {
    type: String,
    label: 'The dateFrom of the document.',
    optional: true
  },
  dateTo: {
    type: String,
    label: 'The dateTo of the document.',
    optional: true
  },
  tertiaryEducation: {
    type: String,
    label: 'The tertiary education of the document.',
    optional: true
  },
  areaOfStudy: {
    type: String,
    label: 'The areaOfStudy of the document.',
    optional: true
  },
  description: {
    type: String,
    label: 'The description of the document.',
    optional: true
  },

  // Employment Modal


  englishProficiency: {
  type: String,
    label: 'The english proficiency of the document.',
    optional: true
  },
  availability: {
  type: String,
    label: 'The availability of the document.',
    optional: true
  },
  hourlyRate: {
    type: String,
    label: 'The hourly rate of the document.',
    optional: true
  },
  paidRate: {
    type: String,
    label: 'The paid rate of the document.',
    optional: true
  },
  address1: {
    type: String,
    label: 'The address line 1 of the document.',
    optional: true
  },
  address2: {
    type: String,
    label: 'The address Line 2 of the document.',
    optional: true
  },
  city: {
    type: String,
    label: 'The city of the document.',
    optional: true
  },
  country: {
    type: String,
    label: 'The country of the document.',
    optional: true
  },
  postCode: {
    type: String,
    label: 'The post code of the document.',
    optional: true
  },
  phoneNumber: {
    type: String,
    label: 'The phone number of the document.',
    optional: true
  }
});

Trainers.attachSchema(Trainers.schema);


Factory.define('trainer', Trainers, {
  category: () => 'Factory category',
  skills: () => 'Factory skillTags',
  experienceLevel: () => 'Factory experienceLevel',
});


