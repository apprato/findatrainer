/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;
let token;

const handleVerify = (options) => {
  const match = options;
  console.log('handleVerify');

  Accounts.verifyEmail(match.token, (error) => {
    Bert.defaults.hideDelay = 10000;
    var message, redirect;
    if (error) {
      message = `${error.reason}, Please open the email link again or re-send to activate your account`;
      Bert.alert(message, 'danger');
      match.component.accountVerificationNotice = message;
      match.component.accountVerificationStatus = false;
    } else {
      message = 'Your account is verified.'
      match.component.accountVerificationNotice = message;
      Bert.alert(message, 'success');
      match.component.accountVerificationNotice= message;
      match.component.accountVerificationStatus = true;
    }
    // Redirect to first page of sign-up after confirming
    const user = Meteor.user();
    var redirect;
    if (user) {
      if (typeof(user) !== 'undefined' && user.profile.roles[0] !== 'undefined' && user.profile.roles[0] == 'client') {
        redirect = '/client/new/measurement';
      }
      else if (typeof(user) !== 'undefined' && user.profile.roles[0] == 'trainer') {
        redirect = '/trainer/new/experience';
      }
    }
    else {
          // This should be a page detailing how to open account
          redirect = '/';
    }
    browserHistory.push(redirect);
  });

};


export default function handleVerifyEmail(options) {
  component = options.component;
  token = options.token;
  handleVerify(options);
}
