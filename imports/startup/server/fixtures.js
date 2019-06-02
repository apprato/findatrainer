import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
// Custom Collections
import { Clients } from '../../api/clients/clients.js';
import { Trainers } from '../../api/trainers/trainers.js';
import { createWriteStream } from 'fs';

var idUser;

if (!Meteor.isProduction) {

  let usersTotal = parseInt(Meteor.users.find().fetch().length);
  let usersCount = 12;
  let usersAmount = 12;
  let users = [];
  let clients = [];
  let trainers = [];

  /* x users - Add 1 Client listing each **/
  if (usersTotal < usersCount) {

    for (i = 0; i < usersAmount; i++) {
      users.push(
        {
          email: faker.internet.email(),
          password: 'password',
          profile: {
            name: { first: faker.name.firstName(), last: faker.name.lastName() },
          },
          roles: ['client']
        }
      )
    }

    users.forEach(({ email, password, profile, roles }) => {
      const userExists = Meteor.users.findOne({ 'emails.address': email });

      if (!userExists) {
        userId = Accounts.createUser({ email, password, profile });
        Roles.addUsersToRoles(userId, roles);
        idUser = userId;

        const clients = [{
          title: faker.random.words,
          description: faker.lorem.paragraphs(3),
          height: '190',
          weight: '80',
          sex: 'male',
          image: 'person.png',
          idUser: idUser
        }
        ];

        clients.forEach((client) => {
          //const clientExists = Clients.findOne({ title: client.title });
          //if (!clientExists) Clients.insert(client);
          Clients.insert(client);
          console.log('Clients Added....');
        });
      }
    });

  }


  /* x users - Add 1 Trainer listing each **/
  usersTotal = parseInt(Meteor.users.find().fetch().length);
  usersCount = 24;
  users = [];
  if (usersTotal < usersCount) {

    for (i = 0; i < usersAmount; i++) {
      users.push(
        {
          email: faker.internet.email(),
          password: 'password',
          profile: {
            name: { first: faker.name.firstName(), last: faker.name.lastName() },
          },
          roles: ['trainer']
        }
      )
    }

    users.forEach(({ email, password, profile, roles }) => {
      const userExists = Meteor.users.findOne({ 'emails.address': email });

      if (!userExists) {
        userId = Accounts.createUser({ email, password, profile });
        Roles.addUsersToRoles(userId, roles);
        idUser = userId;

        const trainers = [
          {
            idUser: idUser,
            category: "personal_training",
            experienceLevel: "entry_level",
            education: [
              {
                school: "Certified Strength and Conditioning Specialist",
                dateFrom: "2013",
                dateTo: "2014",
                tertiaryEducation: "Certified Strength and Conditioning Specialist Diploma",
                areaOfStudy: "Certified Strength and Conditioning",
                description: "Official Certified Strength and Conditioning obtained description"
              },
              {
                school: "Swinburne University",
                dateFrom: "2006",
                dateTo: "2009",
                tertiaryEducation: "Sports Medicine",
                areaOfStudy: "Biophysics",
                description: "Sports Medicine (Description)"
              }
            ],
            employment: [
              {
                company: "Fitness FIrst",
                location: "South Yarra",
                title: "Certified Strength and Conditioning Trainer",
                fromMonth: "January",
                fromYear: "2015",
                toMonth: "January",
                toYear: "2016",
                description: "My first gig as a Certified Strength and Conditioning trainers (Description)"
              },
              {
                company: "Victoria Institute of Sport",
                location: "Melbourne",
                title: "Medical Bio-Physics",
                fromMonth: "January",
                fromYear: "2014",
                toMonth: "January",
                toYear: "2015",
                description: "Performed high performance assessment and training with elite athletes."
              }
            ],
            professionalTitle: "Certified Strength and Conditioning Specialist",
            overview: faker.lorem.paragraphs(3),
            englishProficiency: "1",
            hourlyRate: "70",
            paidRate: "56",
            address1: "598 Grey Street",
            address2: "St Kilda",
            city: "Melbourne",
            country: "AU",
            postCode: "3183",
            phoneNumber: "+61412482482"
          }
        ];

        trainers.forEach((trainer) => {
          //const trainerExists = Trainers.findOne({ phoneNumber: trainer.phoneNumber });
          //if (!trainerExists) 
          Trainers.insert(trainer);
        });
        console.log('Trainers Added....');
      }
    });
  }
}
