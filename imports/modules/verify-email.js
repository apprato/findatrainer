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
  return (
    {
      callback: 'asdfsd'
    }
  );
  /*
  Accounts.verifyEmail(match.token, (error) => {
    if (error) {
      Bert.defaults.hideDelay = 10000;
      Bert.alert(error.reason + ', Please re-send to activate your account', 'danger');
    } else {
      setTimeout(() => {
        Bert.alert('Your account is verified, weclome to Findatrainer', 'success');
      }, 2000);
    }
  });
  */

};


export default function handleVerifyEmail(options) {
  component = options.component;
  token = options.token;
  handleVerify(options);
}
