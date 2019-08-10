import React from 'react';
import { browserHistory, Router, Route, MenuItem } from 'react-router';
import { Alert, Row, Col, Panel, FormControl, Image, ButtonToolbar, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const handleNavigation = (_id) => {
  browserHistory.sh(`/trainers/${_id}`);
}

const handleNavigationPager = (selected) => {
  window.location.href = '/trainers/page/' + selected;
}

class ProductsList extends React.Component {
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
    this.setState({ searchTerm });
    this.props.searchQuery.set(searchTerm);
  }

  handleSearchClick(event) {

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


  handlePageClick(data) {
    let selected = Number(data.selected + 1);
    handleNavigationPager(selected)
  }

  handleStateChange(element) {
    if (element === null || element.value === undefined || element.value === false)
      this.setState({ stateTerm: null });
    else
      this.setState({ stateTerm: element.value });
  }

  handleCategoryChange(element) {
    if (element === null || element.value === undefined || element.value === false)
      this.setState({ categoryTerm: null });
    else
      this.setState({ categoryTerm: element.value });
  }


  render() {
    const { products } = this.props;
    // Listing based switch
    const area = this.props.area;
    const page = this.props.page
    var category = this.props.category;
    var search = this.props.search;

    if (area) {
      var hrefBuilder = '/directory/area/' + area + '/page/' + this.props.skipCount;
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

    return (<div className="Products">
      <div className="ProductSearch">
        <Row className="hidden">
          <Col xs={12} sm={4}>
          </Col>
          <Col xs={12} sm={4}>
          </Col>
          <Col xs={12} sm={4}>
            <div>
              <Select
                name="category"
                value={this.state.categoryTerm}
                options={categorySelectValues}
                onChange={this.handleCategoryChange.bind(this)}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="Products-list clearfix">
        <Col>
          <h1> &nbsp;&nbsp;Fitness Marketplace</h1>
          <br />
        </Col>
        {products.length > 0 ? products.map(({ _id, name, description, image, firstName, lastName }) => (
          <Col xs={12} sm={6} md={4} lg={4} className="clearfix">
            <Panel>
              <Row>
                <Col xs={12}>
                  <Image src="http://placehold.it/1600x900" responsive />
                </Col>
                <Col xs={8} sm={12} md={9}>
                  <a href={"/marketplace/" + _id} key={_id} onClick={() => handleNavigation(_id)}>
                    <h5><strong>{name}</strong></h5>
                  </a>
                  <p>{description}</p>
                </Col>
                <Col xs={12} sm={12} md={3}>
                  <h4 className="pull-right">$19</h4>
                </Col>
              </Row>
            </Panel>
          </Col>
        )) : <Alert>Sorry there are no listings found for '{this.state.searchTerm}.'</Alert>}
      </div>
      <Row>
        <ReactPaginate
          pageCount={this.props.pageCount}
          pageRangeDisplayed={1}
          marginPagesDisplayed={3}
          previousLabel={"<"}
          nextLabel={">"}
          pageNum={this.props.currentPage - 1}
          initialPage={this.props.currentPage - 1}
          hrefBuilder={(page) => hrefBuilder + page}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          disableInitialCallback="false"
        />
      </Row>
    </div>



    );
  }
}

ProductsList.propTypes = {
  products: React.PropTypes.array,
  searchQuery: React.PropTypes.object,
};

export default ProductsList;
