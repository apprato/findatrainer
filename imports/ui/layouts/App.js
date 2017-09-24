import React from 'react';
import {Grid} from 'react-bootstrap';
import {Alert, Button, Row} from 'react-bootstrap';
import AppNavigation from '../containers/AppNavigation.js';
import {createContainer} from 'meteor/react-meteor-data';


const getUserName = name => ({
  string: name,
  object: `${name.first} ${name.last}`,
}[typeof name]);

const renderContent = (emailAddress, emailVerified) => {
  console.log(emailAddress + ' ' + emailVerified);
  if (emailVerified) {
    return (
      <div className="VerifyEmail">
        <Alert bsStyle='info'>
          Please verify your account login again to continue, Thank you
        </Alert>
      </div>);


  } else {
    return (
      <h2>Hey man! Log in to see this section</h2>
    );
  }
}

const handleResendVerificationEmail = (emailAddress) => {
  Meteor.call('sendVerificationLink', (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert(`Check ${emailAddress} for a verification link!`, 'success');
    }
  });
};


const App = ({children, loading, userId, name, emailAddress, emailVerified}) => (
  <div>
    <AppNavigation />
    <Grid>
      {
        userId && !emailVerified ?
          <Row>
            <h2>Verify your email to address all of Findatrainer</h2>
            <p>
              <strong>We've sent your an email to your address: {emailAddress}</strong><br /><br />
              Please check your email and click on the link provided to verify your adderess.<br /><br />
              To resend your confirmation email, please click here:
              <Button bsStyle="link" onClick={() => handleResendVerificationEmail(emailAddress)} href="#">Re-send</Button>
            </p>
          </Row>
          :
          children
      }
    </Grid>
  </div>
);


App.defaultProps = {
  userId: '',
  emailAddress: '',
  children: React.PropTypes.node,
};

App.propTypes = {
  children: React.PropTypes.node,
  loading: React.PropTypes.bool.isRequired,
  userId: React.PropTypes.string,
  emailAddress: React.PropTypes.string,
  emailVerified: React.PropTypes.bool.isRequired,
  authenticated: React.PropTypes.bool,
  name: React.PropTypes.string
};


// This is the same as creating a container with komposer and feeding the props into a component
export default createContainer(() => {
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  const userId = Meteor.userId();
  const loading = !Roles.subscription.ready();
  const name = user && user.profile && user.profile.name && getUserName(user.profile.name);
  const emailAddress = user && user.emails && user.emails[0].address;

  return {
    loading,
    loggingIn,
    authenticated: !loggingIn && !!userId,
    name: name || emailAddress,
    roles: !loading && Roles.getRolesForUser(userId),
    userId,
    emailAddress,
    emailVerified: user && user.emails ? user && user.emails && user.emails[0].verified : true,
  };
}, App);
