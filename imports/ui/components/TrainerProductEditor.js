/* eslint-disable max-len, no-return-assign */

import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import trainerProductEditor from '../../modules/trainerProduct-editor.js';


export default class NewTrainerProductEditor extends React.Component {

  /* Education Modal */
  constructor(props) {
    super(props);
    this.state = { hourlyRate: null };
    const component = this;
  }

  /* React Mounts */
  componentDidMount() {
    trainerProductEditor({ component: this });
    setTimeout(() => {
      document.querySelector('[name="name"]').focus();
    }, 0);
  }


  /* Form Render */
  render() {
    const { doc } = this.props;

    return (<form
      ref={form => (this.trainerProductEditorForm = form)}
      onSubmit={event => event.preventDefault()}>
      <Row>
        <Col className="col-centered" xs={12} sm={8} md={8}>
          <p>Be part of the gymeed marketplace where you can seel your digital downloadable products.</p>
          <FormGroup>
            <ControlLabel>Product Name</ControlLabel>
            <FormControl
              type="text"
              ref="name"
              name="name"
              placeholder="I Require Help Developing a Powerpoint Presentation for a Family Reunion"
              defaultValue={doc && doc.name}
            />
          </FormGroup>
          <FormGroup className="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              className="description"
              type="text"
              ref="description"
              name="description"
              placeholder="Add you product description."
              defaultValue={doc && doc.description}
            />
          </FormGroup>
          <FormGroup className="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              className="price"
              type="text"
              ref="price"
              name="price"
              placeholder="Set price"
              defaultValue={doc && doc.price}
            />
          </FormGroup>
          <FormGroup className="image">
            <ControlLabel>Image</ControlLabel>
            <FormControl
              className="image"
              type="text"
              ref="image"
              name="image"
              placeholder="Upload Image."
              defaultValue={doc && doc.image}
            />
          </FormGroup>
          <FormGroup className="upload">
            <ControlLabel>Upload Digital Product</ControlLabel>
            <FormControl
              className="upload"
              type="text"
              ref="upload"
              name="upload"
              placeholder="Upload Product."
              defaultValue={doc && doc.upload}
            />
          </FormGroup>
        </Col>
      </Row>
      <br />
      <br />
      <Button type="submit" bsStyle="success">
        {doc && doc._id ? 'Save Product' : 'Add Product'}
      </Button>
      <br />
      <br />
    </form>
    );
  }
}


NewTrainerProductEditor.propTypes = {
  doc: React.PropTypes.object,
  job: React.PropTypes.object,
  hourlyRateProp: React.PropTypes.object
};
