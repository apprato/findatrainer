import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  //browserHistory.push(`/client/jobs/${_id}/edit/`);
  window.location.href = `/trainer/products/${_id}/edit/`;
}

const ProductsList = ({ products }) => (
  products.length > 0 ? <ListGroup className="ProductsList">
    {products.map(({ _id, name, description, price }) => (
      <ListGroupItem key={_id} onClick={() => handleNav(_id)}>
        {name} {_id}
      </ListGroupItem>
    ))}
  </ListGroup> :
    <Alert bsStyle="warning">No products have been added yet.</Alert>
);

ProductsList.propTypes = {
  products: React.PropTypes.array,
};

export default ProductsList;
