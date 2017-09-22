import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';
import {Accounts} from 'meteor/accounts-base';
// Custom Collections
import {Clients} from '../../api/clients/clients.js';
import {Trainers} from '../../api/trainers/trainers.js';

var idUser;

if (!Meteor.isProduction) {
  const users = [{
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: {first: 'Carl', last: 'Winslow'},
    },
    roles: ['admin'],
  }];


  // Delete admin user to regenerate fixture data */
  users.forEach(({email, password, profile, roles}) => {
    const userExists = Meteor.users.findOne({'emails.address': email});

    if (!userExists) {
      userId = Accounts.createUser({email, password, profile});
      Roles.addUsersToRoles(userId, roles);
      idUser = userId;

      /* Clients fixtures */
      const clients = [{
        title: 'Require weight training program',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '190',
        weight: '80',
        sex: 'male',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring',
        description: 'Require weight training program',
        height: '190',
        weight: '60',
        sex: 'male',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'Tabarta circtuit re-program required',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '180',
        weight: '50',
        sex: 'female',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'Skin fold appointment by a qualified practisioner',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '170',
        weight: '60',
        sex: 'female',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'I had a motorbike accident and have lost substantial body muscle, can anyone assist me post physio therapy regain my preivous composure?',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '170',
        weight: '60',
        sex: 'female',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'I just had a baby and I would like to imporve my fitness again and loose some weight post child birth ',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '170',
        weight: '60',
        sex: 'female',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'I need to be able to increase my flexibility after working in a 9-5 office for 10 years without exercise.',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '170',
        weight: '60',
        sex: 'female',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'help people to get fit and treat injuries all in the one place.',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '170',
        weight: '60',
        sex: 'female',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'Skin fold appointment by a qualified practisioner',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '170',
        weight: '60',
        sex: 'female',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'Kick PT offers a friendly environment where everyone can get fit while having fun participating in boxing',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '170',
        weight: '60',
        sex: 'female',
        image: 'person.png',
        idUser: idUser
      }, {
        title: 'Toughen Up is a gym based in Altona focused on boxing and mixed martial arts.',
        description: "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the ",
        height: '170',
        weight: '60',
        sex: 'female',
        image: 'person.png',
        idUser: idUser
      }
      ];


      clients.forEach((client) => {
        const clientExists = Clients.findOne({title: client.title});
        if (!clientExists) Clients.insert(client);
      });
      console.log('Clients Added....');


      /* Trainers fixtures */
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
          overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          englishProficiency: "1",
          hourlyRate: "70",
          paidRate: "56",
          address1: "598 Grey Street",
          address2: "St Kilda",
          city: "Melbourne",
          country: "AU",
          postCode: "3183",
          phoneNumber: "+61412482482"
        },
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
          overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          englishProficiency: "1",
          hourlyRate: "70",
          paidRate: "56",
          address1: "598 Grey Street",
          address2: "St Kilda",
          city: "Melbourne",
          country: "AU",
          postCode: "3183",
          phoneNumber: "+61412482483"
        },
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
          overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          englishProficiency: "1",
          hourlyRate: "70",
          paidRate: "56",
          address1: "598 Grey Street",
          address2: "St Kilda",
          city: "Melbourne",
          country: "AU",
          postCode: "3183",
          phoneNumber: "+61412482484"
        },
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
          overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          englishProficiency: "1",
          hourlyRate: "70",
          paidRate: "56",
          address1: "598 Grey Street",
          address2: "St Kilda",
          city: "Melbourne",
          country: "AU",
          postCode: "3183",
          phoneNumber: "+61412482485"
        },
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
          overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          englishProficiency: "1",
          hourlyRate: "70",
          paidRate: "56",
          address1: "598 Grey Street",
          address2: "St Kilda",
          city: "Melbourne",
          country: "AU",
          postCode: "3183",
          phoneNumber: "+61412482485"
        },
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
          overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          englishProficiency: "1",
          hourlyRate: "70",
          paidRate: "56",
          address1: "598 Grey Street",
          address2: "St Kilda",
          city: "Melbourne",
          country: "AU",
          postCode: "3183",
          phoneNumber: "+61412482486"
        },
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
          overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          englishProficiency: "1",
          hourlyRate: "70",
          paidRate: "56",
          address1: "598 Grey Street",
          address2: "St Kilda",
          city: "Melbourne",
          country: "AU",
          postCode: "3183",
          phoneNumber: "+61412482487"
        }
      ];

      trainers.forEach((trainer) => {
        const trainerExists = Trainers.findOne({phoneNumber: trainer.phoneNumber});
        if (!trainerExists) Trainers.insert(trainer);
      });
      console.log('Trainers Added....');


    }
  });



}
