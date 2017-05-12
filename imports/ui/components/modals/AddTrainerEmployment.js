import React from 'react';
import {Button, FormGroup, ControlLabel, Modal, FormControl, Row, Col} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import {Meteor} from 'meteor/meteor';
import {$} from 'meteor/jquery';
import {Bert} from 'meteor/themeteorchef:bert';
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
        title: {required: true},
        body: {required: true},
      },
      messages: {
        title: {required: 'Please add a title.'},
        body: {required: 'Please add a body.'},
      },
      submitHandler: this.handleAddDocument,
    });
  }

  render() {
    const {modal} = this.props;

    return (
      <form
        ref={addDocumentForm => (this.addDocumentForm = addDocumentForm)}
        onSubmit={event => event.preventDefault()}
      >
        <Modal.Body>
          <Row>
            <Col xs={ 12 } sm={ 12 } md={ 12 }>
              <FormGroup>
                <ControlLabel>Company</ControlLabel>
                <input
                  ref={title => (this.title = title)}
                  type="text"
                  name="company"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Location</ControlLabel>
                <input
                  ref={title => (this.title = title)}
                  type="text"
                  name="title"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <input
                  ref={title => (this.title = title)}
                  type="text"
                  name="title"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Role</ControlLabel>
                <FormControl componentClass="select" placeholder="select" ref="role" name="role">
                  <option value=""></option>
                  <option value="2017">Intern</option>
                  <option value="2016">Individual Contributor</option>
                  <option value="2016">Lead</option>
                  <option value="2016">Manager</option>
                  <option value="2016">Executive</option>
                  <option value="2016">Owner</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={ 6 } sm={ 6 } md={ 6 }>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Period</ControlLabel>
                <FormControl componentClass="select" placeholder="select" ref="fromMonth" name="fromMonth">
                  <option value="">Month</option>
                  <option value="2017">Intern</option>
                  <option value="2016">Individual Contributor</option>
                  <option value="2016">Lead</option>
                  <option value="2016">Manager</option>
                  <option value="2016">Executive</option>
                  <option value="2016">Owner</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={ 6 } sm={ 6 } md={ 6 }>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>&nbsp;</ControlLabel>
                <FormControl componentClass="select" placeholder="select" ref="fromYear" name="fromYear">
                  <option value="">Year</option>
                  <option value="2017">Intern</option>
                  <option value="2016">Individual Contributor</option>
                  <option value="2016">Lead</option>
                  <option value="2016">Manager</option>
                  <option value="2016">Executive</option>
                  <option value="2016">Owner</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={ 12 } sm={ 12 } md={ 12 }>
              <p className="text-center">through</p>
            </Col>
            <Col xs={ 6 } sm={ 6 } md={ 6 }>
              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select" ref="toMonth" name="toMonth">
                  <option value="">Month</option>
                  <option value="2017">Intern</option>
                  <option value="2016">Individual Contributor</option>
                  <option value="2016">Lead</option>
                  <option value="2016">Manager</option>
                  <option value="2016">Executive</option>
                  <option value="2016">Owner</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={ 6 } sm={ 6 } md={ 6 }>
              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select" ref="toYear" name="toYear">
                  <option value="">Year</option>
                  <option value="2017">Intern</option>
                  <option value="2016">Individual Contributor</option>
                  <option value="2016">Lead</option>
                  <option value="2016">Manager</option>
                  <option value="2016">Executive</option>
                  <option value="2016">Owner</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={ 12 } sm={ 12 } md={ 12 }>
              <FormGroup className="description">
                <ControlLabel>Description (optional)</ControlLabel>
                <FormControl
                  className="description"
                  componentClass="textarea"
                  type="textarea"
                  ref="description"
                  name="description"
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ modal.close } bsStyle="default">Cancel</Button>
          <Button type="submit" bsStyle="success">Add Employment Details</Button>
        </Modal.Footer>
      </form>
    );
  }
}

AddDocumentModalForm.propTypes = {
  modal: React.PropTypes.object,
};
