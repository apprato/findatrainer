import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import Trainers from './trainers';
import rateLimit from '../../modules/rate-limit.js';


export const upsertTrainer = new ValidatedMethod({
  name: 'trainers.upsert',
  validate: new SimpleSchema({
    _id: {type: String, optional: true},
    category: {type: String, optional: true},
    skills: { type: [ String ], optional: true },
    experienceLevel: {type: String, optional: true}
  }).validator(),
  run(trainer) {
    Trainers.upsert({_id: trainer._id}, {$set: trainer});
  },
});

export const removeTrainer = new ValidatedMethod({
  name: 'trainers.remove',
  validate: new SimpleSchema({
    _id: {type: String},
  }).validator(),
  run({_id}) {
    Trainers.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertTrainer,
    removeTrainer,
  ],
  limit: 5,
  timeRange: 1000,
});
