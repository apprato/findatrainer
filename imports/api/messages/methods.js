import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Messages from './messages';
import rateLimit from '../../modules/rate-limit.js';

export const upsertMessage= new ValidatedMethod({
  name: 'messages.upsert',
  validate: new SimpleSchema({
    channel: { type: String, optional: true },
    to: { type: String, optional: true },
    owner: { type: String, optional: true },
    timestamp: { type: Date, optional: true },
    message: { type: String, optional: true },
  }).validator(),
  run(message) {
    return Messages.upsert({ _id: message._id }, { $set: message });
  },
});

export const removeMessage= new ValidatedMethod({
  name: 'messages.remove',
  validate: new SimpleSchema({
    channel: { type: String },
    to: { type: String },
    owner: { type: String },
    timestamp: { type: Date }
  }).validator(),
  run({ _id }) {
    Messages.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertMessage,
    removeMessage,
  ],
  limit: 5,
  timeRange: 1000,
});
