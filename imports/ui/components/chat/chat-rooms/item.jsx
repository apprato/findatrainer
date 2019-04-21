// Imports
import React from "react";
import moment from "moment";
import { Link } from "react-router";
import { Panel, PanelGroup } from 'react-bootstrap';


//  Chat Rooms Component
class ChatRoomsItem extends React.Component {
  render() {
    const { _id, title, description, createdAt, user } = this.props.chatRoom;

    return (
      <Link to={`/chat-room/${_id}`}>
        <Panel>
          <p>{description}</p>
          <p className="card-header hidden">{title}</p>
          <p className="card-body hidden">{description}</p>
          <div className="card-footer hidden">
            {user.username} &bull; {moment(createdAt).fromNow()}
          </div>
        </Panel>
      </Link>
    );
  }
}

// Properties
ChatRoomsItem.propTypes = {
  chatRoom: React.PropTypes.object
};

// Finally, export the Component
export default ChatRoomsItem;
