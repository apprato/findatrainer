// Imports
import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Row,
  Col
} from "react-bootstrap";
import { Link } from "react-router";

// App Imports
import * as ChatRoomMethods from "../../../../api/chat-rooms/methods";

// Public Chat Rooms Create Component
class ChatRoomsCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomTitle: "",
      roomDescription: "",
      isLoading: false,
      error: ""
    };
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitCreateRoom(event) {
    event.preventDefault();

    console.log("E - submit form create room");

    this.setState({ isLoading: true });

    if (this.state.roomTitle != "" && this.state.roomDescription != "") {
      const input = {
        title: this.state.roomTitle.trim(),
        description: this.state.roomDescription.trim(),
        isPubic: true
      };

      try {
        ChatRoomMethods.add.call(input, (error, response) => {
          console.log("M - ChatRooms.add / callback");

          this.setState({ isLoading: false });

          if (error) {
            this.setState({ error: error.reason });
          } else {
            this.setState({ roomTitle: "", roomDescription: "" });

            this.context.router.push(`/chat-room/${response.data.chatRoomId}`);
          }
        });
      } catch (e) {
        this.setState({ isLoading: false, error: "Please try again." });
      }
    } else {
      this.setState({
        isLoading: false,
        error: "Room title and description cannot be blank."
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.user._id ? (
          <form className="mt1" onSubmit={this.onSubmitCreateRoom.bind(this)}>
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
          </form>
        ) : (
            <Link to="/login">
              <button type="button" className="mt1 width100">
                Create Room
            </button>
            </Link>
          )}
      </div>
    );
  }
}

// Properties
ChatRoomsCreate.propTypes = {
  user: React.PropTypes.object
};

// Contexts
ChatRoomsCreate.contextTypes = {
  router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default ChatRoomsCreate;
