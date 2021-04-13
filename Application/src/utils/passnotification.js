const nodemailer = require('nodemailer');

const useremail = 'mailtrial953@gmail.com';
const emailtext = 'Your password need to change. Change it before someone does it for you!';
const emailsubject = 'Password need to change!';
const passworddate = 31;

function passwordnoti( useremail ,emailtext,emailsubject,passworddate) {
  
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


if(passworddate>=30){
    transporter.sendMail(emailOption, function (err, data) {
        if (err) {
          console.log('Error occurs!', err);
        } else {
          console.log('Email sent!');
        }
      });
}else{
    console.log('No need change password!');
}
}

passwordnoti( useremail ,emailtext,emailsubject,passworddate)