import React from 'react';
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Clients from '../containers/Clients.js';


const Index = () => (
  <div className="Index">
    <section className="banner">
      <Jumbotron className="text-center banner">
        <Row className="col-centered clearfix">
          <Col lg={6} className="text-left">
            <h1><i>FIND A TRAINER & GET RESULTS</i></h1>
            <p>Submit your profile to find your ideal trainer through the gymeed platform.</p>
            <p><a className="btn btn-success" href="/getstarted" role="button">Get Started</a></p>
          </Col>
          <Col lg={6}>
          </Col>
        </Row>
      </Jumbotron>
    </section>

    <section>
      <Row className="col-centered">
        <h1>What do you need help with?</h1>
        <Row>
          <Col xs={6} sm={4} lg={2}>
            <div className="col-centered circle">
              <Image className="col-centered" src="svg/37_weight_loss.svg" responsive />
            </div>
            <br />
            <p className="col-centered">Weight Loss</p>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <div className="col-centered circle">
              <Image className="col-centered" src="svg/38_muscle_gain.svg" responsive />
            </div>
            <br />
            <p className="col-centered">Muscle Gain</p>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <div className="col-centered circle">
              <Image className="col-centered" src="svg/08_athletics.svg" responsive />
            </div>
            <br />
            <p className="col-centered">Athletics</p>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <div className="col-centered circle">
              <br />
              <Image className="col-centered" src="svg/09_yoga.svg" responsive />
            </div>
            <br />
            <p className="col-centered">Yoga</p>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <div className="col-centered circle">
              <Image className="col-centered" src="svg/49_nutrition.svg" responsive />
            </div>
            <br />
            <p className="col-centered">Nutrition</p>
          </Col>
          <Col xs={6} sm={4} lg={2}>
            <div className="col-centered circle">
              <Image className="col-centered" src="svg/47_supplements.svg" responsive />
            </div>
            <br />
            <p className="col-centered">Supplements</p>
          </Col>
        </Row>
      </Row>
    </section>

    <section>
      <Row className="col-centered">
        <h1>How do they do it?</h1>
        <p>Ever wondered what it takes to look a certain away?<br />
          Or thought some people must be blessed with superhuman genetics? Here's your chance to find out.</p>
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
    </section>


    <section>
      <Row className="text-center">
        <Col className="">
          <h1>How does Gymeed work?</h1>
          <p>Check out the video below to see how Gymeed can help achieve you<br /> health and fitness goals?</p>
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
    </section>


    <section>
      <Row className="text-center">
        <Col sm={10}>
          <Col sm={6} className="">
            <h3><strong>Prefer a program over a coach?<br />We've got heaps to choose from!</strong></h3>
          </Col>
          <Col sm={6}>
            <br /><br />
            <p><a className="btn btn-success" href="/marketplace" role="button">Find a program</a></p>
          </Col>
        </Col>
      </Row>
    </section>



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


    <Row className="hidden">
      <Col lg={4} >
        <ul>
          <li>COMPANY</li>
          <li>About Us</li>
          <li>Trust & Saftey</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Blog</li>
          <li>Conact Us</li>
        </ul>
      </Col>
      <Col lg={4} >
        <ul>
          <li>DISCOVER</li>
          <li>How It Works</li>
          <li>Earn Money</li>
          <li>New Users FAQ</li>
          <li>Find Work</li>
          <li>Support Center</li>
        </ul>
      </Col>
      <Col lg={4} >
        <ul>
          <li>BROWSE</li>
          <li>Coaches by Speciality</li>
          <li>Coaches by Australia</li>
          <li>Coaches by New Zealand</li>
        </ul>
      </Col>
    </Row>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div >
);



export default Index;
