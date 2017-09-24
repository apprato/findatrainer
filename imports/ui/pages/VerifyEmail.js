import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';
import {Accounts} from 'meteor/accounts-base';
import {Bert} from 'meteor/themeteorchef:bert';
import handleVerifyEmail from '../../modules/verify-email';

export default class VerifyEmail extends React.Component {

  componentDidMount() {
    var verifiedEmail = handleVerifyEmail({ component: this, token: this.props.params.token });
    console.log(verifiedEmail)
  }

  render() {
    return (<div className="VerifyEmail">
    </div>);
  }
}

VerifyEmail.propTypes = {
  params: React.PropTypes.object,
};

