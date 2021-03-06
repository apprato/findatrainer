import React from 'react';
import { browserHistory, Router, Route, MenuItem } from 'react-router';
import { Alert, Row, Col, Panel, FormControl, Image, ButtonToolbar, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const handleNavigation = (_id) => {
  browserHistory.push(`/jobs/${_id}`);
}

const handleNavigationPager = (selected, filterSearch, filterCategory, ) => {
  if (filterCategory) {
    browserHistory.push('/jobs/category/' + filterCategory + '/page/' + selected);
  }
  else if (filterSearch) {
    browserHistory.push('/jobs/search/' + filterSearch + '/page/' + selected);
  }
  else {
    browserHistory.push('/jobs/page/' + selected);
  }
}

class JobsList extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearchEnter = this.handleSearchEnter.bind(this);
    this.state = {
      searchTerm: null,
      stateTerm: null,
      categoryTerm: null
    };
  }


  getCategoryName(categoryValue) {
    var categorySelectValues = [
      { value: 'health_fitness_centre', label: 'Health Fitness Centre', clearableValue: false },
      { value: 'personal_training', label: 'Personal Training', clearableValue: false },
      { value: 'martial_arts', label: 'Martial Arts', clearableValue: false },
      { value: 'wellbeing_centre', label: 'Wellbeing Centre', clearableValue: false },
      { value: 'yoga', label: 'Yoga', clearableValue: false },
      { value: 'exercise_equipment', label: 'Exercise Equipment', clearableValue: false },
      { value: 'massage_therapy', label: 'Massage Therapy', clearableValue: false },
      { value: 'holistic_health', label: 'Holistic Health', clearableValue: false },
      { value: 'corporate_health_fitness', label: 'Corporate Health Fitness', clearableValue: false },
      { value: 'pilates', label: 'Pilates', clearableValue: false },
      { value: 'nutritional_supplements', label: 'Nutritional Supplements', clearableValue: false },
      { value: 'life_coaching', label: 'Life Coaching', clearableValue: false },
      { value: 'weight_Loss', label: 'Weight Loss', clearableValue: false },
      { value: 'employment_and_careers', label: 'Employment and Careers', clearableValue: false },
      { value: 'group_health_fitness', label: 'Group Health Fitness', clearableValue: false }
    ];
    let category = categorySelectValues.find(category => category.value === categoryValue);
    if (category != null) {
      return category.label;
    }
  }


  handleSearchEnter(event) {
    if (event.key === 'Enter') {
      browserHistory.push('/jobs/search/' + event.target.value);
    }
  }


  handleSearchClick(event) {
  }


  handlePageClick(event) {
    let selected = Number(event.selected + 1);
    console.log(this.filterSearch);
    handleNavigationPager(selected, this.filterSearch, this.filterCategory)
  }

  handleStateChange(element) {
    if (element === null || element.value === undefined || element.value === false) {
      this.setState({ stateTerm: null });
    }
    else {
      console.log(element);
      console.log(element.value);
      console.log(element.label);
      this.setState({ stateTerm: element.value });
      console.log(stateTerm);
    }
  }

  handleCategoryChange(element) {
    if (element === null || element.value === undefined || element.value === false) {
      this.setState({ categoryTerm: null });
    }
    else {
      browserHistory.push('/jobs/category/' + element.value);
      //this.setState({categoryTerm: element.value});
    }
  }


  render() {
    const { jobs } = this.props;
    // Listing based switch
    const page = this.props.page;
    const { stateQuery } = this.props;
    var { categoryQuery } = this.props;
    var search = this.props.search;
    var category = this.props.categoryQuery;


    if (stateQuery) {
      var hrefBuilder = '/directory/area/' + stateQuery + '/page/' + this.props.skipCount;
    }

    var stateSelectValues = [
      { value: 'ACT', label: 'Australian Capital Territory', clearableValue: false },
      { value: 'NSW', label: 'New South Wales', clearableValue: false },
      { value: 'NT', label: 'Northern Territory', clearableValue: false },
      { value: 'QLD', label: 'Queensland', clearableValue: false },
      { value: 'SA', label: 'South Australia', clearableValue: false },
      { value: 'TAS', label: 'Tasmania', clearableValue: false },
      { value: 'VIC', label: 'Victoria', clearableValue: false },
      { value: 'WA', label: 'Western Australia', clearableValue: false }
    ];

    var categorySelectValues = [
      { value: 'health_fitness_centre', label: 'Health Fitness Centre', clearableValue: false },
      { value: 'personal_training', label: 'Personal Training', clearableValue: false },
      { value: 'martial_arts', label: 'Martial Arts', clearableValue: false },
      { value: 'wellbeing_centre', label: 'Wellbeing Centre', clearableValue: false },
      { value: 'yoga', label: 'Yoga', clearableValue: false },
      { value: 'exercise_equipment', label: 'Exercise Equipment', clearableValue: false },
      { value: 'massage_therapy', label: 'Massage Therapy', clearableValue: false },
      { value: 'holistic_health', label: 'Holistic Health', clearableValue: false },
      { value: 'corporate_health_fitness', label: 'Corporate Health Fitness', clearableValue: false },
      { value: 'pilates', label: 'Pilates', clearableValue: false },
      { value: 'nutritional_supplements', label: 'Nutritional Supplements', clearableValue: false },
      { value: 'life_coaching', label: 'Life Coaching', clearableValue: false },
      { value: 'weight_Loss', label: 'Weight Loss', clearableValue: false },
      { value: 'employment_and_careers', label: 'Employment and Careers', clearableValue: false },
      { value: 'group_health_fitness', label: 'Group Health Fitness', clearableValue: false }
    ];

    var Select = require('react-select');

    return (<div className="Jobs">
      <div className="JobSearch">
        <Row>
          <Col xs={12} sm={4}>
            <FormControl
              type="search"
              onKeyPress={this.handleSearchEnter}
              onClick={this.handleSearchClick}
              placeholder="Search Jobs"
              className="Search"
            />
          </Col>
          <Col xs={12} sm={4}>
          </Col>
          <Col xs={12} sm={4}>
            <div>
              <Select
                name="category"
                value={this.props.category}
                options={categorySelectValues}
                onChange={this.handleCategoryChange.bind(this)}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="Jobs-list">
        {jobs.length > 0 ? jobs.map(({ _id, jobTitle, overview, typeProject, payType, experienceLevel, jobLength }) => (
          <Panel>
            <Row>
              <Col xs={8} sm={9}>
                <a href={"/jobs/" + _id} key={_id} onClick={() => handleNavigation(_id)}>
                  <h2>{jobTitle}</h2>
                </a>
                <p>{overview}</p>
              </Col>
              <Col xs={12} sm={3}>
                <br />
                <p>{this.getCategoryName(category)}</p>
                <p>{} > {}</p>
              </Col>
            </Row>
          </Panel>
        )) : <Alert>Sorry there are no listings found for '{this.props.category}.'</Alert>}
        <Row>
          <ReactPaginate
            pageCount={this.props.pageCount}
            pageRangeDisplayed={1}
            marginPagesDisplayed={3}
            previousLabel={"<"}
            nextLabel={">"}
            pageNum={this.props.currentPage - 1}
            initialPage={this.props.currentPage - 1}
            //hrefBuilder={(page) => hrefBuilder + page }
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            filterCategory={this.props.category}
            filterSearch={this.props.search}
            disableInitialCallback="true"
          />
        </Row>
      </div>
    </div>);
  }
}

JobsList.propTypes = {
  jobs: React.PropTypes.array,
  searchQuery: React.PropTypes.object,
  stateQuery: React.PropTypes.object,
  categoryQuery: React.PropTypes.object,
};

export default JobsList;
