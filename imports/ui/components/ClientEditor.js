/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import clientEditor from '../../modules/client-editor.js';

export default class clientEditor extends React.Component {
  componentDidMount() {
    clientEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { client } = this.props;
    return (<form
      ref={ form => (this.clientEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ client && client.title }
          placeholder="Mr,Mrs,Miss,Doctor etc"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Body</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="body"
          defaultValue={ client && client.description }
          placeholder="Tell us about what you'd like to achieve"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { client && client._id ? 'Save Changes' : 'Add Your Fit Request' }
      </Button>
    </form>);
  }
}

clientEditor.propTypes = {
  client: React.PropTypes.object,
};
