import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';


const ViewClient = ({ client }) => (
  <div className="ViewClient">
    <div className="page-header clearfix">
      <h4 className="pull-left">{ client.title }</h4>
    </div>
    { client.description }
  </div>
);

ViewClient.propTypes = {
  client: React.PropTypes.object,
};

export default ViewClient;
