import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Trainers from '../../api/trainers/trainers.js';
import TrainerEducationList from '../components/TrainerEducationList.js';

import Loading from '../components/Loading.js';

/* Load Trainers Edit profile colleciton base off idUser
 *  @param, onData
 *  @return doc
 */
const composer = ({params}, onData) => {

  const subscription = Meteor.subscribe('trainers.list.education');

  if (subscription.ready()) {
    var trainer = Trainers.find({"idUser": String(Meteor.userId()) } ).fetch();
    var trainer = trainer[0];
    const doc  = trainer.education;
    console.log(doc);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(TrainerEducationList);
