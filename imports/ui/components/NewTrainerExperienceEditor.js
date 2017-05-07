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
import clientEditor from '../../modules/client-editor.js';

export default class ClientEditor extends React.Component {
  componentDidMount() {
    clientEditor({component: this});
    setTimeout(() => {
      //document.querySelector('[name="title"]').focus();
    }, 0);
  }


  render() {
    const {client} = this.props;
    return (<form
        ref={ form => (this.clientEditorForm = form) }
        onSubmit={ event => event.preventDefault() }>
        <Row>
          <Col xs={ 12 } sm={ 12 } md={ 12 }>
            <p>This will help us connect you with the right clients and help you grow your business through
              findatrainer.<br />
              We’ll ask you to select tasks of interest and complete a profile for review.<br /> Remember, you can always
              come
              back and edit this information later.</p>
          </Col>
          <Col xs={ 8 } sm={ 8 } md={ 8 }>
            <Row>
              <Col xs={ 12 } sm={ 12 } md={ 12 }>
                <h3></h3>
                <FormGroup controlId="category">
                  <ControlLabel>What is the main category of health and fitness that you are trained/experienced
                    in?</ControlLabel>
                  <p>*If you are not professionally trained/experienced in any, please select “none”</p>
                  <FormControl componentClass="select" multiple>
                    <option value="other">Personal Training</option>
                    <option value="other">Pilates</option>
                    <option value="other">Yoga</option>
                    <option value="other">Zumba</option>
                    <option value="other">Martial Arts</option>
                    <option value="other">Aerobics</option>
                    <option value="other">Gymnastics</option>
                    <option value="other">Swimming</option>
                    <option value="other">Water Sports</option>
                    <option value="other">Cycling</option>
                    <option value="other">Dancing</option>
                    <option value="other">Athletics</option>
                    <option value="other">Snow Sports</option>
                    <option value="other">Tennis</option>
                    <option value="other">Cricket</option>
                    <option value="other">Other</option>
                    <option value="other">Nutrition</option>
                    <option value="other">Dietitians</option>
                    <option value="other">Supplements</option>
                    <option value="other">None</option>
                  </FormControl>
                </FormGroup>
              </Col>
              <Col xs={ 6 } sm={ 6 } md={ 6 }>
                <FormGroup controlId="tags">
                  <ControlLabel>What specific skills do you offer clients?</ControlLabel>
                  <br />
                  <FormControl componentClass="select" data-role="tagsinput" placeholder="Enter your tags here"
                               multiple>
                  </FormControl>
                </FormGroup>
              </Col>
              <Col xs={ 6 } sm={ 6 } md={ 6 }>
                <ButtonToolbar>
                  <OverlayTrigger trigger="click" placement="right" overlay={popoverClick}>
                    <Button>?</Button>
                  </OverlayTrigger>
                </ButtonToolbar>
              </Col>
            </Row>
            <Row>
              <Col xs={ 6 } sm={ 6 } md={ 6 }>
                <FormGroup>
                  <ControlLabel>What is your work experience level?</ControlLabel><br />
                  <Radio name="radioGroup" inline>
                    Entry Level
                  </Radio>
                  {' '}
                  <Radio name="radioGroup" inline>
                    Intermediate
                  </Radio>
                  {' '}
                  <Radio name="radioGroup" inline>
                    Export
                  </Radio>
                </FormGroup>
              </Col>
              <Col xs={ 6 } sm={ 6 } md={ 6 }>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button type="submit" bsStyle="success">
          { client && client._id ? 'Save Experience' : 'Save & Create Profile' }
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

clientEditor.propTypes = {
  client: React.PropTypes.object,
};
