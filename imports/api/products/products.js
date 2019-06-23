import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Products = new Mongo.Collection('Products');
export default Products;

// Security measure to stops the client browser calling Disabling Allow and Deny Rules like Movies.insert() or Movies.remove()
Products.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Products.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


Products.schema = new SimpleSchema({
  idUser: {
    type: String,
    label: 'The userid of the document the training profile belongs to.',
    optional: true
  },
  name: {
    type: String,
    label: 'The name of the document the training profile belongs to.',
    optional: true
  },
  description: {
    type: String,
    label: 'The description of the document the training profile belongs to.',
    optional: true
  },
  image: {
    type: String,
    label: 'The image of the document.',
    optional: true
  },
  upload: {
    type: String,
    label: 'The upload of the document.',
    optional: true
  }
});

Products.attachSchema(Products.schema);


