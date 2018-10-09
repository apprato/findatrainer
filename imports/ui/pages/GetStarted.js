import React from 'react';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';

const Index = () => (
  <div className="GetStarted">
    <Row>
      <Col className="col-centered" xs={10} sm={6} md={8} lg={8}>
        <h1>Let's get started!<br />
          What you're looking for.?</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
        <div className="trainers col-centered">
          <h2>Become a Client</h2>
          <p>Get started now and be spoilt with choices as trainers approach you with similar strengths to match you areas of desired improvement</p>
          <span class="glyphicon glyphicon-briefcase"></span>
          <a class="btn" href="/signup/client"><p><Button type="submit" bsStyle="success">Find Trainers</Button></p></a>
        </div>
        <br /><br />
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <div className="clients col-centered">
          <h2>Become a Trainer</h2>
          <p>Get started with choices of ready to go clients and supplement your spare unbilled time with revenue streams of your choosing and capacity.</p>
          <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
          <a class="btn" href="/signup/trainer"><p><Button type="submit" bsStyle="success">Find Suitable Work</Button></p></a>
        </div>
        <br /><br />
      </Col>
    </Row>
  </div >
);

export default Index;
