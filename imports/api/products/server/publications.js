import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Products from '../products';

Meteor.publish('products.trainer.list', (idUser) => {
  check(idUser, String);
  var productsQuery = Products.find({ "idUser": idUser });
  return productsQuery;
});

Meteor.publish('products.list', (skipCount, _id) => {
  check(skipCount, Number);
  check(_id, Number);

  const query = {};
  var productsQuery = Products.find(
    query,
    {
      limit: 5,
      skip: skipCount,
    }
  );

  return productsQuery;
});

Meteor.publish('products.list.user', (idUser) => {
  check(idUser, String);
  var usersQuery = Meteor.users.find({ _id: idUser });

  return usersQuery;
});



Meteor.publish('products.view', (_id) => {
  check(_id, String);
  return Products.find(_id);
});
