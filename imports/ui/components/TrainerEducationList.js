import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  //browserHistory.push(`/documents/${_id}`);
}

const TrainerEducationList = ({ doc }) => (
  doc ? <ListGroup className="TrainerEducationList">
    {doc.map(({ _id, trainer, dateFrom, dateTo, description, school, tertiaryEducation }) => (
      <ListGroupItem key={ school } onClick={ () => handleNav(_id) }>
        { dateFrom } - { dateTo }: { school } { tertiaryEducation }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">Education not listed yet, please add.</Alert>
);

TrainerEducationList.propTypes = {
  documents: React.PropTypes.array,
};

export default TrainerEducationList;
