import React from 'react';
import { browserHistory } from 'react-router';
import { Alert, Row, Col, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import * as ChatRoomMethods from '../../api/chat-rooms/methods';


const handleChatUser = (_id, firstName, lastName) => {

  let input = {};
  input.trainerId = _id;
  input.firstName = firstName;
  input.lastName = lastName;

  ChatRoomMethods.addDirectMessageRoom.call(input, (error, response) => {
    console.log('M - ChatRoomMethods.getDirectMessageRoom / callback');

    if (error) {
      console.log(error);
      //this.setState({ error: error.reason });
    } else {
      console.log(response);

      console.log('....');
      browserHistory.push(`/chat-room/${response.data.chatRoomId}`);
      window.location.href = (`/chat-room/${response.data.chatRoomId}`);
    }
  });
}


const ViewTrainer = ({ trainer }) => (

  <div className="ViewTrainer">
    <h1>{trainer.firstName} {trainer.lastName} ({trainer.professionalTitle})</h1>
    <Row>
      <Col xs={12} sm={8}>
        <h2>Overview</h2>
        <p>{trainer.overview}</p>
        <p><strong>Category: </strong>{trainer.category}</p>
        <p><strong>Experience Level: </strong>{trainer.experienceLevel}</p>
        <p><strong>English Proficiency:</strong>{trainer.englishProficiency}</p>
        <br />
        <div className="Trainers-Education">
          <h2>Education</h2>
          {trainer.education ? trainer.education.map(({ school, dateFrom, dateTo, tertiaryEducation, areaOfStudy }) => (
            <Row>
              <Col xs={12} sm={12}>
                <h3>{school}</h3>
                <p><strong>Date From:</strong> {dateFrom}</p>
                <p><strong>Date To:</strong> {dateTo}</p>
                <p><strong>Tertiary Education:</strong> {tertiaryEducation}</p>
                <p><strong>Area of Study: </strong>{areaOfStudy}</p>
              </Col>
            </Row>
          )) : <Alert>No education listed.'</Alert>}
        </div>
        <div className="Trainers-Employment">
          <h2>Employment</h2>
          {trainer.employment ? trainer.employment.map(({ company, location, title, fromMonth, fromYear, toMonth, toYear, description }) => (
            <Row>
              <Col xs={12} sm={12}>
                <h3>{company}</h3>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Title:</strong> {title}</p>
                <p><strong>From Month:</strong> {fromMonth}</p>
                <p><strong>From Year: </strong>{fromYear}</p>
                <p><strong>To Month:</strong> {toMonth}</p>
                <p><strong>To Year:</strong> {toYear}</p>
              </Col>
            </Row>
          )) : <Alert>No education listed.'</Alert>}
        </div>

      </Col>
      <Col xs={12} sm={4}>
        <h2>Location</h2>
        <p>
          {trainer.address1}<br />
          {trainer.address2}<br />
          {trainer.city}<br />
          {trainer.country}<br />
          {trainer.postCode}<br />
          {trainer.phoneNumber}<br />
        </p>
        <h2>Rate</h2>
        <p>${trainer.hourlyRate} / hour</p>
        <h2>Contact</h2>
        <Button key={trainer._id} onClick={() => handleChatUser(trainer._id, trainer.firstName, trainer.lastName)} variant="light">Message</Button>
      </Col>
    </Row>
  </div>
);

ViewTrainer.propTypes = {
  trainer: React.PropTypes.object,
};

export default ViewTrainer;
