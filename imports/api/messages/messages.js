import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Messages = new Mongo.Collection('Messages');
export default Messages;

Messages.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Messages.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Messages.schema = new SimpleSchema({
  channel: {
    type: String,
    label: 'The ID of the channel this message belongs to.',
  },
  to: {
    type: String,
    label: 'The ID of the user this message was sent directly to.',
  },
  owner: {
    type: String,
    label: 'The ID of the user that created this message.',
  },
  timestamp: {
    type: Date,
    label: 'The date and time this message was created.',
  },
  message: {
    type: String,
    label: 'The content of this message.',
  }
});

Messages.attachSchema(Messages.schema);

Factory.define('message', Messages, {
  channel: () => 'Channel Title',
  to: () => 'To Body',
  Owner: () => 'Owner Title',
  Timestamp: () => 'Timestamp Title',
  Message: () => 'Message Title'
});

