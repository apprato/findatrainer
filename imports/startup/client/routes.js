/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';
import ClientJobs from '../../ui/pages/ClientJobs.js';
import Jobs from '../../ui/containers/JobsList.js';
import ViewJob from '../../ui/containers/ViewJob.js';
import EditJob from '../../ui/containers/EditJob.js';
import Documents from '../../ui/pages/Documents.js';
import NewDocument from '../../ui/pages/NewDocument.js';
import EditDocument from '../../ui/containers/EditDocument.js';
import ViewDocument from '../../ui/containers/ViewDocument.js';
import Index from '../../ui/pages/Index.js';
import ContactUs from '../../ui/pages/ContactUs.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import VerifyEmail from '../../ui/pages/VerifyEmail.js';
import Signup from '../../ui/pages/Signup.js';
import GetStarted from '../../ui/pages/GetStarted.js';
import Clients from '../../ui/containers/ClientsList.js';
import Messages from '../../ui/containers/MessagesList.js';
import Trainers from '../../ui/containers/TrainersList.js';
import NewClientMeasurement from '../../ui/pages/NewClientMeasurement.js';
import EditClientMeasurement from '../../ui/containers/EditClientMeasurement.js';
import NewTrainerExperience from '../../ui/pages/NewTrainerExperience.js';
import EditTrainerExperience from '../../ui/containers/EditTrainerExperience.js';
import MyAccountEditTrainerExperience from '../../ui/containers/MyAcocuntEditTrainerExperience.js'
import MyAccountEditTrainerProfile from '../../ui/containers/MyAcocuntEditTrainerExperience.js'
import NewClientJob from '../../ui/pages/NewClientJob.js';
import NewTrainerProfile from '../../ui/pages/NewTrainerProfile.js';
import EditTrainerProfile from '../../ui/containers/EditTrainerProfile.js';
import ViewTrainer from '../../ui/containers/ViewTrainer.js';
import ViewClient from '../../ui/containers/ViewClient.js';
import ViewChannel from '../../ui/containers/ViewChannel.js';
import NewClient from '../../ui/pages/NewClient.js';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate } />
        <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate } />
        <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } onEnter={ authenticate } />
        <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } onEnter={ authenticate } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="verify-email" path="/verify-email/:token" component={ VerifyEmail } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route name="signup-client" path="/signup/client" component={ Signup } />
        <Route name="signup-trainer" path="/signup/trainer" component={ Signup } />
        <Route name="clients" path="/clients" component={ Clients } onEnter={ authenticate } />
        <Route name="trainers" path="/trainers" component={ Trainers } onEnter={ authenticate }  />
        <Route name="listTrainersPagination" path="/trainers/page/:_id" component={ Trainers } onEnter={ authenticate }  />
        <Route name="listClientsPagination" path="/clients/page/:_id" component={ Clients } onEnter={ authenticate }  />
        <Route name="NewClientMeasurement" path="/client/new/measurement" component={ NewClientMeasurement } onEnter={ authenticate } />
        <Route name="EditClientMeasurement" path="/client/edit/measurement" component={ EditClientMeasurement } onEnter={ authenticate } />
        <Route name="NewTrainerExperience" path="/trainer/new/experience" component={ NewTrainerExperience } onEnter={ authenticate } />
        <Route name="EditTrainerExperience" path="/trainer/edit/experience" component={ EditTrainerExperience } onEnter={ authenticate } />
        <Route name="NewTrainerProfile" path="/trainer/new/profile" component={ NewTrainerProfile } onEnter={ authenticate } />
        <Route name="EditTrainerProfile" path="/trainer/edit/profile" component={ EditTrainerProfile } onEnter={ authenticate } />
        <Route name="MyAccountEditTrainerExperience" path="/myaccount/trainer/edit/experience" component={ MyAccountEditTrainerExperience } onEnter={ authenticate } />
        <Route name="MyAccountEditTrainerProfile" path="/myaccount/trainer/edit/profile" component={ MyAccountEditTrainerProfile } onEnter={ authenticate } />
        <Route name="jobs" path="/jobs" component={ Jobs } onEnter={ authenticate }  />
        <Route name="jobs" path="/jobs/search/:_search/" component={ Jobs } onEnter={ authenticate }  />
        <Route name="jobs" path="/jobs/search/:_search/page/:_id" component={ Jobs } onEnter={ authenticate }  />
        <Route name="jobs" path="/jobs/category/:_category" component={ Jobs } onEnter={ authenticate }  />
        <Route name="jobs" path="/jobs/search/:_search/category/:_category" component={ Jobs } onEnter={ authenticate }  />
        <Route name="jobs" path="/jobs/search/:_search/category/:_category/page/:id" component={ Jobs } onEnter={ authenticate }  />

        <Route name="viewJobsPagination" path="/jobs/page/:_id" component={ Jobs } onEnter={ authenticate }  />
        <Route name="viewJob" path="/jobs/:_id" component={ ViewJob } onEnter={ authenticate } />
        <Route name="clientJobs" path="/client/jobs" component={ ClientJobs } onEnter={ authenticate } />
        <Route name="editJob" path="/client/jobs/:_id/edit" component={ EditJob } onEnter={ authenticate } />
        <Route name="newClientJob" path="/client/new/job" component={ NewClientJob } onEnter={ authenticate } />
        <Route name="newClient" path="/clients/new" component={ NewClient } onEnter={ authenticate } />
        <Route name="viewClient" path="/clients/:_id" component={ ViewClient } onEnter={ authenticate } />
        <Route name="viewTrainer" path="/trainers/:_id" component={ ViewTrainer } onEnter={ authenticate } />
        <Route name="messages" path="/messages" component={ Messages } onEnter={ authenticate } />
        <Route name="viewChannel" path="/messages/:channel" component={ ViewChannel } onEnter={ authenticate } />
        <Route name="viewChannel" path="/messages/general" component={ ViewChannel } onEnter={ authenticate } />
        <Route name="viewChannel" path="/messages/:username" component={ ViewChannel } onEnter={ authenticate } />
        <Route name="getStarted" path="/getstarted" component={ GetStarted } />
        <Route name="contactUs" path="/contactus" component={ ContactUs } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
