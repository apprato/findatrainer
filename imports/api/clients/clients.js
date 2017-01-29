import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Clients = new Mongo.Collection('Clients');

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

const ClientsSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the movie.',
  },
  year: {
    type: String,
    label: 'The year the movie was released.',
  },
  rated: {
    type: String,
    label: 'The rating for the movie.',
  },
  plot: {
    type: String,
    label: 'The plot of the movie.',
  },
  poster: {
    type: String,
    label: 'The poster image for the movie.',
  },
});

Clients.attachSchema(ClientsSchema);
