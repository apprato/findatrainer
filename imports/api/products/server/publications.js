import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Products from '../products';


Meteor.publish('products.list.search', (searchTerm, stateTerm, categoryTerm, skipCount, _id) => {

  check(skipCount, Number);
  check(_id, Number);
  check(searchTerm, Match.OneOf(String, null, undefined));
  check(stateTerm, Match.OneOf(String, null, undefined));
  check(categoryTerm, Match.OneOf(String, null, undefined));

  let query = {};
  const projection = { limit: 5, sort: { title: 1 }, skip: skipCount };

  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'i');

    query = {
      $or: [
        { jobTitle: regex },
        { year: regex },
      ],

    };
    //projection.limit = 100;
  }

  return Products.find(query, projection);

});


Meteor.publish('products.list.category', (skipCount, _category) => {
  check(skipCount, Match.OneOf(String, null, undefined));
  check(_category, Match.OneOf(Number, null, undefined));

  const query = {
    $and: [
      {
        category: _category
      },
    ],
  };
  // query, projection
  var productsQuery = Products.find(
    {
      category: _category
    },
    {
      limit: 10,
      skip: skipCount,
    }
  );

  return productsQuery;

});


/*
 * Products Page - jobs/*, jobs/search/*, jobs/category/&
 *
 * @param skipCount
 * @param _search
 * @param _category
 * @param jobsPerPage
 * @return jobsQuery
 */
Meteor.publish('products.list.filter', (skipCount, _search, _category, jobsPerPage) => {

  check(skipCount, Match.Maybe(Number, null, undefined));
  check(_search, Match.Maybe(String, null, undefined));
  check(_category, Match.Maybe(String, null, undefined));
  check(productsPerPage, Match.Maybe(Number, null, undefined));

  if (_category) {
    const query = {
      $and: [
        {
          category: _category
        },
      ],
    };
    // query, projection
    var productsQuery = Products.find(
      {
        category: _category
      },
      {
        limit: productsPerPage,
        skip: skipCount,
      }
    );
  }
  else if (_search) {
    const regex = new RegExp(_search, 'i');
    const query = {
      $or: [
        { jobTitle: regex },
        { overview: regex },
      ],
    };
    // query, projection
    var productsQuery = Products.find(
      query,
      {
        limit: productsPerPage,
        skip: skipCount,
      }
    );
  }
  else {
    const query = {};
    var productsQuery = Products.find(
      query,
      {
        limit: productsPerPage,
        skip: skipCount,
      }
    );
  }
  console.log('skipCount' + skipCount);
  console.log(productsQuery.count());

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


Meteor.publish('products.client.list', (idUser) => {
  check(idUser, String);
  var productsQuery = Products.find({ "idUser": idUser });
  return productsQuery;
});


Meteor.publish('products.list.user', (idUser) => {
  check(idUser, String);
  var usersQuery = Meteor.users.find({ _id: idUser });

  return usersQuery;
});


Meteor.publish('products.list.area', (skipCount, _id, area) => {

  check(area, String);
  check(skipCount, Number);
  check(_id, Number);

  const query = {
    $and: [
      {
        state: area.toUpperCase()
      },
    ],
  };
  // query, projection
  const productsTotal = Products.find().count();
  var productsQuery = Products.find(
    query,
    {
      limit: 10,
      skip: skipCount,
    }
  );

  return productsQuery;

});


Meteor.publish('products.edit', () => Products.find());
Meteor.publish('products.edit.experience', () => Products.find());
Meteor.publish('products.list.education', () => Products.find());
Meteor.publish('products.list.employment', () => Products.find());
Meteor.publish('products.view', (_id) => {
  check(_id, String);
  return Products.find(_id);
});
