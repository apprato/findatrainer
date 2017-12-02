import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Messages from './channels';
import rateLimit from '../../modules/rate-limit.js';

export const upsertChannel= new ValidatedMethod({
  name: 'channels.upsert',
  validate: new SimpleSchema({
    name: { type: String, optional: true },
    to: { type: String, optional: true },
    owner: { type: String, optional: true },
    timestamp: { type: Date, optional: true },
    message: { type: String, optional: true },
  }).validator(),
  run(channel) {
    return Messages.upsert({ _id: message._id }, { $set: message });
  },
});

export const removeChannel= new ValidatedMethod({
  name: 'channels.remove',
  validate: new SimpleSchema({
    name: { type: String }
  }).validator(),
  run({ _id }) {
    Channels.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertChannel,
    removeChannel,
  ],
  limit: 5,
  timeRange: 1000,
});
