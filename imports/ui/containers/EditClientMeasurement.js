import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Clients from '../../api/clients/clients.js';
import ClientMeasurementEditor from '../pages/EditClientMeasurement.js';

import Loading from '../components/Loading.js';

/* Load Trainers Edit profile colleciton base off idUser
 *  @param, onData
 *  @return doc
 */
const composer = ({params}, onData) => {

  const subscription = Meteor.subscribe('clients.edit.measurement');

  if (subscription.ready()) {
    const trainer = Clients.find({"idUser": String(Meteor.userId())}).fetch();
    const doc = trainer[0];
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(ClientMeasurementEditor);
