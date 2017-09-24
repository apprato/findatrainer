import { Accounts } from 'meteor/accounts-base';

const name = 'Fit4All Accounts';
const email = '<support@magescale.com>';
const from = `${name} ${email}`;
const emailTemplates = Accounts.emailTemplates;

emailTemplates.siteName = name;
emailTemplates.from = from;


/* Reset Password Email */
emailTemplates.resetPassword = {
  subject() {
    return `[${name}] Reset Your Password`;
  },
  text(user, url) {
    const userEmail = user.emails[0].address;
    const urlWithoutHash = url.replace('#/', '');

    return `A password reset has been requested for the account related to this
    address (${userEmail}). To reset the password, visit the following link:
    \n\n${urlWithoutHash}\n\n If you did not request this reset, please ignore
    this email. If you feel something is wrong, please contact our support team:
    ${email}.`;
  },
};

/* Verify Account Email */
emailTemplates.verifyEmail = {
  subject() {
    return "[Fit4All] Verify Your Email Address";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
      urlWithoutHash = url.replace( '#/', '' ),
      supportEmail   = "support@magescale.com",
      emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};
