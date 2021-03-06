// Imports
import { Meteor } from "meteor/meteor";
import React from "react";
import { Link } from "react-router";
import { browserHistory } from 'react-router';
import { Alert, Row, Col } from 'react-bootstrap';


// App Imports
import * as ChatRoomMemberMethods from "../../../../api/chat-room-members/methods";
import ChatRoomsCreate from "./create";
import ChatRoomsItems from "./items";
import ChatItem from "../chat-item";
import SendChat from "../send-chat";

// Pubic Chat Rooms Detail Component
class ChatRoomsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatRoomId: props.params.chatRoomId,
      message: "",
      currentUserIsAMember: false,
      isLoading: false,
      error: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      chatRoomId: nextProps.params.chatRoomId
    });

    let currentUserIsAMember = false;
    this.props.chatRoomMembers.forEach((chatRoomMember, i) => {
      if (this.props.user) {
        if (
          this.props.chatRoomMembers[i].user &&
          this.props.chatRoomMembers[i].user._id === this.props.user._id
        ) {
          currentUserIsAMember = true;
        }
      }
    });
    this.setState({ currentUserIsAMember });
  }

  renderChats() {
    let chatsList;

    if (this.props.chatsLoaded) {
      if (this.props.chats.length > 0) {
        chatsList = this.props.chats.map(chat => (
          <ChatItem chat={chat} key={chat._id} />
        ));
      } else {
        chatsList = <div className="list tx-grey">No messages to show.</div>;
      }
    } else {
      chatsList = <div className="list tx-grey">Please wait...</div>;
    }

    return chatsList;
  }

  renderChatRoomDetails() {
    let chatRoomDetails;

    if (this.props.chatRoomLoaded) {
      chatRoomDetails = (
        <h4 className="chat-room-header">{this.props.chatRoom.title}</h4>
      );
    }

    return chatRoomDetails;
  }

  joinRoom(event) {
    event.preventDefault();

    console.log("E - join room");

    this.setState({ isLoading: true });

    if (this.state.chatRoomId != "") {
      const input = {
        chatRoomId: this.state.chatRoomId.trim()
      };

      try {
        ChatRoomMemberMethods.add.call(input, (error, response) => {
          console.log("M - Chats.add / callback");

          this.setState({ isLoading: false });

          if (error) {
            this.setState({ error: error.reason });
          } else {
            this.setState({ message: "" });
          }
        });
      } catch (e) {
        this.setState({ isLoading: false, error: "Please try again." });
      }
    } else {
      this.setState({
        isLoading: false,
        error: "The message cannot be blank."
      });
    }
  }

  render() {
    return (
      <div className="ChatRoomDetails">
        <Row>
          <Col className="chatContainer clearfix col-centered" xs={12} md={12}>
            <Col xs={12} sm={4} md={4} className="left">
              <h4>Conversations</h4>
              <ChatRoomsItems
                publicChatRoomsLoaded={this.props.publicChatRoomsLoaded}
                publicChatRooms={this.props.publicChatRooms}
              />
              <div className="hidden">
                <ChatRoomsCreate user={this.props.user} />
              </div>
            </Col>
            <Col xs={12} sm={8} md={8} className="right">
              {this.state.error ? (
                <p className="alert alert-danger">{this.state.error}</p>
              ) : (
                  ""
                )}
              {this.state.isLoading ? (
                <p className="alert alert-info">Please wait...</p>
              ) : (
                  ""
                )}

              {this.renderChatRoomDetails()}

              {this.renderChats()}

              {this.props.chatRoomMembersLoaded &&
                this.state.currentUserIsAMember ? (
                  <SendChat chatRoomId={this.state.chatRoomId} />
                ) : this.props.user._id ? (
                  <button
                    type="submit"
                    className="width100"
                    onClick={this.joinRoom.bind(this)}
                  >
                    Join this room
            </button>
                ) : (
                    <Link to="/login">
                      <button type="button" className="mt1 width100">
                        Join this room
              </button>
                    </Link>
                  )}
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

// Properties
ChatRoomsDetail.propTypes = {
  publicChatRoomsLoaded: React.PropTypes.bool,
  publicChatRooms: React.PropTypes.array,

  chatRoomLoaded: React.PropTypes.bool,
  chatRoom: React.PropTypes.object,

  chatRoomMembersLoaded: React.PropTypes.bool,
  chatRoomMembers: React.PropTypes.array,

  chatsLoaded: React.PropTypes.bool,
  chats: React.PropTypes.array,

  user: React.PropTypes.object
};

// Contexts
ChatRoomsDetail.contextTypes = {
  router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default ChatRoomsDetail;
