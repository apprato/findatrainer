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
      document.querySelector('[name="title"]').focus();
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
              findatrainer.
              We’ll ask you to select tasks of interest and complete a profile for review. Remember, you can always come
              back and edit this information later.</p>
          </Col>
          <Col xs={ 8 } sm={ 8 } md={ 8 }>
            <FormGroup>
              <ControlLabel>Add a professional title that describes the work you do:</ControlLabel>
              <FormControl
                type="text"
                ref="emailAddress"
                name="emailAddress"
                placeholder="EXAMPLE: Yoga & Pilates Specialist”"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Write a brief professional overview:</ControlLabel>
              <FormControl
                type="text"
                ref="overview"
                name="overview"
                placeholder="After 8 years of working as a full time Yoga and Pilates instructor, I have a thorough and in-depth knowledge of both disciplines. I have worked with all experience levels from beginners to experts, helping my clients with a vast array of results including strength gains, core stability improvement, injury recovery and pregnancy exercises.

Yoga and Pilates are the best exercises to help build core strength and flexibility. They are also low impact workouts so are good for your joints and have a fast recovery time.

If you’re looking to get started in either of these disciplines or have been doing them for a long time and want to work with a new trainer, I can help you achieve your goals."
              />
            </FormGroup>
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
  <Popover id="popover-trigger-click" title="Popover bottom">
    <h5>Why choose Entry Level?</h5>
    <p>Starting to build experience in your field</p>
  </Popover>
);

clientEditor.propTypes = {
  client: React.PropTypes.object,
};
