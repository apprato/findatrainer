import React from 'react';
import { browserHistory } from 'react-router';
import { Alert, Row, Col, Button, Panel } from 'react-bootstrap';
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


const ViewProduct = ({ product }) => (

  <div className="ViewProduct">
    <h1>{product.firstName} {product.lastName} ({product.professionalTitle})</h1>
    <Panel>
      <Row>
        <Col xs={12} sm={8}>
          <h2>Overview</h2>
          <p>{product.overview}</p>
          <p><strong>Category: </strong>{product.category}</p>
          <p><strong>Experience Level: </strong>{product.experienceLevel}</p>
          <p><strong>English Proficiency:</strong>{product.englishProficiency}</p>
          <br />
          <div className="Products-Education">
            <h2>Education</h2>
            {product.education ? product.education.map(({ school, dateFrom, dateTo, tertiaryEducation, areaOfStudy }) => (
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
          <div className="Products-Employment">
            <h2>Employment</h2>
            {product.employment ? product.employment.map(({ company, location, title, fromMonth, fromYear, toMonth, toYear, description }) => (
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
            {product.address1}<br />
            {product.address2}<br />
            {product.city}<br />
            {product.country}<br />
            {product.postCode}<br />
            {product.phoneNumber}<br />
          </p>
          <h2>Rate</h2>
          <p>${product.hourlyRate} / hour</p>
          <h2>Contact</h2>
          <Button key={product._id} onClick={() => handleChatUser(product._id, product.firstName, product.lastName)} variant="light">Message</Button>
        </Col>
      </Row>
    </Panel>
  </div>
);

ViewProduct.propTypes = {
  product: React.PropTypes.object,
};

export default ViewProduct;
