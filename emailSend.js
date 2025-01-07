var nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASS
  }
});

var mailOptions = {
  from: process.env.EMAIL_SENDER,
  to: process.env.EMAIL_RCPT,
  subject: 'soutenance',
  text: 'click ont this link to verify its you , https://google.com'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 