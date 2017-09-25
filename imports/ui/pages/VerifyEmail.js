import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';
import {Accounts} from 'meteor/accounts-base';
import {Bert} from 'meteor/themeteorchef:bert';
import handleVerifyEmail from '../../modules/verify-email';

export default class VerifyEmail extends React.Component {

  componentWillMount() {
    handleVerifyEmail({ component: this, token: this.props.params.token });
  }

  componentDidMount() {

  }

  render() {
    console.log(this);
    console.log(this.accountVerificationError);
    console.log(this.accountVerificationStatus);

    return (<div className="VerifyEmail">

      <Alert bsStyle={this.accountVerificationStatus ? 'info' : 'info'}>
        Verifying your accounts ....
      </Alert>
    </div>);
  }
}

VerifyEmail.propTypes = {
  params: React.PropTypes.object,
  accountVerificationStatus: React.PropTypes.bool,
  accountVerificationError: React.PropTypes.string
};

