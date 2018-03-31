import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Clients = new Mongo.Collection('Clients');
export default Clients;

// Security measure to stops the client browser calling Disabling Allow and Deny Rules like Movies.insert() or Movies.remove()
Clients.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Clients.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Clients.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'What you want achieved.',
    optional: true
  },
  description: {
    type: String,
    label: 'More detail on history and goals.',
    optional: true
  },
  idUser: {
    type: String,
    label: 'id of client.',
    optional: true
  },
  height: {
    type: String,
    label: 'Height of individual.',
    optional: true
  },
  heightMetric: {
    type: String,
    label: 'heightMetric of individual.',
    optional: true
  },
  state: {
    type: String,
    label: 'State of individual.',
    optional: true
  },
  postCode: {
    type: String,
    label: 'Post Code of individual.',
    optional: true
  },
  dob: {
    type: String,
    label: 'D.O.B. of individual.',
    optional: true
  },
  weight: {
    type: String,
    label: 'Weight of individual.',
    optional: true
  },
  weightMetric: {
    type: String,
    label: 'weightMetric of individual.',
    optional: true
  },
  sex: {
    type: String,
    label: 'Sex of individual.',
    optional: true
  },
  gender: {
    type: String,
    label: 'Gender of individual.',
    optional: true
  },
  skills: {
    type: [String],
    label: 'The skills of the document.',
    optional: true
  },
  image: {
    type: String,
    label: 'Image of Client.',
    optional: true
  }
});

Clients.attachSchema(Clients.schema);

