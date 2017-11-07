import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  //browserHistory.push(`/client/jobs/${_id}/edit/`);
  window.location.href = `/client/jobs/${_id}/edit/`;
}

const JobsList = ({ jobs }) => (
  jobs.length > 0 ? <ListGroup className="JobsList">
    {jobs.map(({ _id, jobTitle }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
        { jobTitle }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No jobs are listed yet.</Alert>
);

JobsList.propTypes = {
  jobs: React.PropTypes.array,
};

export default JobsList;
