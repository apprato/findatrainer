import React from 'react';
import {browserHistory, Router, Route, MenuItem  } from 'react-router';
import {Alert, Row, Col, Panel, FormControl, Image, ButtonToolbar, Button} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const handleNavigation = (_id) => {
  browserHistory.push(`/clients/${_id}`);
}

const handleNavigationPager = (selected) => {
  window.location.href = '/clients/page/' + selected;
}

class ClientsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      stateTerm: null,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const searchTerm = event.target.value;
    this.setState({searchTerm});
    this.props.searchQuery.set(searchTerm);
  }

  handleSearchClick(event) {
    console.log(this.getState({}));
    console.log('this.state.stateTerm' + this.state.stateTerm);
    console.log('this.state.searchTerm' + this.state.searchTerm);
  }

  handlePageClick(data) {
    let selected = Number(data.selected + 1);
    handleNavigationPager(selected)
  }

  handleStateChange (element) {
    if(element===null || element.value===undefined || element.value===false)
      this.setState({stateTerm: null});
    else
      this.setState({stateTerm: element.value});
  }

  handleCategoryChange (element) {
    if(element===null || element.value===undefined || element.value===false)
      this.setState({categoryTerm: null});
    else
      this.setState({categoryTerm: element.value});
  }


  render() {
    const {clients} = this.props;
    console.log(clients);
    // Listing based switch
    const area = this.props.area;
    const page = this.props.page
    var category = this.props.category;
    var search = this.props.search;

    if (area) {
      var hrefBuilder = '/directory/area/' + area + '/page/' + this.props.skipCount;
    }

    var stateSelectValues = [
      { value: 'ACT',  label: 'Australian Capital Territory', clearableValue: false },
      { value: 'NSW',  label: 'New South Wales',              clearableValue: false },
      { value: 'NT',   label: 'Northern Territory',           clearableValue: false },
      { value: 'QLD',  label: 'Queensland',                   clearableValue: false },
      { value: 'SA',   label: 'South Australia',              clearableValue: false },
      { value: 'TAS',  label: 'Tasmania',                     clearableValue: false },
      { value: 'VIC',  label: 'Victoria',                     clearableValue: false },
      { value: 'WA',   label: 'Western Australia',            clearableValue: false }
    ];

    var categorySelectValues = [
      { value: 'health_fitness_centre',     label: 'Health Fitness Centre',     clearableValue: false },
      { value: 'personal_training',         label: 'Personal Training',         clearableValue: false },
      { value: 'martial_arts',              label: 'Martial Arts',              clearableValue: false },
      { value: 'wellbeing_centre',          label: 'Wellbeing Centre',          clearableValue: false },
      { value: 'yoga',                      label: 'Yoga',                      clearableValue: false },
      { value: 'exercise_equipment',        label: 'Exercise Equipment',        clearableValue: false },
      { value: 'massage_therapy',           label: 'Massage Therapy',           clearableValue: false },
      { value: 'holistic_health',           label: 'Holistic Health',           clearableValue: false },
      { value: 'corporate_health_fitness',  label: 'Corporate Health Fitness',  clearableValue: false },
      { value: 'pilates',                   label: 'Pilates',                   clearableValue: false },
      { value: 'nutritional_supplements',   label: 'Nutritional Supplements',   clearableValue: false },
      { value: 'life_coaching',             label: 'Life Coaching',             clearableValue: false },
      { value: 'weight_Loss',               label: 'Weight Loss',               clearableValue: false },
      { value: 'employment_and_careers',    label: 'Employment and Careers',    clearableValue: false },
      { value: 'group_health_fitness',      label: 'Group Health Fitness',      clearableValue: false }
    ];

    var Select = require('react-select');

    return (<div className="Clients">
      <div className="ClientSearch">

      </div>
      <div className="Clients-list">
        { clients.length > 0 ? clients.map(({_id, dob, title, sex, weight, weightMetric, height, heightMetric, firstName, lastName}) => (
          <Panel>
            <Row>
              <Col xs={ 8 } sm={ 10 }>
                <a href={ "/clients/" + _id } key={ _id } onClick={ () => handleNavigation(_id) }>
                  <h2>{ firstName } { lastName }</h2>
                </a>
                <p>{ title }</p>
              </Col>
              <Col xs={ 12 } sm={ 2 }>
                <p>Gender: { sex }</p>
                <p>Weight: { weight } { weightMetric }</p>
                <p>Height: { height } { heightMetric }</p>
              </Col>
            </Row>
          </Panel>
        )) : <Alert>Sorry there are no listings found for '{ this.state.searchTerm }.'</Alert> }
        <Row>
          <ReactPaginate
            pageCount={this.props.pageCount}
            pageRangeDisplayed={1}
            marginPagesDisplayed={3}
            previousLabel={"<"}
            nextLabel={">"}
            pageNum={this.props.currentPage - 1}
            initialPage={this.props.currentPage - 1}
            hrefBuilder={(page) => hrefBuilder + page }
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            disableInitialCallback="false"
          />
        </Row>
      </div>
    </div>);
  }
}

ClientsList.propTypes = {
  clients: React.PropTypes.array,
  searchQuery: React.PropTypes.object,
};

export default ClientsList;
