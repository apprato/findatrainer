import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import products from './products';
import rateLimit from '../../modules/rate-limit.js';


export const upsertProduct = new ValidatedMethod({
  name: 'products.upsert',
  validate: new SimpleSchema({

    // experience form - part 2
    _id: { type: String, optional: true },
    idUser: { type: String, optional: true },
    name: { type: String, optional: true },
    price: { type: String, optional: true },
    description: { type: String, optional: true },
    image: { type: String, optional: true },
    upload: { type: String, optional: true }
  }).validator(),
  run(product) {
    return Products.upsert({ _id: products._id }, { $set: products });

  },
});




Meteor.methods({




});


rateLimit({
  methods: [
  ],
  limit: 5,
  timeRange: 1000,
});
