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
import Modal from '../components/modals/Modal';
import modals from '../../modules/modals';
import trainerProductEditor from '../../modules/trainerProduct-editor.js';


export default class NewTrainerProductEditor extends React.Component {

  /* Education Modal */
  constructor(props) {
    super(props);
    this.state = { hourlyRate: null };
    this.handleHourlyRate = this.handleHourlyRate.bind(this);
    const component = this;

    component.state = {
      modalShow: false,
      modalClasses: null,
      modalTitle: null,
      modalForm: null,
      modalBody: null,
      modalFooter: null,
    };

    component.modal = {
      open(modal, modalProps) {
        component.setModal({ modal, show: true, props: modalProps });
      },
      close() {
        component.setModal({ show: false });
      },
    };

    component.resetModal = component.resetModal.bind(component);
    component.setModal = component.setModal.bind(component);
  }

  resetModal() {
    this.setState({
      modalClasses: null,
      modalTitle: null,
      modalForm: null,
      modalBody: null,
      modalFooter: null,
    });
  }

  setModal({ modal, show, props }) {
    const modalToSet = modal ? modals[modal](props, this.modal) : {};
    this.setState(Object.assign({ modalShow: show }, modalToSet), () => {
      if (!show) setTimeout(() => {
        this.resetModal();
      }, 300);
    });
  }

  handleHourlyRate(event) {
    /*
    First $500	20%
    $500.01 - $10,000	10%
    Over $10,000	5%
    */
    const hourlyRate = event.target.value;
    this.setState({ hourlyRate });
    document.querySelector('[name="paidRate"]').value = hourlyRate * 0.8;
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
    const {
      modalShow,
      modalClasses,
      modalTitle,
      modalForm,
      modalBody,
      modalFooter,
    } = this.state;

    return (<form
      ref={form => (this.trainerProductEditorForm = form)}
      onSubmit={event => event.preventDefault()}>
      <Row>
        <Modal
          show={modalShow}
          className={modalClasses}
          title={modalTitle}
          form={modalForm}
          body={modalBody}
          footer={modalFooter}
          onHide={this.modal.close}
        />
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
  job: React.PropTypes.object,
  hourlyRateProp: React.PropTypes.object
};
