// Imports
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

// App Imports
import ChatRoomMembers from '../chat-room-members/collection';
import ChatRooms from './collection';
import Trainers from '../../api/trainers/trainers';
//import Users from '../../api/users/users';

export const add = new ValidatedMethod({
    name: 'ChatRooms.add',

    validate: new SimpleSchema({
        title: {
            type: String
        },

        description: {
            type: String
        },

        isPubic: {
            type: Boolean
        }
    }).validator(),

    run({ title, description, isPubic }) {
        console.log('M - ChatRooms.add / run');

        let response = {
            success: false,
            message: 'There was some sever error.',
            data: {
                chatRoomId: ''
            }
        };

        if (Meteor.userId()) {
            if (title != '' && description != '') {
                // Create new chat room
                let chatRoomId = ChatRooms.insert({
                    title,
                    description,
                    userId: Meteor.userId(),
                    isPubic
                });

                if (chatRoomId) {
                    // Add room member to above created chat room
                    ChatRoomMembers.insert({ chatRoomId: chatRoomId, userId: Meteor.userId() });

                    response.success = true;
                    response.message = 'Chat room added.';
                    response.data.chatRoomId = chatRoomId;
                }
            }
        } else {
            response.message = 'You are not logged in.';
        }

        return response;
    }
});



export const getDirectMessageRoom = new ValidatedMethod({
    name: 'ChatRooms.getDirectMessageRoom',

    validate: new SimpleSchema({
        friendUserId: {
            type: String
        }
    }).validator(),

    run({ friendUserId }) {
        console.log('M - ChatRooms.getDirectMessageRoom / run');

        let response = {
            success: false,
            message: 'There was some sever error.',
            data: {
                chatRoomId: ''
            }
        };

        if (Meteor.userId()) {
            if (friendUserId != '') {
                // Check if both user have already started chatting (chat room exists) or chatting for first time (create new chat room)
                let commonChatRoom = false;

                // Chat room exists check
                const chatRooms = ChatRooms.find({ userId: Meteor.userId() }).fetch();
                if (chatRooms.length > 0) {
                    chatRooms.forEach((chatRoom) => {
                        const chatRoomMember = ChatRoomMembers.findOne({ chatRoomId: chatRoom._id, userId: friendUserId });
                        if (chatRoomMember) {
                            commonChatRoom = chatRoom;
                        }
                    });
                }

                let chatRoomId;

                if (commonChatRoom !== false) {
                    // Chat room exists
                    chatRoomId = commonChatRoom._id;
                } else {
                    // Chat room does not exists, create a new chat room
                    const friendUser = Meteor.users.findOne(friendUserId);
                    chatRoomId = ChatRooms.insert({
                        title: `${Meteor.user().username} and ${friendUser.username}`,
                        description: 'Direct Message',
                        userId: Meteor.userId(),
                        isPubic: false
                    });

                    // Add chat room members
                    if (chatRoomId) {
                        ChatRoomMembers.insert({ chatRoomId: chatRoomId, userId: Meteor.userId() });
                        ChatRoomMembers.insert({ chatRoomId: chatRoomId, userId: friendUserId });
                    }
                }

                if (chatRoomId) {
                    response.success = true;
                    response.message = 'Chat room available.';
                    response.data.chatRoomId = chatRoomId;
                }
            }
        } else {
            response.message = 'You are not logged in.';
        }

        return response;
    }
});


/*
 * addDirectMessageRoom
 * Add Chat room if it doesn't exist or redirect to existing direct message chat room with trainer
 */
export const addDirectMessageRoom = new ValidatedMethod({
    name: 'ChatRooms.addDirectMessageRoom',
    validate: new SimpleSchema({
        trainerId: {
            type: String
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        }
    }).validator(),

    run({ trainerId, firstName, lastName }) {
        console.log('M - ChatRooms.addDirectMessageRoom / run');
        let response = {
            success: false,
            message: 'There was some sever error.',
            data: {
                chatRoomId: ''
            }
        };

        if (Meteor.userId()) {

            // Get userId which belongs to trainer listng
            const userTrainer = Trainers.findOne({ '_id': trainerId });
            let friendUserId = userTrainer.idUser;

            if (friendUserId != '') {
                // Check if both user have already started chatting (chat room exists) or chatting for first time (create new chat room)
                let commonChatRoom = false;

                // Chat room exists check
                const chatRooms = ChatRooms.find({ userId: Meteor.userId() }).fetch();
                if (chatRooms.length > 0) {
                    chatRooms.forEach((chatRoom) => {
                        const chatRoomMember = ChatRoomMembers.findOne({ chatRoomId: chatRoom._id, userId: friendUserId });
                        if (chatRoomMember) {
                            commonChatRoom = chatRoom;
                        }
                    });
                }

                let chatRoomId;

                if (commonChatRoom !== false) {
                    // Chat room exists
                    chatRoomId = commonChatRoom._id;
                } else {
                    // Chat room does not exists, create a new chat room
                    console.log('Meteor.user');
                    var uniqueID = Meteor.userId();
                    var firstNameUserLoggedIn = Meteor.users.findOne({ _id: uniqueID }).profile.name.first;
                    var lastNameUserLoggedIn = Meteor.users.findOne({ _id: uniqueID }).profile.name.last;

                    chatRoomId = ChatRooms.insert({
                        title: `${firstNameUserLoggedIn} ${lastNameUserLoggedIn} and ${firstName} ${lastName}`,
                        description: 'Direct Message',
                        userId: Meteor.userId(),
                        friendUserId: friendUserId,
                        isPubic: false
                    });
                    console.log('M - ChatRooms.insert / run');
                    console.log(chatRoomId);
                    // Add chat room members
                    if (chatRoomId) {
                        ChatRoomMembers.insert({ chatRoomId: chatRoomId, userId: Meteor.userId() });
                        ChatRoomMembers.insert({ chatRoomId: chatRoomId, userId: friendUserId });
                    }
                    console.log('end: ' + chatRoomId);
                }

                if (chatRoomId) {
                    response.success = true;
                    response.message = 'Chat room available.';
                    response.data.chatRoomId = chatRoomId;
                }
            }
        } else {
            response.message = 'You are not logged in.';
        }

        return response;
    }
});




Meteor.methods({
    getUserIdById: function (id) {
        var user = Meteor.users.find({ 'id': id });
        return user;
    }
});
