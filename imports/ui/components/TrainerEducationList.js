import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert, ButtonToolbar, Button, ButtonGroup  } from 'react-bootstrap';

const handleNav = (_id) => {
  //browserHistory.push(`/documents/${_id}`);
}

const handleEdit = (_id) => {
  browserHistory.push(`/documents/${_id}/edit`);
}

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        browserHistory.push('/documents');
      }
    });
  }
};

const TrainerEducationList = ({ doc }) => (
  doc ? <ListGroup className="TrainerEducationList">
    {doc.map(({ _id, trainer, dateFrom, dateTo, description, school, tertiaryEducation }) => (
      <ListGroupItem key={ school } onClick={ () => handleNav(_id) }>
        { dateFrom } - { dateTo }: { school } { tertiaryEducation }
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
            <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">Education not listed yet, please add.</Alert>
);

TrainerEducationList.propTypes = {
  documents: React.PropTypes.array,
};

export default TrainerEducationList;
