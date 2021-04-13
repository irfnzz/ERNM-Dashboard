const nodemailer = require('nodemailer');

const useremail = 'mailtrial953@gmail.com';
const emailsubject = 'Reminder of Contract Expiration';
const emailtext = 'This Email serves as a reminder that  [worker name] contract with Petronas is expiring on [date],as indicated in our original contract.If you have any questions, feel free to reply to this email and we’ll set up a call or contact us at +123456789.Thank you and regards.';



function contractnotification( useremail ,emailtext,emailsubject) {
  
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mailtrial953@gmail.com',
    pass: 'asdfghjkl123.',
  },
});


let emailOption = {
  from: 'mailtrial953@gmail.com',
  to: useremail,
  subject: emailsubject,
  text:emailtext,
};



    transporter.sendMail(emailOption, function (err, data) {
        if (err) {
          console.log('Error occurs!', err);
        } else {
          console.log('Email sent!');
        }
      });

}

contractnotification( useremail ,emailtext,emailsubject)
