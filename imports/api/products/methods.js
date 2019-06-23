import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Products from './products';
import rateLimit from '../../modules/rate-limit.js';


export const upsertProduct = new ValidatedMethod({
  name: 'products.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    idUser: { type: String, optional: true },
    name: { type: String, optional: true },
    image: { type: String, optional: true },
    price: { type: String, optional: true },
    description: { type: String, optional: true },
    upload: { type: String, optional: true },
  }).validator(),
  run(doc) {
    return Products.upsert({ _id: doc._id }, { $set: doc });
  },
});





Meteor.methods({
  getProductsCount() {
    return Products.find().count();
  }
});


rateLimit({
  methods: [
    upsertProduct
  ],
  limit: 5,
  timeRange: 1000,
});
