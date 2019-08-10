import React from 'react';
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Clients from '../containers/Clients.js';


const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center banner">
      <Row className="clearfix">
        <Col lg={6} className="text-left">
          <h1>Find a trainer<br />Get results</h1>
          <p>Submit your profile and metrics and a<br />trainer will contact you.</p>
          <p><a className="btn btn-success" href="/getstarted" role="button">Get Started</a></p>
        </Col>
        <Col lg={6}>
        </Col>
      </Row>
    </Jumbotron>
    <Row>
      <h1>How do they do it?</h1>
      <p>Ever wondered what it takes to look a certain away?<br />
        Or thought some people must be blessed with superhuman genetics? Here's your chance to find out.
      </p>
      <Row>
        <Col xs={6} sm={4} lg={2}>
          <Image src="http://placehold.it/400x400" responsive />
          <h4>Greg Smith</h4>
          <p>Personal Category</p>
        </Col>
        <Col xs={6} sm={4} lg={2}>
          <Image src="http://placehold.it/400x400" responsive />
          <h4>Greg Smith</h4>
          <p>Personal Category</p>
        </Col>
        <Col xs={6} sm={4} lg={2}>
          <Image src="http://placehold.it/400x400" responsive />
          <h4>Greg Smith</h4>
          <p>Personal Category</p>
        </Col>
        <Col xs={6} sm={4} lg={2}>
          <Image src="http://placehold.it/400x400" responsive />
          <h4>Greg Smith</h4>
          <p>Personal Category</p>
        </Col>
        <Col xs={6} sm={4} lg={2}>
          <Image src="http://placehold.it/400x400" responsive />
          <h4>Greg Smith</h4>
          <p>Personal Category</p>
        </Col>
        <Col xs={6} sm={4} lg={2}>
          <Image src="http://placehold.it/400x400" responsive />
          <h4>Greg Smith</h4>
          <p>Personal Category</p>
        </Col>
      </Row>
    </Row>



    <Row className="text-center">
      <Col className="">
        <h1>How does Gymeed work?</h1>
        <p>Check out the video below to see how Gymeed can help achieve you<br /> health and fitness goals?
      </p>
        <Image src="http://placehold.it/400x400" className="text-center clearfix" />
        <Row>
          <Col xs={6} sm={4} lg={4}>
            <h4>Find a coach</h4>
            <p>We have coaches from all over the world waiting to work with you. Stalk their profile, look at their results, read their reviews and analyse their star rating.</p>
          </Col>
          <Col xs={6} sm={4} lg={4}>
            <h4>Connect</h4>
            <p>Get in touch with any of our coaches by sending them a message. People are different on paper, so we want to make sure you and your coach get along!</p>
          </Col>
          <Col xs={6} sm={4} lg={4}>
            <h4>Get to work</h4>
            <p>Your preferred coach with make recommendations on how you could work together to hit your goals. If you agree, lock it in with an agreement.</p>
          </Col>
        </Row>
      </Col>
    </Row>


    <Row className="text-center">
      <Col sm={10}>
        <Col sm={6} className="">
          <h3><strong>Prefer a program over a coach?<br />We've got heaps to choose from!</strong></h3>
        </Col>
        <Col sm={6}>
          <br /><br />
          <p><a className="btn btn-success" href="/getstarted" role="button">Find a program</a></p>
        </Col>
      </Col>
    </Row>



    <Row className="text-center">
      <Col className="">
        <h1>Meet some of the coaches</h1>
        <p>Discover the story behind some of the great people<br /> who can help you achieve your ultimate health goal
      </p>
        <Image src="http://placehold.it/400x400" className="text-center clearfix" />
      </Col>
    </Row>
    <Row className="text-center">
      <p><a className="btn btn-success" href="/signup/trainer" role="button">Become a coach</a></p>
    </Row>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div >
);



export default Index;
