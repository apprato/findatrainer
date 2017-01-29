import React from 'react';
import { Alert, Row, Col, Panel, FormControl, Image } from 'react-bootstrap';

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: null };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    this.props.searchQuery.set(searchTerm);
  }

  render() {
    const { clients } = this.props;
    return (<div className="Clients">
      <div className="ClientSearch">
        <i className="fa fa-search" />
        <FormControl
          type="search"
          onKeyUp={ this.handleSearch }
          placeholder="Find you client to work with?"
          className="Search"
        />
      </div>
      <div className="Clients-list">
        { clients.length > 0 ? clients.map(({ title, year, rated, plot, poster }) => (
          <Panel header={`${title} - ${year}`}>
            <Row>
              <Col xs={ 12 } sm={ 3 }>
                <Image src={ poster } alt={ title } responsive />
              </Col>
              <Col xs={ 12 } sm={ 9 }>
                <p><strong>Rated:</strong> { rated }</p>
                <p>{ plot }</p>
              </Col>
            </Row>
          </Panel>
        )) : <Alert>Sorry there are no clients found for '{ this.state.searchTerm }.'</Alert> }
      </div>
    </div>);
  }
}

Clients.propTypes = {
  clients: React.PropTypes.array,
  searchQuery: React.PropTypes.object,
};

export default Clients;
