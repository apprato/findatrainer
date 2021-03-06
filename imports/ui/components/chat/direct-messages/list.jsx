// Imports
import React from "react";

// App Imports
import DirectMessageItems from "./items";

// Direct Messages List Component
class DirectMessagesList extends React.Component {
  render() {
    return (
      <div className="chatMessenger2">
        <div className="col-xs-12 col-md-8">
          <DirectMessageItems
            usersAllLoaded={this.props.usersAllLoaded}
            usersAll={this.props.usersAll}
            user={this.props.user}
          />
        </div>

        <div className="col-xs-12 col-md-8">
          <p className="tx-grey">Select a user to send direct messages.</p>
        </div>
      </div>
    );
  }
}

// Properties
DirectMessagesList.propTypes = {
  usersAllLoaded: React.PropTypes.bool,
  usersAll: React.PropTypes.array,
  user: React.PropTypes.object
};

// Contexts
DirectMessagesList.contextTypes = {
  router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default DirectMessagesList;
