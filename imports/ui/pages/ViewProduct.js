import React from 'react';
import { browserHistory } from 'react-router';
import { Alert, Row, Col, Button, Panel, Image } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';


const ViewProduct = ({ product }) => (

  <div className="ViewProduct">
    <Panel>
      <Row>
        <Col xs={12} sm={8}>
          <Image src="http://placehold.it/1600x900" responsive />
          <h3>Overview</h3>
          <div>
            <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
            <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
            <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>
          </div>
          <br />
          <div className="Products-Education hidden">
            <h2>Education</h2>
            {product.education ? product.education.map(({ school, dateFrom, dateTo, tertiaryEducation, areaOfStudy }) => (
              <Row>
                <Col xs={12} sm={12}>
                  <h3>{school}</h3>
                  <p><strong>Date From:</strong> {dateFrom}</p>
                  <p><strong>Date To:</strong> {dateTo}</p>
                  <p><strong>Tertiary Education:</strong> {tertiaryEducation}</p>
                  <p><strong>Area of Study: </strong>{areaOfStudy}</p>
                </Col>
              </Row>
            )) : <Alert>No education listed.'</Alert>}
          </div>
          <div className="Products-Employment hidden">
            <h2>Employment</h2>
            {product.employment ? product.employment.map(({ company, location, title, fromMonth, fromYear, toMonth, toYear, description }) => (
              <Row>
                <Col xs={12} sm={12}>
                  <h3>{company}</h3>
                  <p><strong>Location:</strong> {location}</p>
                  <p><strong>Title:</strong> {title}</p>
                  <p><strong>From Month:</strong> {fromMonth}</p>
                  <p><strong>From Year: </strong>{fromYear}</p>
                  <p><strong>To Month:</strong> {toMonth}</p>
                  <p><strong>To Year:</strong> {toYear}</p>
                </Col>
              </Row>
            )) : <Alert>No education listed.'</Alert>}
          </div>
        </Col>
        <Col xs={12} sm={4}>
          <h1>{product.name}</h1>
          <p>By {product.firstName} {product.lastName}</p>
          <Button className="btn btn-primary btn-block" key={product._id} onClick={() => handleChatUser(product._id, product.firstName, product.lastName)} variant="light">Purchase - $19.95</Button>
          <div className="hidden">
            <p>
              {product.address1}<br />
              {product.address2}<br />
              {product.city}<br />
              {product.country}<br />
              {product.postCode}<br />
              {product.phoneNumber}<br />
            </p>
            <h2>Rate</h2>
            <p><strong>Category: </strong>{product.category}</p>
            <p><strong>Experience Level: </strong>{product.experienceLevel}</p>
            <p><strong>English Proficiency:</strong>{product.englishProficiency}</p>
            <p>${product.hourlyRate} / hour</p>
          </div>
        </Col>
      </Row>
    </Panel>
  </div>
);

ViewProduct.propTypes = {
  product: React.PropTypes.object,
};

export default ViewProduct;
