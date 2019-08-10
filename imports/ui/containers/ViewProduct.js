import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Products from '../../api/products/products.js';
import ViewProduct from '../pages/ViewProduct.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('products.view', params._id);

  if (subscription.ready()) {
    const product = Products.findOne();

    var userSubscription = Meteor.subscribe('products.list.user', product.idUser);
    if (userSubscription.ready()) {
      var user = Meteor.users.find({ "_id": product.idUser }).fetch();
      product.firstName = user[0].profile.name.first;
      product.lastName = user[0].profile.name.last;
    }

    onData(null, { product });
  }
};

export default composeWithTracker(composer, Loading)(ViewProduct);
