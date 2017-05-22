import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  //browserHistory.push(`/documents/${_id}`);
}

const TrainerEmploymentList = ({ doc }) => (
  doc ? <ListGroup className="TrainerEmploymentList">
    {doc.map(({ _id, company, location, title, fromMonth, fromYear, toMonth, toYear  }) => (
      <ListGroupItem key={ company } onClick={ () => handleNav(_id) }>
       </ListGroupItem>
    ))}
  </ListGroup> :
    <Alert bsStyle="warning">Employment not listed yet, please add.</Alert>
);

TrainerEmploymentList.propTypes = {
  documents: React.PropTypes.array,
};

export default TrainerEmploymentList;
