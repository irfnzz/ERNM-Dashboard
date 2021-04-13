const nodemailer = require('nodemailer');

const useremail = 'mailtrial953@gmail.com';
const emailsubject = 'Reminder on Disable User Accounts';
const emailbody = 'Dear Sir/Ms/Mr/Mrs, <br><br>This email serves as a reminder to you, administrator of the application to disable the accounts of the following users which are in inactive status of 30 days after their last login.<br><br>Kindly disable the accounts to avoid any unwanted harm to the system by unauthorized users.<br><br>Regards,<br><b>Petronas</b>';

function disablenotification( useremail ,emailsubject, emailtext) {
  
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
  html: emailbody
};

    transporter.sendMail(emailOption, function (err, data) {
        if (err) {
          console.log('Error occurs!', err);
        } else {
          console.log('Email sent!');
        }
      });

}

disablenotification( useremail ,emailsubject, emailbody )