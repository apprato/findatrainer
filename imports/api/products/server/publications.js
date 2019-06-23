import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Products from '../products';

Meteor.publish('products.trainer.list', (idUser) => {
  check(idUser, String);
  var productsQuery = Products.find({ "idUser": idUser });
  return productsQuery;
});


Meteor.publish('products.view', (_id) => {
  check(_id, String);
  return Products.find(_id);
});
