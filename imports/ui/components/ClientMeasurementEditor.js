/* eslint-disable max-len, no-return-assign */

import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Row,
  Col,
  Popover,
  ButtonToolbar,
  OverlayTrigger,
  Radio
} from 'react-bootstrap';
import trainerExperienceEditor from '../../modules/trainerExperience-editor.js';

export default class TrainerExperienceEditor extends React.Component {
  componentDidMount() {
    trainerExperienceEditor({component: this});
    setTimeout(() => {
      $("select.skillTags").tagsinput('items');
      document.querySelector('[name="category"]').focus();
    }, 0);
  }


  render() {
    const {doc} = this.props;
    return (<form
        ref={ form => (this.trainerExperienceEditorForm = form) }
        onSubmit={ event => event.preventDefault() }>
        <Row>
          <Col xs={ 12 } sm={ 12 } md={ 12 }>
            <p>In order to track your health and fitness levels, we have provided a number of measurements below for you to complete. These are totally optional and you can complete these at any time in your profile settings.</p>
            <p>We take your privacy extremely seriously and your personal information will never be shown to anyone without your permission.</p>
            <p>You have an option within findatrainer to give your trainers access to this information so they can help you achieve your goals and view your progress. You can remove this permission at any time.</p>
          </Col>
          <Col xs={ 8 } sm={ 8 } md={ 8 }>
            <Row>
              <Col xs={ 6 } sm={ 6 } md={ 6 }>
                <h3></h3>
                <FormGroup>
                  <ControlLabel>Date of Birth</ControlLabel>
                  <FormControl
                    type="text"
                    ref="dob"
                    name="dob"
                    placeholder=""
                    defaultValue={ doc && doc.professionalTitle }
                  />
                </FormGroup>
                <FormGroup controlId="gender">
                  <ControlLabel>Gender</ControlLabel>
                  <FormControl
                    componentClass="select"
                    ref="gender"
                    name="gender"
                    defaultValue=""
                  >
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Weight</ControlLabel>
                  <FormControl
                    type="text"
                    ref="weight"
                    name="weight"
                    placeholder=""
                    defaultValue={ doc && doc.professionalTitle }
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Height</ControlLabel>
                  <FormControl
                    type="text"
                    ref="height"
                    name="height"
                    placeholder=""
                    defaultValue={ doc && doc.professionalTitle }
                  />
                </FormGroup>
                <FormGroup controlId="skillTags">
                  <ControlLabel>What specific skills do you offer clients?</ControlLabel>
                  <br />
                  <FormControl componentClass="select"
                               data-role="tagsinput"
                               placeholder="Enter your skill tags"
                               ref="skillTags"
                               name="skillTags"
                               className="skillTags"
                               defaultValue={ doc && doc.experienceLevel }
                               multiple>
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button type="submit" bsStyle="success">
          { doc && doc._id ? 'Update' : 'Save' }
        </Button>
      </form>
    );
  }
}

const popoverClick = (
  <Popover id="popover-trigger-click" title="Specific skills">
    <p>Type keywords here that relates to your individual skill set. This will help you to come up in
      users
      searches and be more relevant to what they want. For example: _weight loss, muscle gain, crossfit,
      reformer pilates, boxing, running, etc.
    </p>
  </Popover>
);

TrainerExperienceEditor.propTypes = {
  trainer: React.PropTypes.object,
};
