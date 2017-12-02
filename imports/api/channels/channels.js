import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Channels = new Mongo.Collection('Channels');
export default Channels;

Channels.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Channels.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Channels.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'The name of the channel.'
  }
});

Channels.attachSchema(Channels.schema);

Factory.define('channel', Channels, {
  name: () => 'Channel Name'
});
