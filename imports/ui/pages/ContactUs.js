import React from 'react';
import { Row, Col, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';
import { Bert } from 'meteor/themeteorchef:bert';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleSendMessage() {
    const message = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };

    Meteor.call('sendMessage', message, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        this.contactForm.reset();
        Bert.alert('Message sent!', 'success');
      }
    });
  }

  componentDidMount() {
    const component = this;
    $(component.contactForm).validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
        },
      },
      messages: {
        name: {
          required: 'Please fill in your email.',
        },
        email: {
          required: 'Please fill in your email.',
          email: 'Please fill in your email correctly',
        },
        message: {
          required: 'Please add your message.',
        },
      },
      submitHandler() { component.handleSendMessage(); },
    });
  }

  render() {
    return (
      <div className="ContactUs">
        <Row>
          <Col className="col-centered" xs={12} sm={8} md={8}>
            <h2 className="page-header">Contact Us</h2>
            <form
              ref={contactForm => (this.contactForm = contactForm)}
              onSubmit={event => event.preventDefault()}
            >
              <FormGroup>
                <ControlLabel>Your Name</ControlLabel>
                <input
                  ref={name => (this.name = name)}
                  type="text"
                  name="name"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Your Email</ControlLabel>
                <input
                  ref={email => (this.email = email)}
                  type="email"
                  name="email"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Your Message</ControlLabel>
                <textarea
                  ref={message => (this.message = message)}
                  name="message"
                  className="form-control"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Send Message</Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContactUs;
