// Imports
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

// Chat Component
class ChatItem extends React.Component {

    render() {
        const chat = this.props.chat;

        return (
            <div className="list clearfix">
                <p className="listHeader">{chat.user.username}</p>
                <div className="listBody font-handwriting font-size-1-3">
                    {chat.message}
                </div>
                <p className="listFooter pull-right">
                    {moment(chat.createdAt).fromNow()}
                </p>
            </div>
        )
    }

}

// Properties
ChatItem.propTypes = {
    chat: React.PropTypes.object
};

// Finally, export the Component
export default ChatItem;
