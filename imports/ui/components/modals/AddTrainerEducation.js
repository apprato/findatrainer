import React from 'react';
import { Button, FormGroup, ControlLabel, Modal } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';
import { Bert } from 'meteor/themeteorchef:bert';
import '../../../modules/validation.js';

export default class AddDocumentModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddDocument = this.handleAddDocument.bind(this);
  }

  handleAddDocument() {
    const doc = {
      title: this.title.value,
      body: this.body.value,
    };

    Meteor.call('documents.upsert', doc, (error, response) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        if (response.insertedId) browserHistory.push(`/documents/${response.insertedId}`);
        this.props.modal.close();
      }
    });
  }

  componentDidMount() {
    $(this.addDocumentForm).validate({
      rules: {
        title: { required: true },
        body: { required: true },
      },
      messages: {
        title: { required: 'Please add a title.' },
        body: { required: 'Please add a body.' },
      },
      submitHandler: this.handleAddDocument,
    });
  }

  render() {
    const { modal } = this.props;

    return (
      <form
        ref={addDocumentForm => (this.addDocumentForm = addDocumentForm)}
        onSubmit={event => event.preventDefault()}
      >
        <Modal.Body>
          <FormGroup>
            <ControlLabel>School</ControlLabel>
            <input
              ref={title => (this.title = title)}
              type="text"
              name="title"
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Tertiary Education (Degree, Diploma, Certification)</ControlLabel>
            <input
              ref={title => (this.title = title)}
              type="text"
              name="tertiaryEducation"
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Area of Study</ControlLabel>
            <input
              ref={title => (this.title = title)}
              type="text"
              name="areaOfStudy"
              className="form-control"
            />
          </FormGroup>
          <ControlLabel>Description</ControlLabel>
          <textarea
            ref={body => (this.body = body)}
            name="body"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ modal.close } bsStyle="default">Cancel</Button>
          <Button type="submit" bsStyle="success">Add Education</Button>
        </Modal.Footer>
      </form>
    );
  }
}

AddDocumentModalForm.propTypes = {
  modal: React.PropTypes.object,
};
