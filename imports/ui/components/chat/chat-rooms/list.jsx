// Imports
import React from "react";
import { Link } from "react-router";
import { browserHistory } from 'react-router';
import { Alert, Row, Col, Button } from 'react-bootstrap';

// App Imports
import ChatRoomsCreate from "./create";
import ChatRoomItems from "./items";

//  Chat Rooms List Component
class ChatRoomsList extends React.Component {
  render() {
    return (
      <div class="ViewChatRooms">
        <Row>
          <Col className="col-centered" xs={12} sm={8} md={8}>
            <h1 className="page-header">Messages</h1>
          </Col>
          <Col className="col-centered" xs={12} md={8}>
            <Col xs={12} md={4}>
              <ChatRoomItems
                publicChatRoomsLoaded={this.props.publicChatRoomsLoaded}
                publicChatRooms={this.props.publicChatRooms}
              />
              <ChatRoomsCreate user={this.props.user} />
            </Col>
            <Col xs={12} md={8}>
              <h2 className="col-centered">Select your chat thread</h2>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

// Properties
ChatRoomsList.propTypes = {
  publicChatRoomsLoaded: React.PropTypes.bool,
  publicChatRooms: React.PropTypes.array,

  user: React.PropTypes.object
};

// Contexts
ChatRoomsList.contextTypes = {
  router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default ChatRoomsList;
