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
  category: {
    type: String,
    label: 'The category of the document.',
  },
  skills: {
    type: [String],
    label: 'The category of the document.',
    optional: true

  },
  experienceLevel: {
    type: String,
    label: 'The experienceLevel of the document.',
  }
});

Trainers.attachSchema(Trainers.schema);


Factory.define('trainer', Trainers, {
  category: () => 'Factory category',
  skills: () => 'Factory skillTags',
  experienceLevel: () => 'Factory experienceLevel',
});


