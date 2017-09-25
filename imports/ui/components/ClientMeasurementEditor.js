/* eslint-disable max-len, no-return-assign */

import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import clientMeasurementEditor from '../../modules/clientMeasurement-editor';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class ClientMeasurementEditor extends React.Component {
  componentDidMount() {
    clientMeasurementEditor({component: this});
    setTimeout(() => {
      $("select.skills").tagsinput('items');
      //document.querySelector('[name="dob"]').focus();
    }, 0);
  }

  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }


  render() {
    const {doc} = this.props;
    return (<form
        ref={ form => (this.clientMeasurementEditorForm = form) }
        onSubmit={ event => event.preventDefault() }>
        <Row>
          <Col xs={ 8 } sm={ 8 } md={ 8 }>
            <p>In order to track your health and fitness levels, we have provided a number of measurements below for you
              to complete. These are totally optional and you can complete these at any time in your profile
              settings.</p>
            <p>We take your privacy extremely seriously and your personal information will never be shown to anyone
              without your permission.</p>
            <p>You have an option within findatrainer to give your trainers access to this information so they can help
              you achieve your goals and view your progress. You can remove this permission at any time.</p>
          </Col>
          <Col xs={ 8 } sm={ 8 } md={ 8 }>
            <Row>
              <Col xs={ 6 } sm={ 8 } md={ 6 }>
                <h3></h3>
                <FormGroup>
                  <ControlLabel>Date of Birth</ControlLabel>
                  <br />
                  <DatePicker
                    ref="dob"
                    name="dob"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    defaultValue={ doc && doc.dob }
                  />
                </FormGroup>
                <FormGroup controlId="gender">
                  <ControlLabel>Gender</ControlLabel>
                  <FormControl
                    componentClass="select"
                    ref="gender"
                    name="gender"
                    defaultValue={ doc && doc.gender }
                  >
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </FormControl>
                </FormGroup>
                <Row>
                  <Col xs={ 6 } sm={ 6 } md={ 6 }>
                    <FormGroup>
                      <ControlLabel>Weight</ControlLabel>
                      <FormControl
                        type="text"
                        ref="weight"
                        name="weight"
                        placeholder=""
                        defaultValue={ doc && doc.weight }
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 6 } sm={ 6 } md={ 6 }>
                    <FormGroup controlId="weightMetric">
                      <ControlLabel>Measurement System</ControlLabel>
                      <FormControl
                        componentClass="select"
                        ref="weightMetric"
                        name="weightMetric"
                        defaultValue={ doc && doc.weightMetric }
                      >
                        <option value=""></option>
                        <option value="kg">Kg</option>
                        <option value="female">Pounds</option>
                      </FormControl>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={ 6 } sm={ 6 } md={ 6 }>
                    <FormGroup>
                      <ControlLabel>Height</ControlLabel>
                      <FormControl
                        type="text"
                        ref="height"
                        name="height"
                        defaultValue={ doc && doc.height }
                        placeholder=""
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 6 } sm={ 6 } md={ 6 }>
                    <FormGroup controlId="heightMetric">
                      <ControlLabel>Measurement System</ControlLabel>
                      <FormControl
                        componentClass="select"
                        ref="heightMetric"
                        name="heightMetric"
                        defaultValue={ doc && doc.heightMetric }
                      >
                        <option value=""></option>
                        <option value="imperial">Kg</option>
                        <option value="pounds">Pounds</option>
                      </FormControl>
                    </FormGroup>
                  </Col>
                </Row>
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

ClientMeasurementEditor.propTypes = {
  client: React.PropTypes.object,
};
