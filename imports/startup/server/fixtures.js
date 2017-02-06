import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
// Custom Collections
import { Clients } from '../../api/clients/clients.js';

if (!Meteor.isProduction) {
  const users = [{
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: { first: 'Carl', last: 'Winslow' },
    },
    roles: ['admin'],
  }];

  users.forEach(({ email, password, profile, roles }) => {
    const userExists = Meteor.users.findOne({ 'emails.address': email });

    if (!userExists) {
      const userId = Accounts.createUser({ email, password, profile });
      Roles.addUsersToRoles(userId, roles);
    }
  });


  /* Clients fixtures */
  const clients = [{
    title: 'Require weight training program',
    description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
    height: '190',
    weight: '80',
    sex: 'male',
    image: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png'
  }, {
    title: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring',
    description: 'Require weight training program',
    height: '190',
    weight: '60',
    sex: 'male',
    image: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png'
  }, {
    title: 'Tabarta circtuit re-program required',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    height: '180',
    weight: '50',
    sex: 'female',
    image: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png'
  }, {
    title: 'Skin fold appointment by a qualified practisioner',
    description: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    height: '170',
    weight: '60',
    sex: 'female',
    image: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png'

  }];

  clients.forEach((client) => {
    const clientExists = Clients.findOne({ title: client.title });
    if (!clientExists) Clients.insert(client);
  });

}
