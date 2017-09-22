import './accounts/email-templates';
import './browser-policy';
import './fixtures';
import './api';


// Environmental Variables which should be in the hosting providers configuration or settings-development.json
//process.env.MAIL_URL = "smtp://postmaster@sandbox6cbe15e186864785b3d3243494543ba6.mailgun.org:1193c7cd15d4ebe8a58e07c28b5dc33e@smtp.mailgun.org:587";
var AWSScretUserSes ="AKIAI3VWXELJBD5USHXA";
var AWSScretPassSes =  "Ak8D5vUhOkxcknJkkqJokk/k5DXxyZe5/302LnmYm62r";
process.env.MAIL_URL = 'smtp://'+ encodeURIComponent(AWSScretUserSes) +':'+ encodeURIComponent(AWSScretPassSes) +'@email-smtp.us-west-2.amazonaws.com:587 ';
Accounts.emailTemplates.from = "Fit4all Accounts <support@magescale.com>";


/*
 * If you want to send emails via SES but not through accounts for example
 *

Email.setting = {
  region: 'us-west-2',
  accessKeyId: "AKIAI3VWXELJBD5USHXA",
  secretAccessKey: "Ak8D5vUhOkxcknJkkqJokk/k5DXxyZe5/302LnmYm62r"
};
var mailOptions = {
  from: 'Fred Foo ✔ <support@magescale.com>', // sender address
  to: 'stephen@aptscale.com, stephen@magescale.com, stephen@aquila.com.au', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ✔', // plaintext body
  html: '<b>Hello world ✔</b>' // html body
};
Email.send(mailOptions);
*/
