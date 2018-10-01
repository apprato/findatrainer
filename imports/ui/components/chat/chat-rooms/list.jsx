// Imports
import React from "react";
import { Link } from "react-router";

// App Imports
import ChatRoomsCreate from "./create";
import ChatRoomItems from "./items";

//  Chat Rooms List Component
class ChatRoomsList extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-12" />
        <h1>Messages</h1>

        <div className="col-xs-12 col-md-8">
          <ChatRoomItems
            publicChatRoomsLoaded={this.props.publicChatRoomsLoaded}
            publicChatRooms={this.props.publicChatRooms}
          />

          <ChatRoomsCreate user={this.props.user} />
        </div>
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
