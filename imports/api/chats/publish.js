// Imports
import { Meteor } from "meteor/meteor";

// App Imports
import Chats from "./collection";

// Chats by chat room id
Meteor.publishComposite("chats-publication", chatRoomId => {
  check(chatRoomId, String);

  return {
    find: function () {
      return Chats.find({ chatRoomId }, { sort: { createdAt: -1 } });
    },
    children: [
      {
        find: function (chat) {
          check(chat, Object);
          return Meteor.users.find(chat.userId, {
            fields: { _id: 1, username: 1, createdAt: 1 }
          });
        }
      }
    ]
  };
});
