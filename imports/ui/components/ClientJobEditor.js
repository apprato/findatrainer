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
import clientJobEditor from '../../modules/clientJob-editor.js';


export default class NewClientJobEditor extends React.Component {

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
        component.setModal({modal, show: true, props: modalProps});
      },
      close() {
        component.setModal({show: false});
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

  setModal({modal, show, props}) {
    const modalToSet = modal ? modals[modal](props, this.modal) : {};
    this.setState(Object.assign({modalShow: show}, modalToSet), () => {
      if (!show) setTimeout(() => {
        this.resetModal();
      }, 300);
    });
  }

  handleHourlyRate (event) {
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
    clientJobEditor({component: this});
    setTimeout(() => {
      document.querySelector('[name="category"]').focus();
    }, 0);
  }


  /* Form Render */
  render() {
    const {doc} = this.props;
    const {
      modalShow,
      modalClasses,
      modalTitle,
      modalForm,
      modalBody,
      modalFooter,
    } = this.state;

    return (<form
        ref={ form => (this.clientJobEditorForm = form) }
        onSubmit={ event => event.preventDefault() }>
        <Row>
          <Modal
            show={ modalShow }
            className={ modalClasses }
            title={ modalTitle }
            form={ modalForm }
            body={ modalBody }
            footer={ modalFooter }
            onHide={ this.modal.close }
          />
          <Col xs={ 8 } sm={ 8 } md={ 8 }>
              <FormGroup controlId="category">
                <ControlLabel>Choose a category</ControlLabel>
                <FormControl
                  componentClass="select"
                  ref="category"
                  name="category"
                  defaultValue={ doc && doc.category }
                >
                  <option value="">Please select</option>
                  <option value="personal_training">Personal Training</option>
                  <option value="pilates">Pilates</option>
                  <option value="yoga">Yoga</option>
                  <option value="zumba">Zumba</option>
                  <option value="martial_arts">Martial Arts</option>
                  <option value="aerobics">Aerobics</option>
                  <option value="gymnastics">Gymnastics</option>
                  <option value="swimming">Swimming</option>
                  <option value="water_sports">Water Sports</option>
                  <option value="cycling">Cycling</option>
                  <option value="dancing">Dancing</option>
                  <option value="athletics">Athletics</option>
                  <option value="snow_sports">Snow Sports</option>
                  <option value="tennis">Tennis</option>
                  <option value="cricket">Cricket</option>
                  <option value="other">Other</option>
                  <option value="nutrition">Nutrition</option>
                  <option value="dietitians">Dietitians</option>
                  <option value="supplements">Supplements</option>
                  <option value="none">None</option>
                </FormControl>
              </FormGroup>
          </Col>


          <Col xs={ 8 } sm={ 8 } md={ 8 }>
            <h2>Describe the Job</h2>
              <FormGroup>
              <ControlLabel>Name your job posting</ControlLabel>
              <FormControl
                type="text"
                ref="jobTitle"
                name="jobTitle"
                placeholder="I Require Help Developing a Powerpoint Presentation for a Family Reunion"
                defaultValue={ doc && doc.jobTitle }
              />
            </FormGroup>
            <FormGroup className="overview">
              <ControlLabel>Describe the work to be done</ControlLabel>
              <FormControl
                className="overview"
                componentClass="textarea"
                type="textarea"
                ref="overview"
                name="overview"
                placeholder="I need someone to help me develop a power point presentation for a family reunion. I need the presentation to be very entertaining, complete with music. The presentation will be presented on a projector in front of 150 people. I will need to verbally describe my ideas to the freelancer so you must have good communication skills in English and be OK with some ambiguity at the beginning of the project."
                defaultValue={ doc && doc.overview }
              />
            </FormGroup>
            <FormGroup controlId="type">
              <ControlLabel>What type of project do you have?</ControlLabel>
              <FormControl componentClass="select" placeholder="select"
                           ref="typeProject"
                           defaultValue={ doc && doc.typeProject }
                           name="typeProject">
                <option value="">Please select</option>
                <option value="1">One-time project</option>
                <option value="2">Ongoing project</option>
                <option value="3">I am not sure</option>
              </FormControl>
            </FormGroup>
          </Col>



          <Col xs={ 8 } sm={ 8 } md={ 8 }>
            <h2>Rate and Availability</h2>
            <FormGroup controlId="payType">
              <ControlLabel>How would you like to pay?</ControlLabel>
              <FormControl componentClass="select" placeholder="select"
                           ref="payType"
                           defaultValue={ doc && doc.payType }
                           name="payType">
                <option value="">Please select</option>
                <option value="1">Pay by the hour</option>
                <option value="2">Pay a fixed hour</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="experienceLevel">
              <ControlLabel>What is your work experience level?</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                ref="experienceLevel"
                name="experienceLevel"
                defaultValue={ doc && doc.experienceLevel }
              >
                <option value="">Please select experience level</option>
                <option value="entry_level">Entry Level</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="jobLength">
              <ControlLabel>How long do you expect this job to last?</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                ref="jobLength"
                name="jobLength"
                defaultValue={ doc && doc.jobLength }
              >
                <option value="">Please select experience level</option>
                <option value="entry_level">More than 6 months</option>
                <option value="intermediate">3 to 6 months</option>
                <option value="intermediate">1 to 3 months</option>
                <option value="intermediate">Less than 1 month</option>
                <option value="intermediate">Less than 1 week</option>
              </FormControl>
            </FormGroup>
            <FormGroup className="screenQuestions">
              <h3>Screen Questions</h3>
              <ControlLabel>Add a few questions you'd like your candidates to answer when applying to your job.</ControlLabel>
              <FormControl
                className="screenQuestions"
                componentClass="textarea"
                type="textarea"
                ref="screenQuestions"
                name="screenQuestions"
                placeholder="Add your questions here?"
                defaultValue={ doc && doc.screenQuestions }
              />
            </FormGroup>
          </Col>
        </Row>
        <br />
        <br />
        <Button type="submit" bsStyle="success">
          { doc && doc._id ? 'Save Job' : 'Post Job' }
        </Button>
        <br />
        <br />
      </form>
    );
  }
}


NewClientJobEditor.propTypes = {
  job: React.PropTypes.object,
  hourlyRateProp: React.PropTypes.object,

};
